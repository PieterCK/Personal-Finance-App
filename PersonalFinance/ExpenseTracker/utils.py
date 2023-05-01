import re
from typing import List
from .models import StatementParser, TransactionRecord
from decimal import Decimal


def handle_uploaded_file(f):  
    with open('ExpenseTracker/static/ExpenseTracker/upload/'+f.name, 'wb+') as destination:  
        for chunk in f.chunks():  
            destination.write(chunk) 

def clean_raw_parse(data_list):
    parsed_list = []
    i = 0
    while i < len(data_list):
        if re.search("(\d\d/\d\d)", data_list[i]) and data_list[i+1] == ' ':
            for n in range(3):
                x = i + n
                parsed_list.append(data_list[x])
            i += 3
            temp = []
            while i < len(data_list) and not (re.search("(\d\d/\d\d)", data_list[i]) and data_list[i+1] == ' '):
                temp.append(data_list[i])
                i += 1
            parsed_list.append("".join(temp))
        else:
            i += 1
    return parsed_list

def parse_statement(bank_code, reader):
    # Get delimiter(separator) for corresponding bank
    parse_value = re.split(',', StatementParser.objects.filter(bank_code = bank_code).filter(category = "parse_value").values()[0]['pattern'])
    trash_value = re.split(',', StatementParser.objects.filter(bank_code = bank_code).filter(category = "trash_value").values()[0]['pattern'])

    # Turn uploaded PDF into list of parsed pages
    parsed_pages = []
    def process_raw_pages(pages_read, counter):
        separators = '|'.join(parse_value)
        if counter < len(pages_read):
            page = pages_read[counter]
            raw_parse = re.split('('+separators+')', page.extract_text())
            parsed_pages.append(clean_raw_parse(raw_parse))

            # Recursive call to process next page
            process_raw_pages(pages_read, counter+1)

        return parsed_pages

    # Turn list of parsed pages into list of transaction records(dict)
    statement_transactions = []
    recorded_balance = {}
    tracking_balance = {
        "mutasi_cr": 0,
        "mutasi_db": 0
    }
    def process_parsed_statements(parsed_pages, counter):
        if counter < len(parsed_pages):
            page_n = parsed_pages[counter]
            transaction_records = {}
            for i in range(len(page_n)-2):            
                trf_date = re.search("(\d\d/\d\d)", page_n[i])

                # Identify and organize transaction informations
                if trf_date and page_n[i+2] in parse_value and page_n[i+1] == ' ':
                    transaction_records = {
                        'date': page_n[i],
                        'info': page_n[i+2]
                    }
                    dirty_transaction_details = page_n[i+3]  
                                    
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

                    # Record stated balance changes
                    if "SALDO AKHIR" in dirty_transaction_details:
                        tmp_saldo_akhir = re.split('SALDO AKHIR', dirty_transaction_details)[1].split()
                        recorded_balance['ending_balance'] = [x for x in tmp_saldo_akhir if re.search("(\d\d[.]\d\d$)", x)][0]
                    if "MUTASI CR" in dirty_transaction_details:
                        tmp_mutasi_cr = re.split('MUTASI CR', dirty_transaction_details)[1].split()
                        recorded_balance['mutasi_cr'] = [x for x in tmp_mutasi_cr if re.search("(\d\d[.]\d\d$)", x)][0]
                    if "MUTASI DB" in dirty_transaction_details:
                        tmp_mutasi_db = re.split('MUTASI DB', dirty_transaction_details)[1].split()
                        recorded_balance['mutasi_db'] = [x for x in tmp_mutasi_db if re.search("(\d\d[.]\d\d$)", x)][0]

                    # Remove trash values from transaction detail
                    for value in transaction_records.values():
                        trash_value.append(value)
                    separators = '|'.join(trash_value)

                    tmp = " ".join(re.split(separators, dirty_transaction_details)).strip()
                    tmp = re.sub('\n',' ',tmp)
                    tmp = re.sub(' +',' ',tmp)
                                      
                    tmp = " ".join(re.findall("[^\d\W]+", tmp))
                    transaction_records['details'] = tmp

                    # Turn transaction amount to decimal
                    transaction_amount = re.sub(r'[^\d.]', '',transaction_records['amount'])
                    transaction_records['amount'] = Decimal(transaction_amount)

                    # Track actual cashflow
                    if transaction_records['entry'] == 'Debit':
                        tracking_balance['mutasi_db'] += transaction_records['amount']
                    elif transaction_records['entry'] == 'Credit':
                        tracking_balance['mutasi_cr'] += transaction_records['amount']

                    statement_transactions.append(transaction_records)
            
            process_parsed_statements(parsed_pages, counter+1)
        else:
            # Turn recorded_balance into decimal
            for key, value in recorded_balance.items():
                balance = re.sub(r'[^\d.]', '',value)
                recorded_balance[key] = Decimal(balance)

            # Difference in recorded and actual mutasi
            db_difference = recorded_balance['mutasi_db'] - tracking_balance['mutasi_db']
            cr_difference = recorded_balance['mutasi_cr'] - tracking_balance['mutasi_cr']
            print(db_difference)
            print(cr_difference)

            # Calculate average detail length
            average_detail_length = 0
            for transaction in statement_transactions:
                average_detail_length += len(transaction['details'])
            average_detail_length /= len(statement_transactions)
            
            if db_difference + cr_difference != 0:
                # Flag suspicious transactions
                suspicious_transactions = []
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
                return suspicious_transactions
            else:
                return statement_transactions
        
    parsed_output = process_raw_pages(reader.pages, 0)
    final_transactions = process_parsed_statements(parsed_output, 0)
    
    # Insert final_transactions into TransactionRecord model
    # for transaction in final_transactions:
    #     TransactionRecord.objects.create(
    #         date = transaction['date'],
    #         entry = transaction['entry'],
    #         amount = transaction['amount'],
    #         details = transaction['details']
    #     )
        
    # Print final_transactions

    # for page in final_transactions:
    #     print("<->")
    #     for key, value in page.items():
    #         print("Transaction "+ key + "= ", value)
    #     print("<->")
    

