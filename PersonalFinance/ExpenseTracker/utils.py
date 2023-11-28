import re
from typing import List, Dict, Union
from .models import StatementParser, TransactionRecord, AccountCategory
from decimal import Decimal
import fitz
import io
from django.db.models import Q , Min, Max
from django.db.models.functions import ExtractMonth, ExtractYear
from datetime import date, datetime
from django.db.models import Sum

def month_converter(month:str) -> Union [int,bool]:
    month_mapping = {
        "JANUARI": 1,
        "FEBRUARI": 2,
        "MARET": 3,
        "APRIL": 4,
        "MEI": 5,
        "JUNI": 6,
        "JULI": 7,
        "AGUSTUS": 8,
        "SEPTEMBER": 9,
        "OKTOBER": 10,
        "NOVEMBER": 11,
        "DESEMBER": 12
    }
    if month in month_mapping:
        return month_mapping[month]
    else:
        return False

def handle_file(uploaded_pdf, form):
    '''
    param: request.FILE object
    return: 
    '''
    file_buffer = io.BytesIO()
    tmp_pdf = uploaded_pdf
    for chunk in tmp_pdf.chunks():
        file_buffer.write(chunk)
    
    if form == "BUFFER":
        return file_buffer
    elif form == "OBJECT":
        file_buffer.seek(0)
        file_object = io.BufferedReader(file_buffer)
        return file_object

# Turn uploaded PDF into list of parsed pages
def process_raw_pages(pages_read, parse_value):
    '''
    param: pages_read: list of PDFPage objects
    param: parse_value: list of regex patterns to parse data
    return: list of parsed pages
    '''
    parsed_pages = []
    separators = '|'.join(parse_value)
    for page in pages_read:
        raw_parse = re.split('('+separators+')', page.extract_text())
        parsed_pages.append(clean_raw_parse(raw_parse))
    return parsed_pages

# Clean transaction details
def clean_transaction_details(transaction_records, trash_value, dirty_transaction_details):
    '''
    param: transaction_details: list of transaction details
    param: trash_value: list of regex patterns of trash data
    return: Details without trash values, new lines, extra spaces, random numbers. Only words
    '''
    for value in transaction_records.values():
        if type(value) == str:
            trash_value.append(value)
    separators = '|'.join(trash_value)

    tmp = " ".join(re.split(separators, dirty_transaction_details)).strip()
    tmp = re.sub('\n',' ',tmp)
    tmp = re.sub(' +',' ',tmp)
                        
    tmp = " ".join(re.findall("[^\d\W]+", tmp))
    transaction_records['details'] = tmp
    return transaction_records

# Find stringy numbers and turn it to decimal
def cleanse_number(raw_string):
    '''
    param: dirty string of numbers, e.g: "Amount = 2,001,140.28 ;"
    return: Decimal number "2,001,140.28"
    '''
    if not raw_string:
        return 0.0
    number_string = re.sub(r'[^\d.]', '',raw_string)
    number_decimal = round(float(number_string),1)
    return number_decimal

def track_actual_changes(transaction_records, actual_balance):
    if transaction_records['entry'] == 'Debit':
        actual_balance['mutasi_db'] += transaction_records['amount']
    elif transaction_records['entry'] == 'Credit':
        actual_balance['mutasi_cr'] += transaction_records['amount']
    return actual_balance

    
def get_account_types(user):
    # Get all account types
    preset_account_types = AccountCategory.objects.filter(is_preset=True).values_list('account_type', flat=True)
    user_account_types = AccountCategory.objects.filter(user=user).values_list('account_type', flat=True)
    preset_account_types_list = list(preset_account_types)
    user_account_types_list = list(user_account_types)
    return preset_account_types_list + user_account_types_list

def get_unlabeled_transactions_period(user):
    # Find the earliest month and year of unlabelled transactions
    unlabelled_transactions = TransactionRecord.objects.filter(account_type__isnull=True, user=user)

    earliest_unlabelled_date = unlabelled_transactions.aggregate(
        earliest_month=Min(ExtractMonth('date')),
        earliest_year=Min(ExtractYear('date'))
    )
    # If there are unlabelled transactions, set the startPeriod and endPeriod
    if earliest_unlabelled_date['earliest_month'] is not None:
        startPeriod = date(earliest_unlabelled_date['earliest_year'], earliest_unlabelled_date['earliest_month']-1, 1)
        endPeriod = date(earliest_unlabelled_date['earliest_year'], earliest_unlabelled_date['earliest_month']-1, 1)
        result = {
            "start_period": startPeriod.strftime('%m-%Y'),
            "end_period": endPeriod.strftime('%m-%Y'),
        }
    else:
        result = None
    return result

class TransactionDataFormatter:
    def __init__(self, transaction_qset):
        self.transaction_data = transaction_qset

