from django.db import models
from django.contrib.auth import get_user_model
from restaurant.models import Restaurant
User = get_user_model()


class Review(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    text_content = models.CharField(max_length=1000)
    rating = models.IntegerField()
    user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='user_reviews')
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.PROTECT, related_name='restaurant_reviews')
    liked_by_user = models.ManyToManyField(to=User, blank=True, related_name='liked_reviews')
