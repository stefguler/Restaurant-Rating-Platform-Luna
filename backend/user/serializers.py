from django.contrib.auth import get_user_model
from rest_framework import serializers
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'location', 'phone', 'things_i_love', 'description', 'avatar']