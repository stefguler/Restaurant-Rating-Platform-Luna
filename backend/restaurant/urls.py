from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views
from restaurant.views import AllRestaurantsView, CreateRestaurantView, RestaurantsByCategoryView, RestaurantsByUserView, RestaurantView

urlpatterns = [
    path('', AllRestaurantsView.as_view()),
    path('new/', CreateRestaurantView.as_view()),
    path('category/<int:category_id>/', RestaurantsByCategoryView.as_view()),
    path('user/<int:user_id>/', RestaurantsByUserView.as_view()),
    path('<int:restaurant_id>/', RestaurantView.as_view())
]