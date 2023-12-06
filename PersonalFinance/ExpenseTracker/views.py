from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.shortcuts import HttpResponse, HttpResponseRedirect, render, redirect
from django.urls import reverse
from django.http import FileResponse, JsonResponse
from django.core.cache import cache
import PyPDF2
import json
from django.db.models import Q , Min, Max, Sum
from collections import defaultdict
from django.db.models.functions import ExtractMonth, ExtractYear, TruncWeek
from django.http import JsonResponse
from datetime import datetime
from .models import User, StatementParser, TransactionRecord, AccountCategory, BalanceRecord
from .statement_processor import process_bankstatement, SubmitTransactionRecord
from .utils import handle_file, get_account_types, get_unlabeled_transactions_period, TransactionDataFormatter
from django.views import View
from json import dumps
from django.core import serializers
from calendar import monthrange
import tabula
import pandas as pd
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
        return render(request, "ExpenseTracker/bankstatement.html")

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
        user = User.objects.get(pk=request.user.id)
        response = []

        start_month = int(data.get('start_period').split("-")[0].strip("0"))
        start_year = int(data.get('start_period').split("-")[1])
        end_month = int(data.get('end_period').split("-")[0].strip("0"))
        end_year = int(data.get('end_period').split("-")[1])
        
        start_period = datetime(start_year, start_month+1, 1)
        _, last_day = monthrange(end_year, end_month+1)
        end_period = datetime(end_year, end_month+1, last_day)
        earliest_transaction_date = TransactionRecord.objects.filter(user=user).aggregate(Min('date'))['date__min']
        latest_transaction_date = TransactionRecord.objects.filter(user=user).aggregate(Max('date'))['date__max']
        
        if not earliest_transaction_date:
            response_data = {
                "status": 400,
                "message": "No transaction data found",
            }
            return response_data

        if start_period.date() < earliest_transaction_date:
            start_period = earliest_transaction_date

        if end_period.date() > latest_transaction_date:
            end_period = latest_transaction_date

        transactions = TransactionRecord.objects.filter(user=user, date__range=[start_period, end_period]).order_by('date')
        balance_summaries = BalanceRecord.objects.filter(
            Q(user=user),
            Q(month__gte=start_period.month, year=start_period.year) &
            Q(month__lte=end_period.month, year=end_period.year)
        ).order_by('month', 'year')

        serialized_transactions = [transaction.serialize() for transaction in transactions]
        serialized_bs = [bs.serialize() for bs in balance_summaries]
        data_formatter = TransactionDataFormatter(transactions)

        response_data = {
            "status": 200,
            "message": "Successfully retrieved transactions",
            "data": {
                'transactions':serialized_transactions,
                'balance_summaries':serialized_bs
            }
        }
        return JsonResponse(response_data)

    
    def post(self, request):
        data = json.loads(request.body)
        user = User.objects.get(pk=request.user.id)
        RESPONSE = {}
        transaction_data = SubmitTransactionRecord(data.get('transactions'), data.get('balance_summary'), user)
        submit = transaction_data.submit()
        if submit['failed'] > 0:
            RESPONSE = {
                "error": "Failed to submit all transactions",
                "data": submit,
            }
        else:
            RESPONSE = {
                "success": "Saved all transactions",
                "data": submit,
            }
        return JsonResponse(RESPONSE)

    def put(self, request):
        data = json.loads(request.body)
        user = User.objects.get(pk=request.user.id)
        transaction_data = SubmitTransactionRecord(data.get('transactions'), data.get('balance_summary'), user)
        update = transaction_data.update()
        if update['failed'] > 0:
            RESPONSE = {
                "error": "Failed to update transactions",
                "data": update,
            }
        else:
            RESPONSE = {
                "success": "Transactions Updated",
                "data": update,
            }
        return JsonResponse(RESPONSE)

    def delete(self, request):
        data = json.loads(request.body)
        user = User.objects.get(pk=request.user.id)
        transaction_data = SubmitTransactionRecord(data.get('transactions'), data.get('balance_summary'), user)
        delete = transaction_data.delete()
        return delete

@login_required
def process_bankstatement_api(request):
    if request.method == "POST":
        uploaded_pdf = request.FILES.get('uploaded_file')
        bank_code = request.POST.get('bank')
        original_pdf_info = {
            "file": uploaded_pdf,
            "bank_code": bank_code
        }
        cache.set('original_pdf', original_pdf_info, timeout=300)
        file_object = handle_file(uploaded_pdf, "OBJECT")
        
        result = process_bankstatement(file_object, bank_code=bank_code, vue_config=True)
        if "error" in result:
            return JsonResponse(result, safe=False)
        
        user = User.objects.get(pk=request.user.id)
        transaction_data = SubmitTransactionRecord(result['data']['transactions'], result['data']['balance_summaries'], user)
        submit = transaction_data.submit()
        if submit['failed'] > 0:
            RESPONSE = {
                "error": "Failed to submit transactions",
            }
        else:
            RESPONSE = {
                "success": "Saved all transactions",
                "redir":"labeling"
            }
        return JsonResponse(RESPONSE, safe=False)

@method_decorator(login_required, name='dispatch')
class TransactionLabelingView(View):
    def get(self, request):
        user = User.objects.get(pk=request.user.id)

        account_types = get_account_types(user)
        unlabeled_periods = get_unlabeled_transactions_period(user)
        
        CONTEXT= {
            "account_types": json.dumps(account_types),
            "unlabeled_periods": json.dumps(unlabeled_periods)
        }
        return render(request, "ExpenseTracker/transaction_labeling.html", CONTEXT)

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