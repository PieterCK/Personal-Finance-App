from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.http import FileResponse, JsonResponse
from django.core.cache import cache
import PyPDF2
import json
from django.db.models import Q 
from collections import defaultdict
from django.db.models.functions import ExtractMonth, ExtractYear
from .models import AccountCategory
from django.http import JsonResponse
from datetime import datetime
from .models import User, StatementParser, TransactionRecord
from .statement_processor import process_bankstatement, submit_transactions
from .utils import highlight_pdf, handle_file
from django.views import View
from json import dumps
from django.core import serializers



# Create your views here.
def login_view(request):
    if request.method == "POST":
        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "ExpenseTracker/login.html", {
                "message": "Invalid email and/or password."
            })
    else:
        return render(request, "ExpenseTracker/login.html")

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

def register_view(request):
    if request.method == "POST":
        CONTEXT = {
            "message": None
        }

        # Ensure username & email are unique
        username = request.POST["username"]
        email = request.POST["email"]

        all_usernames = User.objects.values_list('username', flat=True)
        all_emails = User.objects.values_list('email', flat=True)

        if username in all_usernames:
            CONTEXT['message'] = "Username already taken."
        if email in all_emails:
            CONTEXT['message'] = "Email already taken."

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            CONTEXT['message'] = "Passwords must match."

        # Returns error message if register infos aren't valid
        valid_register_info = CONTEXT['message'] == None            
        if not valid_register_info:
            return render(request, "ExpenseTracker/register.html", CONTEXT)

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError as e:
            print(e)
            return render(request, "ExpenseTracker/register.html", {
                "message": "Email address already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "ExpenseTracker/register.html")
    
@login_required
def index(request):
    return render(request, "ExpenseTracker/index.html")

@method_decorator(login_required, name='dispatch')
class BankstatementView(View):
    def get(self, request):
        CONTEXT={
        }
        # Retrieve all unique months and years
        months_and_years = TransactionRecord.objects.annotate(
            month=ExtractMonth('date'),
            year=ExtractYear('date')
        ).values('month', 'year').distinct()

        # Organize the months by year in a dictionary
        months_by_year = defaultdict(list)

        # Loop through the months and years
        for entry in months_and_years:
            month = entry['month']
            year = entry['year']
            # Append the month to the corresponding year
            months_by_year[year].append(month)

        # Print the dictionary
        for year, months in months_by_year.items():
            print(f"{year}: {months}")

        cache.delete('output_pdf_bytes')

        if cache.get('original_pdf'):
            CONTEXT["show_pdf"] = 'original'
        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)

@method_decorator(login_required, name='dispatch')
class CRUDBankstatementAPI(View):
    def process_request_data(self, data, request):
        current_user = request.user.id
        response = {}

        if current_user != data.user_id:
            response = {
                "status": 400,
                "error": ValueError,
                "message": "Request user is not logged in user"
            }
            return False, JsonResponse(response)
        
        user = authenticate(request, username=data.user_id, password=pin)
        if user is None:
            response = {
                "status": 400,
                "error": ValueError,
                "message": "Wrong password"
            }
            return False, JsonResponse(response)
        return True, True

    def cached_transactions(data, request):
        return
    
    def get(self, request):
        data = request.GET
        valid, response =self.process_request_data(data, request)
        if not valid:
            return response

        for period in [data.start_period, data.end_period]:
            period_day, period_month, period_year = period.split("-")
            try:
                period_date = datetime(int(period_year), int(period_month), int(period_day))
            except ValueError:
                response = {
                    "status": 400,
                    "error": "ValueError",
                    "message": "Invalid date format in period: {}".format(period)
                }
                return JsonResponse(response)    
            
        start_period = datetime(int(data.start_period.split("-")[2]), int(data.start_period.split("-")[1]), int(data.start_period.split("-")[0]))
        end_period = datetime(int(data.end_period.split("-")[2]), int(data.end_period.split("-")[1]), int(data.end_period.split("-")[0]))
        
        transactions = TransactionRecord.objects.filter(user__username='USER', date__range=[start_period, end_period])
        
        if not transactions.exists():
            response = {
                "status": 400,
                "error": "ValueError",
                "message": "Unable to find records from {} to {}, make sure you've entered the correct range".format(start_period, end_period)
            }
            return JsonResponse(response)
        else:
            serialized_transactions = serializers.serialize('json', transactions)
            response_data = {
                "status": 200,
                "data": serialized_transactions,
            }
            return JsonResponse(response_data)

    
    def post(self, request):
        data = json.loads(request.body)
        print("data: ", data)
        user = User.objects.get(pk=request.user.id)
        statusObj = submit_transactions(user, data)
        if statusObj['saved'] == statusObj['total']:        
            return JsonResponse({
                "status":200,
                "message":"Data succesfully received and saved"
            })
        else:
            return JsonResponse({
                "status":400,
                "message":"Only {0} / {1} data successfuly saved".format(statusObj['saved'], statusObj['total']),
                "failure": statusObj['failure'],
            })
    
    def put(self, request):
        return

@login_required
def process_bankstatement_api(request):
    if request.method == "POST":
        RESPONSE = {}

        uploaded_pdf = request.FILES.get('uploaded_file')
        bank_code = request.POST.get('bank')
        input_value = request.POST.get('input_value')
        period = {
            "month": request.POST.get('month'),
            "year": request.POST.get('year')
        }
        if input_value and cache.get('original_pdf'):
            input_value = input_value.split(',')
            original_pdf_info = cache.get('original_pdf')
            bank_code = original_pdf_info["bank_code"]
            file_object = handle_file(original_pdf_info["file"],"OBJECT")
        elif not input_value and uploaded_pdf and bank_code:
            original_pdf_info = {
                "file": uploaded_pdf,
                "bank_code": bank_code
            }
            cache.set('original_pdf', original_pdf_info, timeout=300)
            file_object = handle_file(uploaded_pdf, "OBJECT")
        else:
            RESPONSE['redir_url'] = 'bankstatement'
            return JsonResponse(RESPONSE, safe=False)

        # Process uploaded PDF file
        reader = PyPDF2.PdfReader(file_object)
        transaction_data = process_bankstatement(bank_code, reader, input_value, period)

        if not transaction_data['is_correct_pdf']:
            RESPONSE["message"] = "Couldn't Load PDF! Please make sure you're uploading the right PDF file or have selected the correct bank"
            return JsonResponse(RESPONSE, safe=False)

        if transaction_data['is_valid']:
            cache.set('transaction_data', transaction_data, timeout=900)
            RESPONSE['redir_url'] = 'labeling'
            return JsonResponse(RESPONSE, safe=False)
        else:
            RESPONSE["show_pdf"] = 'highlighted'
            if not uploaded_pdf:
                original_pdf_info = cache.get('original_pdf')
                uploaded_pdf = original_pdf_info["file"]
            file_buffer = handle_file(uploaded_pdf, "BUFFER")
            output_pdf_bytes = highlight_pdf(file_buffer, bank_code, input_value)
            file_buffer.seek(0)
            cache.set('output_pdf_bytes', output_pdf_bytes, timeout=300)

        RESPONSE["transaction_data"] = transaction_data

        response = JsonResponse(RESPONSE)
        return response

@method_decorator(login_required, name='dispatch')
class TransactionLabelingView(View):
    def prepare_data_for_view(self, transaction_data):
        modified_transactions = []
        for idx, transaction in enumerate(transaction_data):
            transaction["select"]= 0
            transaction["account_type"]= None
            transaction["key"]= idx
            transaction["error"] = False
            modified_transactions.append(transaction)
        return modified_transactions
    
    def get(self, request):
        CONTEXT= {}
        user = User.objects.get(pk=request.user.id)
        preset_account_types = AccountCategory.objects.filter(is_preset=True).values_list('account_type', flat=True)
        user_account_types = AccountCategory.objects.filter(user=user).values_list('account_type', flat=True)
        
        preset_account_types_list = list(preset_account_types)
        user_account_types_list = list(user_account_types)
        CONTEXT['account_types'] = json.dumps(preset_account_types_list + user_account_types_list)
        transaction_data = cache.get("transaction_data")
        CONTEXT['transactions'] = json.dumps(self.prepare_data_for_view(transaction_data['transactions'])) if transaction_data else None
        
        return render(request, "ExpenseTracker/transaction_labeling.html", CONTEXT)

@login_required
def statement_parser(request):
    '''
    !!!UNDER DEVELOPMENT!!!
    '''
    if request.method == "PUT":
        # put new value to StatementParser
        input_value = request.POST.get('input_value').split(',')
        for value in input_value:
            StatementParser.objects.create(value=value)

@login_required
def display_pdf(request, pdf_type="original"):
    if pdf_type == "original":
        original_pdf_info = cache.get('original_pdf')
        file_buffer = handle_file(original_pdf_info["file"],"BUFFER")
        file_buffer.seek(0)
        return FileResponse(file_buffer,  as_attachment=False, filename='original_bank_statement.pdf')
    elif pdf_type == "highlighted":
        output_pdf_bytes = cache.get('output_pdf_bytes')
        output_pdf_bytes.seek(0) 
        return FileResponse(output_pdf_bytes,  as_attachment=False, filename='highlighted_bank_statement.pdf')