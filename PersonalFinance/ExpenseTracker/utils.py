import re
from typing import List
from .models import StatementParser
def handle_uploaded_file(f):  
    with open('ExpenseTracker/static/ExpenseTracker/upload/'+f.name, 'wb+') as destination:  
        for chunk in f.chunks():  
            destination.write(chunk) 

def split_string(source, separators):
    separators = '|'.join(separators)
    print(separators)
    return re.split('('+separators+')', source)

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
    parse_value = StatementParser.objects.filter(bank_code = bank_code).filter(category = "parse_value").values()[0]['pattern']
    trash_value = StatementParser.objects.filter(bank_code = bank_code).filter(category = "trash_value").values()[0]['pattern']
    parse_value = re.split(',', parse_value)

    # Turn uploaded PDF into list of parsed pages
    parsed_pages = []
    def process_raw_pages(pages_read, counter):
        
        if counter < len(pages_read):
            page = pages_read[counter]

            raw_parse = split_string(page.extract_text(), parse_value)
            
            parsed_pages.append(clean_raw_parse(raw_parse))

            # Recursive call to process next page
            process_raw_pages(pages_read, counter+1)

        return parsed_pages

    # Turn list of parsed pages into list of transaction records(dict)
    statement_transactions = []
    def process_parsed_statements(parsed_pages, counter):
        
        if counter < len(parsed_pages):
            page_n = parsed_pages[counter]
            
            transaction_records = {}
            for i in range(len(page_n)-2):            
                trf_date = re.search("(\d\d/\d\d)", page_n[i])

                # Detect unidentified transaction type 
                if trf_date and not page_n[i+2] in parse_value and page_n[i+1] == ' ':
                    print("<!!!> unidentified transaction type: ",page_n[i+2])
                    print("page_n[i] = ", page_n[i])
                
                # Identify and organize transaction informations
                elif trf_date and page_n[i+2] in parse_value and page_n[i+1] == ' ':
                    # print("OK")
                    transaction_records = {
                        'Date': page_n[i],
                        'Info': page_n[i+2],
                        'Details': page_n[i+3]
                    }                  
                    try: 
                        transaction_records['Entry'] = re.findall("(CR|DB)", transaction_records['Info'] + transaction_records['Details'])[0]
                    except IndexError:
                        transaction_records['Entry'] = '-'
                    try:
                        transaction_records['Amount'] = [x for x in transaction_records['Details'].split() if re.search("(\d\d[.]\d\d$)", x)][0]
                    except IndexError:
                        transaction_records['Amount'] = '-'
            
                    statement_transactions.append(transaction_records)
            process_parsed_statements(parsed_pages, counter+1)

        return statement_transactions
    
    parsed_output = process_raw_pages(reader.pages, 0)
    final_transactions = process_parsed_statements(parsed_output, 0)

    for page in final_transactions:
        print("-----")
        for key, value in page.items():
            print("Transaction "+ key + "= ", value)
        print("-----")

