from django.contrib import admin
from .models import User, StatementParser, Bank, AccountCategory, TransactionRecord, Dashboard


admin.site.register(User)
admin.site.register(Bank)
admin.site.register(AccountCategory)
admin.site.register(TransactionRecord)
admin.site.register(Dashboard)
admin.site.register(StatementParser)
# Register your models here.
