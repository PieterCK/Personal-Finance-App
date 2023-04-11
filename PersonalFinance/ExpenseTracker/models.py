from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Bank(models.Model):
    bank_code = models.CharField(primary_key=True, max_length=8)
    bank_name = models.CharField(max_length=100)

    def __str__(self):
            return f"{self.bank_code} - {self.bank_name}"

class StatementParser(models.Model): 
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

class TransactionRecord(models.Model):
    TRANSACTION_TYPES = (
        ('CREDIT', 'Credit'),
        ('DEBIT', 'Debit')
    )
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name="transactions_history", blank=True, null=True)
    date = models.DateField(auto_now = False, auto_now_add= False)
    entry = models.CharField(max_length=6, choices=TRANSACTION_TYPES)
    amount = models.DecimalField(max_digits=20, decimal_places=2)
    info = models.CharField(max_length=255)
    account_type = models.ForeignKey('AccountCategory', on_delete=models.CASCADE, related_name='category_transaction', blank=True, null=True)
    bank = models.ForeignKey('Bank', on_delete=models.CASCADE, related_name='bank_transaction', blank=True, null=True)
    details = models.TextField(blank=True, null=True)
    
    def __str__(self):
            return f"{self.date} - {self.entry} - {self.amount}"
    
class Dashboard(models.Model):
    is_preset = models.BooleanField()
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='custom_dashboard')
    dashboard_name = models.CharField(max_length=255)
    dashboard_info = models.TextField()
    dashboard_desc = models.CharField(max_length=255)

    def __str__(self):
            return f"{self.user} - {self.dashboard_name}"