# Generated by Django 4.1.5 on 2023-08-23 13:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ExpenseTracker', '0006_remove_dashboard_id_remove_transactionrecord_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BalanceRecord',
            fields=[
                ('balance_id', models.AutoField(primary_key=True, serialize=False)),
                ('month', models.PositiveIntegerField()),
                ('year', models.PositiveIntegerField()),
                ('starting_balance', models.DecimalField(decimal_places=2, max_digits=20)),
                ('ending_balance', models.DecimalField(decimal_places=2, max_digits=20)),
                ('credit_mutation', models.DecimalField(decimal_places=2, max_digits=20)),
                ('debit_mutation', models.DecimalField(decimal_places=2, max_digits=20)),
                ('bank', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bank_balance', to='ExpenseTracker.bank')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='balance_history', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='transactionrecord',
            name='balance_summary',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='balance_summary', to='ExpenseTracker.balancerecord'),
        ),
    ]