import random
from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from user.serializers import UserSerializer, CreateUserSerializer
User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class APIView(GenericAPIView):
    def get(self, request):
        api_urls = {
            "1. Title": "Registration",
            "backend/api/registration/": "DO NOT USE THIS! Use Superusers for now! POST: Register new user by asking for email (a validation code will be send to given email). Body properties: {first_name, last_name, location, phone, things_i_love, description, avatar}",
            "backend/api/registration/validate/": "DO NOT USE THIS! Use Superusers for now! POST: Validate the creation of new user with the code sent by email. Body properties: {code}",
            "2. Title": "Auth",
            "backend/api/auth/token/": "POST: Get a new JWT by passing username and password. Body properties: {email, password}",
            "backend/api/auth/token/refresh/": "POST: Get a new JWT by passing an old still valid JWT.",
            "backend/api/auth/token/verify/": "POST: Verify a token by passing the token in the body.",
            "3. Title": "Search",
            "backend/api/search/": "GET: Search for ‘restaurants’, ‘reviews’ or ‘users’. Body example: {type: ‘restaurants’, ‘search_string’: ‘Pub’}",
            "4. Title": "Home",
            "backend/api/home/": "DO NOT USE THIS! USE backend/api/restaurants/ for now! GET: Get a list of the four best rated restaurants for the home screen.",
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
            "backend/api/reviews/likes/": "DO NOT USE THIS! GET: Get the list of the reviews the current user liked.",
            "backend/api/reviews/comments/": "DO NOT USE THIS! GET: Get the list of the reviews the current user commented.",
            "7. Title": "Comments",
            "backend/api/review/comment/user=<int:user_id>/": "DO NOT USE THIS! GET: Get all the comments from a single user.",
            "backend/api/review/comment/new/<int:review_id>/": "DO NOT USE THIS! POST: Comment on the review. Body properties: {text_content, liked_by_user as an empty list []}",
            "backend/api/review/comment/comment=<int:comment_id>/": "DO NOT USE THIS! DELETE: Delete the comment on the review.",
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
