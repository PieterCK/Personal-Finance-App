from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models import Sum
from django.utils import timezone

class User(AbstractUser):
    pass

class Bank(models.Model):
    bank_code = models.CharField(primary_key=True, max_length=8)
    bank_name = models.CharField(max_length=100)

    def __str__(self):
            return f"{self.bank_code} - {self.bank_name}"

class StatementParser(models.Model): 
    is_preset = models.BooleanField(default=False)
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='custom_parser',  blank=True, null=True)
    bank_code = models.ForeignKey("Bank", on_delete=models.CASCADE, related_name="parse_value")
    pattern = models.TextField()
    category = models.CharField(max_length=50, choices=(('trash_value', 'Trash Value'), ('parse_value', 'Parse Value')))

    def __str__(self):
            return f"{self.bank_code} - {self.pattern} - {self.category}"
    
class AccountCategory(models.Model):
    is_preset = models.BooleanField()
    is_group = models.BooleanField()
    account_type = models.CharField(max_length=100, blank=True, null=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name="users_account")
    parent_account = models.ForeignKey("self", on_delete=models.CASCADE, related_name='parent',blank=True, null=True)

    def __str__(self):
            return f"{self.account_type}"

class BalanceRecord(models.Model):
    balance_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name="balance_history", blank=True, null=True)
    month = models.PositiveIntegerField()
    year = models.PositiveIntegerField()
    starting_balance = models.DecimalField(max_digits=20, decimal_places=2)
    ending_balance = models.DecimalField(max_digits=20, decimal_places=2)
    credit_mutation = models.DecimalField(max_digits=20, decimal_places=2)
    debit_mutation = models.DecimalField(max_digits=20, decimal_places=2)
    bank = models.ForeignKey('Bank', on_delete=models.CASCADE, related_name='bank_balance', blank=True, null=True)

    def serialize(self):
        serialized_data = {
            "month": self.month,
            "year": self.year,
            "starting_balance": float(self.starting_balance),
            "ending_balance": float(self.ending_balance),
            "credit_mutation": str(self.credit_mutation),
            "debit_mutation": str(self.debit_mutation),
            "pk": self.balance_id,
        }
        return serialized_data

class TransactionRecord(models.Model):
    TRANSACTION_TYPES = (
        ('CREDIT', 'Credit'),
        ('DEBIT', 'Debit')
    )
    transaction_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name="transactions_history", blank=True, null=True)
    balance_summary = models.ForeignKey('BalanceRecord', on_delete=models.CASCADE, related_name='balance_summary', blank=True, null=True)
    date = models.DateField(auto_now = False, auto_now_add= False)
    entry = models.CharField(max_length=6, choices=TRANSACTION_TYPES)
    amount = models.DecimalField(max_digits=20, decimal_places=2)
    info = models.CharField(max_length=255)
    account_type = models.ForeignKey('AccountCategory', on_delete=models.CASCADE, related_name='category_transaction', blank=True, null=True)
    bank = models.ForeignKey('Bank', on_delete=models.CASCADE, related_name='bank_transaction', blank=True, null=True)
    details = models.TextField(blank=True, null=True)
    
    def serialize(self):
        serialized_data = {
            "info": self.info,
            "amount": str(self.amount),
            "account_type": self.account_type.account_type if self.account_type else None,
            "bank_code": self.bank.bank_code,
            "date": str(self.date),
            "entry": self.entry,
            "details": self.details,
            "select":False,
            "error": False,
            "pk": self.transaction_id,
        }
        return serialized_data
    
    def __str__(self):
            return f"{self.date} - {self.entry} - {self.amount}"
    
class Dashboard(models.Model):
    is_preset = models.BooleanField()
    dashboard_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='custom_dashboard')
    dashboard_name = models.CharField(max_length=255)
    dashboard_info = models.TextField()
    dashboard_desc = models.CharField(max_length=255)

    def __str__(self):
            return f"{self.user} - {self.dashboard_name}"
    






