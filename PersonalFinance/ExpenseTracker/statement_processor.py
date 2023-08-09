import re
from typing import List
from .models import StatementParser, TransactionRecord, AccountCategory, Bank
from .utils import process_raw_pages, clean_transaction_details, cleanse_number, track_actual_changes, highlight_pdf
import json
from datetime import date, datetime

def verify_pdf_is_bank_statement(parsed_pages ,parse_value):
    matched_keyword = 0
    for current_page in parsed_pages:
        for keyword in parse_value:
            if keyword in current_page:
                matched_keyword += 1

    not_bank_statement = matched_keyword < len(parse_value)*0.8
    if not_bank_statement:
        return False
    else:
        return True
    
def process_bca_statement(parsed_pages, trash_value, parse_value, period = None):
    statement_transactions = []
    stated_balance = {}
    actual_balance = {
        "mutasi_cr": 0,
        "mutasi_db": 0
    }
    for current_page in parsed_pages:
        for i in range(len(current_page)-2):            
            trf_date = re.search("(\d\d/\d\d)", current_page[i])
            transaction_records = {}

            # Identify and organize transaction informations
            if trf_date and current_page[i+2] in parse_value and current_page[i+1] == ' ':
                day = int(current_page[i].split("/")[0])
                month = int(current_page[i].split("/")[1])
                year = int(period['year'])
                date_string = f"{day:02d}-{month:02d}-{year:04d}"

                transaction_records = {
                    'date': date_string,
                    'info': current_page[i+2]
                }
                dirty_transaction_details = current_page[i+3]  
                                
                try: 
                    entry_type = re.findall("(CR|DB)", transaction_records['info'] + dirty_transaction_details)[0]
                    if entry_type == 'CR':
                        transaction_records['entry'] = 'Credit'
                    elif entry_type == 'DB':
                        transaction_records['entry'] = 'Debit'
                except IndexError:
                    # Special cases
                    if transaction_records['info'] == 'KR OTOMATIS':
                        transaction_records['entry'] = 'Credit'
                    else:
                        transaction_records['entry'] = '-'

                try:
                    transaction_records['amount'] = [x for x in dirty_transaction_details.split() if re.search("(\d\d[.]\d\d$)", x)][0]
                except IndexError:
                    transaction_records['amount'] = '-'

                transaction_records['bank_code'] = 'BCA'

                # Record stated balance changes
                if "SALDO AKHIR" in dirty_transaction_details:
                    tmp_saldo_akhir = re.split('SALDO AKHIR', dirty_transaction_details)[1].split()
                    stated_balance['ending_balance'] = [x for x in tmp_saldo_akhir if re.search("(\d\d[.]\d\d$)", x)][0]
                if "MUTASI CR" in dirty_transaction_details:
                    tmp_mutasi_cr = re.split('MUTASI CR', dirty_transaction_details)[1].split()
                    stated_balance['mutasi_cr'] = cleanse_number([x for x in tmp_mutasi_cr if re.search("(\d\d[.]\d\d$)", x)][0])
                if "MUTASI DB" in dirty_transaction_details:
                    tmp_mutasi_db = re.split('MUTASI DB', dirty_transaction_details)[1].split()
                    stated_balance['mutasi_db'] = cleanse_number([x for x in tmp_mutasi_db if re.search("(\d\d[.]\d\d$)", x)][0])

                # Remove trash values from transaction detail
                transaction_records = clean_transaction_details(transaction_records, trash_value, dirty_transaction_details)

                # Turn transaction amount to decimal
                transaction_records['amount'] = cleanse_number(transaction_records['amount'])

                # Track actual balance changes
                actual_balance = track_actual_changes(transaction_records, actual_balance)

                # Compile statement transaction
                if transaction_records["info"] != "SALDO AWAL":
                    statement_transactions.append(transaction_records)

    return statement_transactions, stated_balance, actual_balance

def verify_processed_transactions(statement_transactions, stated_balance, actual_balance):
    '''
    param: statement_transactions: List of processed statement transactions
    param: stated_balance: Dict of stated balance changes
    param: actual_balance: Dict of actual balance changes
    return: suspicious_transactions: List of suspicious transactions
    '''
    # Difference in recorded and actual mutasi
    db_difference = stated_balance['mutasi_db'] - actual_balance['mutasi_db']
    cr_difference = stated_balance['mutasi_cr'] - actual_balance['mutasi_cr']

    # Calculate average detail length
    average_detail_length = 0
    for transaction in statement_transactions:
        average_detail_length += len(transaction['details'])
    average_detail_length /= len(statement_transactions)
    
    # Check for imbalance in stated vs actual balance
    suspicious_transactions = []
    if db_difference + cr_difference != 0:
        # Flag suspicious transactions
        for transaction in statement_transactions:

            # Transactions without entry type
            if transaction['entry'] != "Credit" and transaction['entry'] != "Debit":
                transaction['suspicion'] = 'Cannot identify entry type'
                suspicious_transactions.append(transaction)

            # Transactions without amount
            elif transaction['amount'] == '-':
                transaction['suspicion'] = 'Cannot identify amount'
                suspicious_transactions.append(transaction)

            # Above average transaction details length 
            elif len(transaction['details']) > average_detail_length * 2 and transaction['info'] !='SALDO AWAL' and transaction['info'] !='BIAYA ADM':
                transaction['suspicion'] = 'Potentially unregistered transaction type'
                suspicious_transactions.append(transaction)

        return False, suspicious_transactions
    else:
        return True, suspicious_transactions

def process_bankstatement(bank_code, reader, input_value= None, period = None):
    # Get additional input variable
    parse_value = re.split(',', StatementParser.objects.filter(bank_code = bank_code).filter(category = "parse_value").values()[0]['pattern'])
    trash_value = re.split(',', StatementParser.objects.filter(bank_code = bank_code).filter(category = "trash_value").values()[0]['pattern'])
    
    if input_value:
        for value in input_value:
            parse_value.append(value)
    parsed_pages = process_raw_pages(reader.pages, parse_value)
    is_bankstatement = verify_pdf_is_bank_statement(parsed_pages ,parse_value)
    if not is_bankstatement:
        return {
            'is_correct_pdf': is_bankstatement
        }
    
    # Define output variables
    statement_transactions = []
    stated_balance = {}
    actual_balance = {}
    suspicious_transactions = []

    # Process statement according to bank code
    if bank_code == "BCA":
        statement_transactions, stated_balance, actual_balance = process_bca_statement(parsed_pages, trash_value, parse_value, period)
    else:
        return
    
    # Check whether parsed transactions are valid
    is_valid, suspicious_transactions = verify_processed_transactions(statement_transactions, stated_balance, actual_balance)
    parse_value.remove("\d\d/\d\d")
    return {
        "transactions": statement_transactions,
        "stated_balance": stated_balance,
        "actual_balance": actual_balance,
        "suspicious_transactions": suspicious_transactions,
        "is_valid": is_valid,
        "is_correct_pdf": is_bankstatement,
        "parse_value": parse_value
    }

def submit_transactions(user,statement_transactions):
    acknowledgement = {}
    failure = []
    for transaction in statement_transactions:
        try:
            TransactionRecord.objects.create(
                user = user,
                bank = Bank.objects.filter(bank_code = transaction['bank_code']).get(),
                info = transaction['info'],
                entry = transaction['entry'],
                amount = transaction['amount'],
                details = transaction['details'],
                date = datetime.strptime(transaction['date'].split()[0], "%d-%m-%Y"),
                account_type = AccountCategory.objects.filter(account_type = transaction['account_type']).get()
            )
            pk = TransactionRecord.objects.filter(user = user).order_by('-pk')[0].pk
            acknowledgement[pk] = transaction['info']+transaction['date']
        except:
            failure.append(transaction)
            continue

    return {
        "saved": len(acknowledgement),
        "failed": len(failure),
        "total": len(statement_transactions),
        "pk_map": acknowledgement,
        "failure": failure
    }
    