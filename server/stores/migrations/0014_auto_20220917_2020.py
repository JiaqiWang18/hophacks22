# Generated by Django 3.1.7 on 2022-09-17 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0013_auto_20220917_2015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='lat',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='long',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True),
        ),
    ]
