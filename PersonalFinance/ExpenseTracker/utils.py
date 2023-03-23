import re

def handle_uploaded_file(f):  
    with open('ExpenseTracker/static/ExpenseTracker/upload/'+f.name, 'wb+') as destination:  
        for chunk in f.chunks():  
            destination.write(chunk) 

def split_string(source, separators):
    separators = '|'.join(separators)
    print(separators)
    return re.split('('+separators+')', source)