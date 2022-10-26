from rest_framework import serializers
from restaurant.models import Restaurant
from django.contrib.auth import get_user_model
# from user.serializers import UserSerializer
User = get_user_model()


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'


class CreateRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['name', 'category', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email', 'opening_hours', 'price_level', 'image']
