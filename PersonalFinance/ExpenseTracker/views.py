from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.http import JsonResponse
from .models import User
from .utils import handle_uploaded_file
from .forms import BankstatementFrom
import json
import PyPDF2
import os
import urllib
import re
from io import StringIO

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
        
        bankstatement_form = BankstatementFrom(request.POST, request.FILES)
        if not bankstatement_form.is_valid():
            CONTEXT["message"] = "Couldn't Load PDF"
            return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
        
        handle_uploaded_file(request.FILES['file'])
        f = open('ExpenseTracker/static/ExpenseTracker/upload/'+request.FILES['file'].name, "rb")
        reader = PyPDF2.PdfReader(f)
        page = reader.pages[0]
        text = page.extract_text()
        print(text)
        text= re.split("(\d\d/\d\d)", text)
        print(len(text))
        i = 0
        while i < len(text):
            print(i)
            if re.findall("TRANSAKSI DEBIT TGL:", text[i]):
                print("Transaction at:",text[i+1],"debited :", text[i+2])
                i += 4
            else:
                print("uncoded:",text[i])
                i += 1

        CONTEXT["message"] = text
        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
    else:
        CONTEXT={
            "form": BankstatementFrom()
        }
        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
