from django.db import models
import requests, os
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
    lat = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    long = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    video_tour = models.FileField(upload_to='videos', blank=True)
    store_image = models.FileField(upload_to='images', blank=True, null=True)
    address = models.CharField(max_length=100, default="Johns Hopkins University, Baltimore")
    rating = models.IntegerField(default=0)

    # geocode upon saving
    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        if self.address:
            current_address = self.address
            self.lat, self.long = self.geocode(current_address)
        super(Store, self).save()

    def geocode(self, address):
        url = 'https://maps.googleapis.com/maps/api/geocode/json'
        params = {'sensor': 'false', 'address': address, 'key': 'AIzaSyA9GG_FwcMPB1TOXIRpmVJojNHLPf-QZeo'}
        r = requests.get(url, params=params)
        results = r.json()['results']
        location = results[0]['geometry']['location']
        return location['lat'], location['lng']

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


