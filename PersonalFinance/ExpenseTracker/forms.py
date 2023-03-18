from django import forms  

class BankstatementFrom(forms.Form):  
    file = forms.FileField() 