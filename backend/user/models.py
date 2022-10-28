from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, UserManager
from django.conf import settings
import random


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class User(AbstractUser, PermissionsMixin):
    """User in the system."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)

    password = models.CharField(max_length=100)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)


    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    code = models.CharField(max_length=5, default=code_generator)
    username = models.CharField(max_length=100, unique=True)
    location = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    things_i_love = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)
    avatar = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True, null=True)


class UserToken(models.Model):
      user_id = models.IntegerField()
      token = models.CharField(max_length=255)
      created_at = models.DateTimeField(auto_now_add=True)
      expired_at = models.DateTimeField()


class ResetPassword(models.Model):
    email = models.CharField(max_length=255)
    token = models.CharField(max_length=255, unique=True)