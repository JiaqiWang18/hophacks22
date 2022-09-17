# Generated by Django 3.1.7 on 2022-09-17 04:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=40)),
                ('owner_firstname', models.TextField()),
                ('owner_lastname', models.TextField()),
                ('lat', models.IntegerField()),
                ('long', models.IntegerField()),
                ('video_tour', models.FileField(blank=True, upload_to='videos')),
            ],
        ),
        migrations.CreateModel(
            name='AccessibilityCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('satisfied', models.BooleanField(default=False)),
                ('image_evidence', models.ImageField(upload_to='images')),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stores.store')),
            ],
        ),
    ]
