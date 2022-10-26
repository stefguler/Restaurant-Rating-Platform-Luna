from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from user.serializers import UserSerializer, CreateUserSerializer
User = get_user_model()


class UserAPIView(GenericAPIView):
    pass


class RegistrationView(GenericAPIView):
    pass


class RegistrationValidateView(GenericAPIView):
    pass


class SearchView(GenericAPIView):
    pass


class HomeView(GenericAPIView):
    pass


class CategoryListView(GenericAPIView):
    pass


class MeView(GenericAPIView):
    permission_classes = [IsAuthenticated]

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
    permission_classes = [IsAuthenticated, AllowAny]

    def get(self, request):
        all_users = User.objects.all()
        serializer = UserSerializer(all_users, many=True)
        return Response(serializer.data)


class UsersSearchView(GenericAPIView):
    permission_classes = [IsAuthenticated, AllowAny]

    def get(self, request, *args, **kwargs):
        users = User.objects.filter(username__icontains=self.kwargs['search_string'])
        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)


class UsersIDView(GenericAPIView):
    permission_classes = [IsAuthenticated, AllowAny]

    def get(self, request, *args, **kwargs):
        specific_user = User.objects.get(id=self.kwargs['user_id'])
        serializer = UserSerializer(specific_user, many=False)
        return Response(serializer.data)
