from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views
from restaurant.views import AllRestaurantsView, CreateRestaurantView, RestaurantsByCategoryView, RestaurantsByUserView, RestaurantView, CategoryListView

urlpatterns = [
    path('restaurants/', AllRestaurantsView.as_view()),
    path('restaurants/new/', CreateRestaurantView.as_view()),
    path('restaurants/category/<int:category_id>/', RestaurantsByCategoryView.as_view()),
    path('restaurants/user/<int:user_id>/', RestaurantsByUserView.as_view()),
    path('restaurants/<int:restaurant_id>/', RestaurantView.as_view()),
    path('category/list/', CategoryListView.as_view()),
]