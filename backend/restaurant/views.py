from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from restaurant.models import Restaurant
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from restaurant.serializers import RestaurantSerializer, CreateRestaurantSerializer
from user.serializers import UserSerializer
User = get_user_model()


class AllRestaurantsView(GenericAPIView):
    permission_classes = [IsAuthenticated, AllowAny]

    def get(self, request):
        all_restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(all_restaurants, many=True)
        return Response(serializer.data)


class CreateRestaurantView(GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = CreateRestaurantSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(owner=request.user)

        return Response(serializer.data)


class RestaurantsByCategoryView(GenericAPIView):
    permission_classes = [IsAuthenticated, AllowAny]

    def get(self, request):
        all_restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(all_restaurants, many=True)
        restaurants_by_category = list()

        for counter in range(0, len(serializer.data)):
            if serializer.data[counter]['category'] == self.kwargs['category_id']:
                restaurants_by_category.append(serializer.data[counter])

        return Response(restaurants_by_category)


class RestaurantsByUserView(GenericAPIView):
    permission_classes = [IsAuthenticated, AllowAny]

    def get(self, request, *args, **kwargs):
        all_restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(all_restaurants, many=True)
        restaurants_by_user = list()

        for counter in range(0, len(serializer.data)):
            if serializer.data[counter]['owner'] == self.kwargs['user_id']:
                restaurants_by_user.append(serializer.data[counter])

        return Response(restaurants_by_user)


class RestaurantView(GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        specific_restaurant = Restaurant.objects.get(id=self.kwargs['restaurant_id'])
        serializer = RestaurantSerializer(specific_restaurant, many=False)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        restaurant = Restaurant.objects.get(id=self.kwargs['restaurant_id'])
        serializer = CreateRestaurantSerializer(instance=restaurant, data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        specific_restaurant = Restaurant.objects.get(id=self.kwargs['restaurant_id'])
        specific_restaurant.delete()

        return Response("Restaurant deleted.")
