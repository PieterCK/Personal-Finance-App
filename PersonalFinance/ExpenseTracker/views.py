from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.http import FileResponse, JsonResponse
from django.core.cache import cache
import PyPDF2

from .models import User, StatementParser
from .forms import BankstatementForm, BankstatementDiagnoseForm
from .statement_processor import process_bankstatement
from .utils import highlight_pdf, handle_file
from django.views import View
from json import dumps
# Create your views here.
def login_view(request):
    if request.method == "POST":
        # Attempt to sign user in
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, email=email, password=password)
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
            "form": BankstatementForm(),
            "diagnose_form": BankstatementDiagnoseForm(),
            "show_pdf": None
        }
        cache.delete('output_pdf_bytes')

        if cache.get('original_pdf'):
            CONTEXT["show_pdf"] = 'original'
        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)

@login_required
def process_bankstatement_api(request):
    if request.method == "POST":
        RESPONSE = {}

        uploaded_pdf = request.FILES.get('uploaded_file')
        bank_code = request.POST.get('bank')
        input_value = request.POST.get('input_value')

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
        transaction_data = process_bankstatement(bank_code, reader, input_value)

        if not transaction_data['is_correct_pdf']:
            RESPONSE["message"] = "Couldn't Load PDF! Please make sure you're uploading the right PDF file or have selected the correct bank"
            return JsonResponse(RESPONSE, safe=False)

        if transaction_data['is_valid']:
            cache.set('transaction_data', transaction_data, timeout=300)
            RESPONSE['redir_url'] = 'labeling'
            return JsonResponse(RESPONSE, safe=False)
        else:
            RESPONSE["message"] = "Aww man, Looks like there's imbalance between stated & parsed amount"
            RESPONSE["show_pdf"] = 'highlighted'
            if not uploaded_pdf:
                original_pdf_info = cache.get('original_pdf')
                uploaded_pdf = original_pdf_info["file"]
            file_buffer = handle_file(uploaded_pdf, "BUFFER")
            output_pdf_bytes = highlight_pdf(file_buffer, bank_code, input_value)
            file_buffer.seek(0)
            cache.set('output_pdf_bytes', output_pdf_bytes, timeout=300)

        RESPONSE["transaction_data"] = transaction_data

        response = JsonResponse(RESPONSE, safe=False)
        return response

@method_decorator(login_required, name='dispatch')
class TransactionLabelingView(View):
    def get(self, request):
        CONTEXT= {}
        CONTEXT['transaction_data']="transaction_data"
        transaction_data = cache.get("transaction_data")
        print("TRANSACTION DATA: ", transaction_data)
        if transaction_data:
            CONTEXT['transaction_data']=transaction_data['transactions']
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
def parsed_transactions_view(request):
    if request.method == "GET":
        if cache.get('transaction_data'):
            transaction_data = cache.get('transaction_data')
            return render(request, "ExpenseTracker/bankstatement_parsed.html", {"transaction_data": transaction_data})
        else:
            CONTEXT = {
                "error_msg": "Please Retry Parsing Your Bank Statement"
            }
            return render(request,  "ExpenseTracker/bankstatement_parsed.html", CONTEXT)

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
