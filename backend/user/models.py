from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
import random


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    code = models.CharField(max_length=5, default=code_generator)
    username = models.CharField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100, unique=True)
    last_name = models.CharField(max_length=100, unique=True)
    location = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    things_i_love = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)
    avatar = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True, null=True)
