from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.http import JsonResponse
import json
import PyPDF2
import io

from .models import User
from .forms import BankstatementFrom
from .statement_processor import process_bankstatement
from .utils import highlight_pdf

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
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "ExpenseTracker/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(email, email, password)
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
            "form": BankstatementFrom()
            }
        
        # Process form
        bankstatement_form = BankstatementFrom(request.POST, request.FILES)
        if not bankstatement_form.is_valid():
            CONTEXT["message"] = "Couldn't Load PDF"
            return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
        
        # Read uploaded PDF file
        uploaded_pdf = request.FILES['file']
        file_buffer = io.BytesIO()
        for chunk in uploaded_pdf.chunks():
            file_buffer.write(chunk)
        file_buffer.seek(0)
        file_object = io.BufferedReader(file_buffer)

        # Process uploaded PDF file
        reader = PyPDF2.PdfReader(file_object)
        transaction_data = process_bankstatement('BCA', reader)

        # Return result
        if transaction_data['is_valid']:
            CONTEXT["message"] = "Succesful! Looks like no imbalance between stated & parsed amount"
        else:
            CONTEXT["message"] = "Aww man, Looks like there's imbalance between stated & parsed amount"
        
        doc = highlight_pdf(file_buffer, transaction_data)
        print(type(doc))
        # CONTEXT["transaction_data"] = transaction_data
        # request.session["transaction_data"] = transaction_data

        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
    else:
        CONTEXT={
            "form": BankstatementFrom()
        }
        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
