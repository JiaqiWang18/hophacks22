# Generated by Django 3.1.7 on 2022-09-17 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0007_store_store_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='lat',
            field=models.IntegerField(default=39.290386),
        ),
        migrations.AlterField(
            model_name='store',
            name='long',
            field=models.IntegerField(default=-76.61219),
        ),
    ]