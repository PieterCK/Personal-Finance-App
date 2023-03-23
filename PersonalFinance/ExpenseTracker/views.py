from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.http import JsonResponse
from .models import User
from .utils import handle_uploaded_file, split_string
from .forms import BankstatementFrom
import json
import PyPDF2
import re

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
        page = reader.pages[1]
        text = page.extract_text()

        bca_trf_info = [
            "TRANSAKSI DEBIT", "BYR VIA E-BANKING",
            "SALDO AWAL", "KARTU DEBIT", 
            "TRSF E-BANKING DB", "BIAYA ADM", 
            "FLAZZ BCA", "TRSF E-BANKING CR",
            "\d\d/\d\d"
        ]
        text = split_string(text, bca_trf_info)
        
        bool = True
        i = 0
        while i < len(text):
            if bool:
                if text[i] in bca_trf_info:
                    print("Date: ", text[i-2])
                    print("Transaction Type: ",text[i])
                    info = None
                    if len(text[i+1]) < 7: 
                        info = text[i+3]
                        # print(" Info: ", info)
                        
                    else:
                        info = text[i+1]
                        # print(" Info: ", info)
                    info_parsed = info.split()
                    info_type = re.findall("(CR|DB)", info)
                    
                    if len(info_type) > 0:
                        amount = [x for x in info.split() if re.search("(\d\d[.]\d\d$)", x)]
                        print("Entry: ", info_type[0])
                        print("Amount: ", amount[0])
                    else:
                        info_type = re.findall("(CR|DB)", text[i])
                        # print("info_parsed: ", info_parsed, "info_type: ", info_type)
                        if len(info_type) > 0:
                            amount = [x for x in info.split() if re.search("(\d\d[.]\d\d$)", x)]
                            print("Entry: ", info_type[0])
                            print("Amount: ", amount[0])
                        else:
                            print("Info Type: ",info_type)
            else:
                print("no: ",i, text[i])
                print("length: ", len(text[i]))
            i+=1

        CONTEXT["message"] = text
        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
    else:
        CONTEXT={
            "form": BankstatementFrom()
        }
        return render(request, "ExpenseTracker/bankstatement.html",CONTEXT)
