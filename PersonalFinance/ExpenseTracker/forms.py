from django import forms  
from .models import Bank

bank_codes = Bank.objects.all().values_list('bank_code', flat=True)

bank_code_choices = (
    ('', 'Select Bank'),
)
for bank in bank_codes:
    bank_code_choices += ((bank, bank),)

class BankstatementForm(forms.Form):  
    file = forms.FileField()
    bank = forms.ChoiceField(choices=bank_code_choices, required=True)

class BankstatementDiagnoseForm(forms.Form):
    keywords = forms.CharField(max_length=200, required=False)