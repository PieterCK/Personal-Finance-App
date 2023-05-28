"""PersonalFinance URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ExpenseTracker import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('login_view', views.login_view, name="login"),
    path('logout_view', views.logout_view, name="logout"),
    path('register_view', views.register_view, name="register"),
    path('bankstatement', views.BankstatementView.as_view(), name="bankstatement"),

    # API  endpoints
    path('bankstatement/api/process_bankstatement', views.process_bankstatement_api, name='process_bankstatement'),
    path('bankstatement/api/display_pdf/<str:pdf_type>', views.display_pdf, name="highlighted_pdf"),
    path('bankstatement/api/statement_parser', views.statement_parser, name='statement_parser'),
    path('bankstatement/api/parsed_transactions_view', views.parsed_transactions_view, name='parsed_transactions_view')
]
