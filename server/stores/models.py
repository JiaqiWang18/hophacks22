from django.db import models
from users.models import User

CAT_CHOICES = (
    ("RESTAURANT", 'Restaurant'),
    ("GROCERY STORE", 'Grocery Store')
)


class Store(models.Model):
    name = models.CharField(max_length=40)
    store_category = models.CharField(max_length=40, choices=CAT_CHOICES, default='RESTAURANT')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    owner_fist_name = models.CharField(max_length=40)
    owner_last_name = models.CharField(max_length=40)
    lat = models.IntegerField(default=39.290386)
    long = models.IntegerField(default=-76.612190)
    video_tour = models.FileField(upload_to='videos', blank=True)

    def __str__(self):
        return self.name


ACC_CAT_CHOICES = (
    ("PARKING", "Parking"),
    ("RAMP", "Ramp"),
    ("ELEVATORS", "Elevators"),
)


class AccessibilityCategory(models.Model):
    name = models.CharField(max_length=40, choices=ACC_CAT_CHOICES, default='PARKING')
    satisfied = models.BooleanField(default=False)
    image_evidence = models.ImageField(upload_to='images')
    store = models.ForeignKey(Store, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


