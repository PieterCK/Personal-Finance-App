import re
from typing import List
from .models import StatementParser, TransactionRecord
from decimal import Decimal
import fitz

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

#  Clean raw parsed data
def clean_raw_parse(data_list):
    '''
    param: data_list: list of raw parsed data
    return: list of data in chunks composed of date, whitespace, info, and detail.['26/03','','TRANSAKSI DEBIT DB', 'SPBU-PERTAMINA 250,000.14 DB']
    '''
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

# Clean transaction details
def clean_transaction_details(transaction_records, trash_value, dirty_transaction_details):
    '''
    param: transaction_details: list of transaction details
    param: trash_value: list of regex patterns of trash data
    return: Details without trash values, new lines, extra spaces, random numbers. Only words
    '''
    for value in transaction_records.values():
        trash_value.append(value)
    separators = '|'.join(trash_value)

    tmp = " ".join(re.split(separators, dirty_transaction_details)).strip()
    tmp = re.sub('\n',' ',tmp)
    tmp = re.sub(' +',' ',tmp)
                        
    tmp = " ".join(re.findall("[^\d\W]+", tmp))
    transaction_records['details'] = tmp
    return transaction_records

# Find numbers and turn to decimal
def cleanse_number(raw_string):
    '''
    param: dirty string of numbers, e.g: "Amount = 2,001,140.28 ;"
    return: Decimal number "2,001,140.28"
    '''
    number_string = re.sub(r'[^\d.]', '',raw_string)
    number_decimal = Decimal(number_string)
    return number_decimal

def track_actual_changes(transaction_records, actual_balance):
    if transaction_records['entry'] == 'Debit':
        actual_balance['mutasi_db'] += transaction_records['amount']
    elif transaction_records['entry'] == 'Credit':
        actual_balance['mutasi_cr'] += transaction_records['amount']
    return actual_balance

def highlight_pdf(uploaded_pdf, transaction_details):
    # Open IoBuffer pdf
    doc = fitz.Document(stream = uploaded_pdf, filetype = 'pdf')
    for page in doc:
        ### SEARCH
        text = "TRANSAKSI DEBIT"
        text_instances = page.search_for(text)

        ### HIGHLIGHT
        for inst in text_instances:
            highlight = page.add_highlight_annot(inst)
            highlight.update()

    ### OUTPUT
    doc.save("output.pdf", garbage=4, deflate=True, clean=True)
    return doc
    
    

