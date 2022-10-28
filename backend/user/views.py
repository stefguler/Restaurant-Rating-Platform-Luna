import datetime
import random
import string

from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework import permissions, status, exceptions
from rest_framework.authentication import get_authorization_header
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.authentication import JWTAuthentication

from .authentication import create_access_token, decode_access_token, create_refresh_token, decode_refresh_token
from .models import UserToken, ResetPassword
from .serializers import UserSerializer, CreateUserSerializer

User = get_user_model()

from django.shortcuts import render


# Create your views here.

def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class APIView(GenericAPIView):
    def get(self, request):
        api_urls = {
            "1. Title": "Registration",
            "backend/api/registration/": "POST: Register new user by asking for email (a validation code will be send to given email). Body properties: {first_name, last_name, location, phone, things_i_love, description, avatar}",
            "backend/api/registration/validate/": "POST: Validate the creation of new user with the code sent by email. Body properties: {code}",
            "2. Title": "Auth",
            "backend/api/auth/token/": "POST: Get a new JWT by passing username and password. Body properties: {email, password}",
            "backend/api/auth/token/refresh/": "POST: Get a new JWT by passing an old still valid JWT.",
            "backend/api/auth/token/verify/": "POST: Verify a token by passing the token in the body.",
            "backend/api/auth/password-reset/": "POST: Reset users password by sending a validation code in a email.",
            "backend/api/auth/password-reset/validate/": "POST: Validate password reset token and set new password for the user.",
            "3. Title": "Search",
            "backend/api/search/": "GET: Search for ‘restaurants’, ‘reviews’ or ‘users’. Body example: {type: ‘restaurants’, ‘search_string’: ‘Pub’}",
            "4. Title": "Home",
            "backend/api/home/": "GET: Get a list of the four best rated restaurants for the home screen.",
            "5. Title": "Restaurants",
            "backend/api/restaurants/": "GET: Get the list of all the restaurant.",
            "backend/api/restaurants/new/": "POST: Create a new restaurant. Body properties: {name, category, country, street, city, zip, website, phone, email, opening_hours, price_level, image}",
            "backend/api/restaurants/category/<int:category_id>/": "GET: Get the all the restaurants by category.",
            "backend/api/restaurants/user/<int:user_id>/": "GET: Get the all the restaurants created by a specific user in chronological order.",
            "backend/api/restaurants/<int:id>/": "GET: Get the details of a restaurant by providing the id of the restaurant.",
            " backend/api/restaurants/<int:id>/": "PATCH: Update a restaurant by id (only by owner or restaurant admin). Body properties: {name, category, country, street, city, zip, website, phone, email, opening_hours, price_level, image}",
            "  backend/api/restaurants/<int:id>/": "DELETE: Delete a restaurant by id (only by owner or restaurant admin).",
            "6. Title": "Reviews",
            "backend/api/reviews/new/<int:restaurant_id>/": "POST: Create new review for a restaurant. Body properties: {text_content, rating}",
            "backend/api/reviews/restaurant/<int:restaurant_id>/": "GET: Get the list of the reviews for a single restaurant.",
            "backend/api/reviews/user/<int:user_id>/": "GET: Get the list of the reviews by a single user.",
            "backend/api/reviews/<int:review_id>/": "GET: Get a specific review by ID and display all the information.",
            " backend/api/reviews/<int:review_id>/": "PATCH: Update a specific review (only by owner). Body properties: {text_content, rating}",
            "  backend/api/reviews/<int:review_id>/": "DELETE: Delete a specific review (only by owner).",
            "backend/api/reviews/like/<int:review_id>/": "POST: Like/dislike a review.",
            "backend/api/reviews/likes/": "GET: Get the list of the reviews the current user liked.",
            "backend/api/reviews/comments/": "GET: Get the list of the reviews the current user commented.",
            "7. Title": "Comments",
            "backend/api/review/comment/user=<int:user_id>/": "GET: Get all the comments from a single user.",
            "backend/api/review/comment/new/<int:review_id>/": "POST: Comment on the review. Body property: {text_content}",
            "backend/api/review/comment/comment=<int:comment_id>/": "DELETE: Delete the comment on the review.",
            "8. Title": "Categories",
            "backend/api/category/list/": "GET: Get the list of all the categories.",
            "9. Title": "Users",
            "backend/api/me/": "GET: Get the user profile.",
            " backend/api/me/": "PATCH: Update the user profile. Body properties: {first_name, last_name, location, phone, things_i_love, description, avatar}",
            "backend/api/users/list/": "GET: Get all users.",
            "backend/api/users/search=<str:search_string>/": "GET: Search for a user.",
            "backend/api/users/<int:user_id>/": "GET: get a specific user profile."
        }

        return Response(api_urls)


class RegistrationView(GenericAPIView):
    def post(self, request):
        send_mail(
            'Registration code',
            code_generator(5),
            'michmart@hotmail.ch',
            [request.data['email']],
            fail_silently=False,
        )
        serializer = CreateUserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


class RegistrationValidateView(GenericAPIView):
    def post(self, request):
        all_users = User.objects.all()
        serializer = UserSerializer(all_users, many=True)
        last_user = serializer.data[len(serializer.data) - 1]

        if last_user['code'] == request.data['code']:
            return Response("true")

        return Response("false")


class MeView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        specific_user = User.objects.get(id=request.user.id)
        serializer = UserSerializer(specific_user, many=False)

        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        specific_user = User.objects.get(id=request.user.id)
        serializer = CreateUserSerializer(instance=specific_user, data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


class UsersListView(GenericAPIView):
    def get(self, request):
        all_users = User.objects.all()
        serializer = UserSerializer(all_users, many=True)
        return Response(serializer.data)


class UsersSearchView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        users = User.objects.filter(username__icontains=self.kwargs['search_string'])
        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)


class UsersIDView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        specific_user = User.objects.get(id=self.kwargs['user_id'])
        serializer = UserSerializer(specific_user, many=False)
        return Response(serializer.data)



###### Register ######
class RegisterAPIView(APIView):
    def post(self, request):
        data = request.data

        if data['password'] != data['password_confirm']:
            raise exceptions.APIException('Password do not match!')

        serializer = UserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


#### Login ####
class LoginAPIView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise exceptions.AuthenticationFailed('Invalid credentials')

        if not user.check_password(password):
            raise exceptions.AuthenticationFailed('Invalid credeentials')


        # # When getting the email and password
        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        # When logging creating a user token value (in refresh token)
        UserToken.objects.create(
            user_id=user.id,
            token=refresh_token,
            expired_at=datetime.datetime.utcnow() + datetime.timedelta(days=7)
        )

        response = Response()
        response.set_cookie(key='refresh_token', value=refresh_token, httponly=True)
        response.data = {
            'token': access_token
        }
        return response




#### User ####

class UserAPIView(APIView):
    def get(self, request):
        auth = get_authorization_header(request).split()

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)

            user = User.objects.get(pk=id)

            if user:
                serializer = UserSerializer(user)
                return Response(serializer.data)

        raise exceptions.AuthenticationFailed('unauthenticated1')


# IF front end doesnt work delete the UserAPi above and add the one bellow
# class UserAPIView(APIView):
#     authentication_classes = [JWTAuthentication]
#
#     def get(self, request):
#         return Response(UserSerializer(request.user).data)
#

class RefreshAPIView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get('refresh_token')
        id = decode_refresh_token(refresh_token)

        if not UserToken.objects.filter(
            user_id=id,
            token=refresh_token,
            expired_at__gt=datetime.datetime.now(tz=datetime.timezone.utc)
        ).exists():
            raise exceptions.AuthenticationFailed('unauthenticated')

        access_token = create_access_token(id)

        return Response({
            'token': access_token
        })

class LogoutAPIView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get('refresh_token')
        # Removing user token value
        UserToken.objects.filter(token=request).delete()

        response = Response()
        response.delete_cookie(key='refresh_token')
        response.data = {
            'message': 'success'
        }

        return response

class ForgotPasswordAPIView(APIView):
    def post(self, request):
        email = request.data['email']
        token = ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(10))

        ResetPassword.objects.create(
            email=request.data['email'],
            token=token
        )
        url = "http://localhost:3000/reset/" + token

        send_mail(
            subject="Reset your password!",
            message="Click <a href='%s'>here</a> to reset your password" % url,
            from_email="team1@sit.academy",
            recipient_list=[email]
        )

        return Response({
            'message': 'success'
        })

class ResetAPIView(APIView):
    def post(self, request):
        data = request.data

        if data['password'] != data['password_confirm']:
            raise exceptions.APIException('Passwords do not match!')

        reset_password = ResetPassword.objects.filter(token=data['token']).first()

        if not reset_password:
            raise exceptions.APIException('Invalid link!')

        user = User.objects.filter(email=reset_password.email).first()

        if not user:
            raise exceptions.APIException('User not found')

        user.set_password(data['password'])
        user.save()

        return Response({
            'message': "Successfully resetted password"
        })