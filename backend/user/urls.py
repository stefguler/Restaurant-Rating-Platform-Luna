from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views
from user.views import APIView, RegistrationView, RegistrationValidateView, MeView, UsersListView, UsersSearchView, UsersIDView


urlpatterns = [
    path('docs/', APIView.as_view()),
    path('registration/', RegistrationView.as_view()),
    path('registration/validate/', RegistrationValidateView.as_view()),
    path('me/', MeView.as_view()),
    path('users/list/', UsersListView.as_view()),
    path('users/search=<str:search_string>/', UsersSearchView.as_view()),
    path('users/<int:user_id>/', UsersIDView.as_view())
]
