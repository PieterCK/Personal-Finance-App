from django import forms  
from .models import Bank
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit, Div, Field

bank_codes = Bank.objects.all().values_list('bank_code', flat=True)

bank_code_choices = ()
for bank in bank_codes:
    bank_code_choices += ((bank, bank),)

class BankstatementForm(forms.Form):  
    file = forms.FileField(label="Bank Statement PDF")
    bank = forms.ChoiceField(choices=bank_code_choices, required=True, label="Bank")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper(self)
        self.helper.add_input(Submit('proceed', 'Proceed'))
        self.helper.layout = Div(
            Field('file', css_class='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'),
            Field('bank', css_class='block text-gray-700 text-sm font-bold mb-2 m-1'),
            css_class='mx-left m-1',
        )

class BankstatementDiagnoseForm(forms.Form):
    keywords = forms.CharField(max_length=200, required=False, label="Transaction Keyword")
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper(self)
        self.helper.add_input(Submit('add', 'Add'))
        