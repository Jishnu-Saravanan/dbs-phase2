# Generated by Django 4.2 on 2023-04-14 13:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0004_alter_win_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='win',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]