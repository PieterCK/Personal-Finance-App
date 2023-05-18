from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.http import FileResponse
from django.core.cache import cache
import json
import PyPDF2
import io
import base64
from .models import User
from .forms import BankstatementForm, BankstatementDiagnoseForm
from .statement_processor import process_bankstatement
from .utils import highlight_pdf, handle_file

# Create your views here.
def login_view(request):
    if request.method == "POST":
        # Attempt to sign user in
        email = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=email, password=password)
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
        CONTEXT = {}

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

@login_required
def bankstatement(request):
    if request.method == "POST":
        CONTEXT={
            "form": BankstatementForm()
            }
        
        # Process form
        bankstatement_form = BankstatementForm(request.POST, request.FILES)
        if not bankstatement_form.is_valid():
            CONTEXT["message"] = "Couldn't Load PDF"
            return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
        
        bank_code = request.POST["bank"]
        # Read uploaded PDF file
        uploaded_pdf = request.FILES['file']
        cache.set('original_pdf', uploaded_pdf, timeout=300)
        file_object = handle_file(uploaded_pdf, "OBJECT")

        # Process uploaded PDF file
        reader = PyPDF2.PdfReader(file_object)
        transaction_data = process_bankstatement(bank_code, reader)
        transaction_data['is_valid'] = False
        
        if not transaction_data['is_correct_pdf']:
            CONTEXT["message"] = "Couldn't Load PDF! Please make sure you're uploading the right PDF file or have selected the correct bank"
            return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)

        if transaction_data['is_valid']:
            CONTEXT["message"] = "Succesful! Looks like no imbalance between stated & parsed amount"
            CONTEXT["show_uploaded_pdf"] = True
        else:
            CONTEXT["message"] = "Aww man, Looks like there's imbalance between stated & parsed amount"
            CONTEXT["form"] = BankstatementDiagnoseForm()
            CONTEXT["show_uploaded_pdf"] = False
            CONTEXT["show_diagnose_pdf"] = True
            file_buffer = handle_file(uploaded_pdf, "BUFFER")
            file_buffer.seek(0)
            output_pdf_bytes = highlight_pdf(file_buffer, bank_code)
            cache.set('output_pdf_bytes', output_pdf_bytes, timeout=300)

        CONTEXT["transaction_data"] = transaction_data

        response = render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
        return response
    
    else:
        CONTEXT={
            "form": BankstatementForm()
        }
        cache.delete('output_pdf_bytes')

        if cache.get('original_pdf'):
            CONTEXT["show_uploaded_pdf"] = True
        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)

@login_required
def original_pdf(request):
    original_pdf_file = cache.get('original_pdf')
    file_buffer = handle_file(original_pdf_file,"BUFFER")
    file_buffer.seek(0)
    response = FileResponse(file_buffer,  as_attachment=False, filename='original_bank_statement.pdf')
    return response

@login_required
def highlighted_pdf(request):
    output_pdf_bytes = cache.get('output_pdf_bytes')
    output_pdf_bytes.seek(0) 
    response = FileResponse(output_pdf_bytes,  as_attachment=False, filename='highlighted_bank_statement.pdf')
    return response