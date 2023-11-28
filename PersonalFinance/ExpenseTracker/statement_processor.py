import re
from typing import List, Dict, Union
from .models import StatementParser, TransactionRecord, AccountCategory, Bank, BalanceRecord
from .utils import process_raw_pages, clean_transaction_details, cleanse_number, month_converter
import json
from datetime import date, datetime
import tabula
import pandas as pd
import logging
from django.db.models import Q

class BCAStatementProcessor:
    def __init__(self, file_obj: str):
        tmp_trash_value = re.split(',', StatementParser.objects.filter(bank_code="BCA").filter(category="trash_value").values()[0]['pattern'])
        self.trash_value: List[str] = '|'.join(tmp_trash_value)
        self.file_obj = file_obj
        self.period_info: Dict[str] = {}
        self.df_body: List[pd.DataFrame] = tabula.read_pdf(file_obj, pages="all",columns=[71.3, 190, 295.5, 325, 460], area=[228.34, 0, 841.68, 555.44])
    
    def extract_period_info(self) -> Dict[str, Union[str, int]]:
        df: pd.DataFrame = tabula.read_pdf(self.file_obj, pages="1", area=[100, 272.5, 200.34, 555.44])[0].transpose()
        new_columns = df.iloc[0]
        df.columns = new_columns
        df_header = df.to_dict("records")[-1]
        try:
            tmp_period = df_header["PERIODE"].split(" ")
            period_info: Dict[str, Union[str, int]] = {
                "month": month_converter(tmp_period[0]),
                "year": tmp_period[1],
            }
        except errorParsingHeader as e:
            logging.error("Error extracting BCA statement's header: %s", e)
            return {"error": "Error extracting BCA statement's header", "message":str(e)}
        self.period_info = period_info
        return period_info

    def verify_pdf_file(self) -> bool:
        columns: List[str] = ['TANGGAL', 'KETER','ANGAN', "CBG", "MUTASI", "SALDO"]
        for column in columns:
            df_columns = self.df_body[0].columns.tolist()
            if column not in df_columns:
                return False
        return True
    
    def process_bankstatement(self, vue_config=False):
        transactions_records = []
        stated_balance = {
            "bank_code":"BCA"
        }
        calculated_balance = {
            "credit_mutation":0,
            "debit_mutation":0
        }
        for page in self.df_body:
            df = page.rename(columns={
                'KETER': 'INFO',
                'ANGAN': 'KETERANGAN'
                }).fillna("")
            for idx, row in df.iterrows():
                # Edge Cases
                '''
                1. Skip rows with "Bersambung ke Halaman berikut"
                2. Bunga doesn't have DB or CR specified, assign it to Credit
                3. Skip the first row containing "SALDO AWAL"
                '''
                
                if "Bersambung ke Halaman berikut" in row["MUTASI"]+row["SALDO"]:
                    continue
                
                row_balance = cleanse_number(row["SALDO"]) if row["SALDO"] else 0
                
                if "SALDO AWAL" in row["INFO"]: 
                    stated_balance["starting_balance"] = row_balance
                    continue

                match = re.search("(CR|DB)", row["INFO"] + row["MUTASI"])
                row_entry =  match.group(1) if match else '-'
                if row_entry != "-":
                    row_entry = "Credit" if row_entry == "CR" else "Debit"
                elif row_entry == "-" and re.search("BUNGA", row['INFO']):
                    row_entry = "Credit"
                row_amount = cleanse_number(row["MUTASI"].split(" ")[0]) if row["MUTASI"] else 0

                if row['TANGGAL']:
                    day = int(row["TANGGAL"].split("/")[0])
                    month = int(row["TANGGAL"].split("/")[1])
                    year = int(self.period_info["year"])
                    row_date = f"{day:02d}-{month:02d}-{year:04d}"
                    row_details = " ".join(re.split(self.trash_value, row["KETERANGAN"])).strip()
                    tmp = {
                        "pk":None,
                        "amount": row_amount,
                        "info": row["INFO"],
                        "account_type": None,
                        "date": row_date,
                        "entry": row_entry,
                        "details": row_details,
                        "bank_code":"BCA"
                    }
                    if vue_config:
                        tmp.update({
                            "select":False,
                            "error": False,
                        })
                    transactions_records.append(tmp)
                    if row_entry == "Credit":
                        calculated_balance["credit_mutation"] += row_amount
                    else:
                        calculated_balance["debit_mutation"] += row_amount
                else:
                    is_statements_footer = (row['INFO'] and row['KETERANGAN'] and row['CBG'] and ['MUTASI'])
                    if is_statements_footer:
                        footer_list = {
                            "SALDO AWAL":"starting_balance",
                            "SALDO AKHIR": "ending_balance",
                            "MUTASI CR":"credit_mutation",
                            "MUTASI DB":"debit_mutation",
                        }
                        row_name = row["INFO"]+row['KETERANGAN'].split(":")[0].strip()
                        row_val = cleanse_number(row['CBG']+row['MUTASI'])
                        if row_name in footer_list:
                            row_name = footer_list[row_name]
                        stated_balance[row_name] = row_val
                    else:
                        transactions_records[-1]['details']+=" "+row["KETERANGAN"]
                        transactions_records[-1]['details'].strip()

        if (calculated_balance['credit_mutation'] == stated_balance['credit_mutation'] and
         stated_balance['debit_mutation'] == calculated_balance['debit_mutation']):
            period_key= "{:02}-{:04}".format(self.period_info["month"], self.period_info["year"])
            stated_balance.update(self.period_info)
            out =  {
                'data':{
                    'transactions':transactions_records,
                    "balance_summaries":[stated_balance]
                }
            }
        else:
            out = {
                'error': 'missmatch between caluclated & stated balance',
                'data': {
                    "calculated_balance": calculated_balance,
                    "stated_balance": stated_balance
                }
            }
        return out

class SubmitTransactionRecord:
    def __init__(self, transactions, balance_summaries, user: None) -> None:
        self.user = user
        self.transactions = transactions
        self.balance_summaries = balance_summaries

    def submit_transactions(self) -> Dict[str, Union[str, int]]:
        acknowledgement = {}
        failure = []
        for transaction in self.transactions:
            bank_code = Bank.objects.filter(bank_code=transaction['bank_code']).get()
            account_category = AccountCategory.objects.filter(
                account_type=transaction['account_type'], 
                user=self.user
                ).get() if transaction['account_type'] else None
            balance_summary = BalanceRecord.objects.filter(
                user=self.user,
                bank=bank_code,
                month=transaction['date'].split('-')[1],
                year=transaction['date'].split('-')[2]
            ).get()
            if balance_summary:
                try:
                    new_record = TransactionRecord.objects.create(
                        user=self.user,
                        bank=bank_code,
                        info=transaction['info'],
                        entry=transaction['entry'],
                        amount=transaction['amount'],
                        details=transaction['details'],
                        balance_summary=balance_summary,
                        date=datetime.strptime(transaction['date'].split()[0], "%d-%m-%Y"),
                        account_type=account_category,
                    )
                    acknowledgement[new_record.pk] = transaction['info'] + transaction['date']
                except Exception as e:
                    logging.error("Error saving transaction: %s", e)
                    failure.append(transaction)
                    continue
            else:
                failure.append(transaction)

        return {
            "saved": len(acknowledgement),
            "failed": len(failure),
            "total": len(self.transactions),
            "pk_map": acknowledgement,
            "failure": failure
        }

    def submit_balance_summaries(self):
        acknowledgement = {}
        failure = []
        for bs in self.balance_summaries:
            bank_code = Bank.objects.filter(bank_code=bs['bank_code']).get()
            existing_record = BalanceRecord.objects.filter(
                user=self.user,
                bank=bank_code,
                month=bs['month'],
                year=bs['year']
            ).exists()
            if not existing_record:
                try:
                    new_record = BalanceRecord.objects.create(
                        user=self.user,
                        month=bs['month'],
                        year=bs['year'],
                        bank=bank_code,
                        ending_balance=bs['ending_balance'],
                        starting_balance=bs['starting_balance'],
                        credit_mutation=bs['credit_mutation'],
                        debit_mutation=bs['debit_mutation']
                    )
                    acknowledgement[(bs['month'], bs['year'])] = new_record.pk
                except Exception as e:
                    logging.error("Error saving balance summary: %s", e)
                    failure.append(bs)
                    continue
            else:
                failure.append(bs)
        return {
            "saved": len(acknowledgement),
            "failed": len(failure),
            "total": len(self.balance_summaries),
            "pk_map": acknowledgement,
            "failure": failure
        }

    def submit(self):
        output = self.submit_balance_summaries()
        if output['failed'] > 0:
            return output
        
        output = self.submit_transactions()
        if output['failed'] > 0:
            return output
        return output
    
    def update(self):
        acknowledgement = {}
        failure = []
        for transaction in self.transactions:
            try:
                bank_code = Bank.objects.filter(bank_code=transaction['bank_code']).get()
                account_category = AccountCategory.objects.filter(
                    Q(account_type=transaction['account_type']),
                    Q(user=self.user) | Q(is_preset=True)
                ).get() if transaction['account_type'] else None
                exists = TransactionRecord.objects.filter(pk=transaction['pk'], user=self.user, bank=bank_code).first()
                if exists:
                    exists.account_type = account_category
                    exists.save()
                    acknowledgement[exists.pk] = transaction['account_type']
            except Exception as e:
                    logging.error("Error updating transactions: %s", e)
                    failure.append(transaction)
                    continue
        return {
            "saved": len(acknowledgement),
            "failed": len(failure),
            "total": len(self.transactions),
            "pk_map": acknowledgement,
            "failure": failure
        }

    def delete(self):
        # Delete transactions & delete balance record/summary with empty transaction list
        acknowledgement = {}
        response_transaction = []
        response_balance_summaries = []
        for transaction in self.transactions:
            bank_code = Bank.objects.filter(bank_code=transaction['bank_code']).get()
            exists = TransactionRecord.objects.filter(pk=transaction['pk'], user=self.user, bank=bank_code).first()
            if exists:
                exists.delete()
                acknowledgement[exists.pk] = exists.pk
        for bs in self.balance_summaries:
            bank_code = Bank.objects.filter(bank_code=bs['bank_code']).get()
            exists = BalanceRecord.objects.filter(pk=bs['pk'], user=self.user, bank=bank_code).first()
            count = TransactionRecord.objects.filter(pk=bs['pk'], user=self.user, bank=bank_code).count()
            if exists and count < 1:
                exists.delete()
                acknowledgement[exists.pk] = exists.pk
            elif exists:
                transaction = TransactionRecord.objects.filter(balance_summary=exists, user=self.user, bank=bank_code)
                serialized_transactions = [transaction.serialize() for transaction in transactions]
                response_transaction.extend(serialized_transactions)
                response_balance_summaries.append(exists.serialize())
        return {
            "deleted": len(acknowledgement),
            "transaction": response_transaction
        }

def process_bankstatement(reader, bank_code = "BCA", vue_config=False):
    processor = None
    if bank_code == "BCA":
        processor = BCAStatementProcessor(reader)
    else:
        return {
            "error": "Bank {0} is not supported yet".format(bank_code)
        }

    if not processor.verify_pdf_file():
        return {
            "error": "Failed to verify statement PDF"
        }
    
    period_info = processor.extract_period_info()
    if "error" in period_info:
        return period_info

    compiled_result = processor.process_bankstatement(vue_config)
    return compiled_result