# Generated by Django 3.0.3 on 2020-07-17 15:03

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20200717_1457'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 7, 17, 15, 3, 26, 615104, tzinfo=utc)),
        ),
    ]
