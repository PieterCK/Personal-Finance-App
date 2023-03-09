from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
# Create your views here.
def index(request):
    return render(request, "ExpenseTracker/index.html")

def login(request):
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

def logout(request):
    return render(request, "ExpenseTracker/login.html")

def register(request):
    return render(request, "ExpenseTracker/login.html")