from django.db import models


class Store(models.Model):
    name = models.TextField(max_length=40)
    owner_firstname = models.TextField()
    owner_lastname = models.TextField()
    lat = models.IntegerField()
    long = models.IntegerField()
    video_tour = models.FileField(upload_to='videos', blank=True)


class AccessibilityCategory(models.Model):
    satisfied = models.BooleanField(default=False)
    image_evidence = models.ImageField(upload_to='images')
    store = models.ForeignKey(Store, on_delete=models.CASCADE)


