# Generated by Django 3.1.7 on 2022-09-17 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0010_auto_20220917_1740'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='address',
            field=models.CharField(default='Johns Hopkins University, Baltimore', max_length=100),
        ),
    ]
