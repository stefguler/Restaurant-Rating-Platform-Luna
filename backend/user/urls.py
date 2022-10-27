from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views
from user.views import RegisterAPIView, LoginAPIView, APIView, RegistrationView, RegistrationValidateView, MeView, UsersListView, UsersSearchView, UsersIDView
from rest_framework_simplejwt import views as jwt_views

from django.urls import include, path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

from .views import UserAPIView, RefreshAPIView, LogoutAPIView, ResetAPIView, ForgotPasswordAPIView

urlpatterns = [
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('user', UserAPIView.as_view()),
    path('refresh', RefreshAPIView.as_view()),
    path('logout', LogoutAPIView.as_view()),
    path('forgotpw', ForgotPasswordAPIView.as_view()),
    path('resetpw', ResetAPIView.as_view()),


    #
    # path('docs/', APIView.as_view()),
    # # path('registration/', RegistrationView.as_view()),
    # # path('registration/validate/', RegistrationValidateView.as_view()),
    # path('me/', MeView.as_view()),
    # path('users/list/', UsersListView.as_view()),
    # path('users/search=<str:search_string>/', UsersSearchView.as_view()),
    # path('users/<int:user_id>/', UsersIDView.as_view())
]
