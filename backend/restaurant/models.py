from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Restaurant(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=250)
    category = models.CharField(max_length=250)
    country = models.CharField(max_length=250)
    street = models.CharField(max_length=250)
    city = models.CharField(max_length=250)
    zip = models.IntegerField()
    website = models.CharField(max_length=250)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=250)
    opening_hours = models.CharField(max_length=250)
    price_level = models.IntegerField()
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True, null=True)
    owner = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='restaurant')
