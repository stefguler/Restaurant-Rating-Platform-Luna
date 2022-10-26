from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from review.models import Review
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from review.serializers import ReviewSerializer, CreateReviewSerializer
from user.serializers import UserSerializer
from restaurant.models import Restaurant
User = get_user_model()


class CreateReviewView(GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = CreateReviewSerializer(data=request.data)
        if serializer.is_valid():
            # return Response("TEST")
            # serializer.data['restaurant'] = self.kwargs['restaurant_id']

        # if serializer.is_valid():
            serializer.save(user=request.user, restaurant=Restaurant.objects.get(id=self.kwargs['restaurant_id']))
            # serializer.data['restaurant'] = self.kwargs['restaurant_id']

        return Response(serializer.data)


class ReviewsForRestaurantView(GenericAPIView):
    permission_classes = [IsAuthenticated, AllowAny]

    def get(self, request, *args, **kwargs):
        all_reviews = Review.objects.all()
        serializer = ReviewSerializer(all_reviews, many=True)
        reviews_of_restaurant = list()

        for counter in range(0, len(serializer.data)):
            if serializer.data[counter]['restaurant'] == self.kwargs['restaurant_id']:
                reviews_of_restaurant.append(serializer.data[counter])

        return Response(reviews_of_restaurant)


class ReviewsByUserView(GenericAPIView):
    permission_classes = [IsAuthenticated, AllowAny]

    def get(self, request, *args, **kwargs):
        all_reviews = Review.objects.all()
        serializer = ReviewSerializer(all_reviews, many=True)
        reviews_by_user = list()

        for counter in range(0, len(serializer.data)):
            if serializer.data[counter]['user'] == self.kwargs['user_id']:
                reviews_by_user.append(serializer.data[counter])

        return Response(reviews_by_user)


class ReviewView(GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        specific_review = Review.objects.get(id=self.kwargs['review_id'])
        serializer = ReviewSerializer(specific_review, many=False)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        review = Review.objects.get(id=self.kwargs['review_id'])
        serializer = CreateReviewSerializer(instance=review, data=request.data)

        if serializer.is_valid():
            # return Response("Serializer is valid.")
            serializer.save()
        # serializer.update(instance=specific_restaurant, validated_data=request.data)

        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        specific_review = Review.objects.get(id=self.kwargs['review_id'])
        specific_review.delete()

        return Response("Review deleted.")


class LikeView(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsAuthenticated]

    def post(self, request, review_id):
        # get_object will return the object from the provided queryset that matches the review_id from the url
        review_to_save = self.get_object()
        user = request.user
        if review_to_save in user.liked_reviews.all():
            user.liked_reviews.remove(review_to_save)
            return Response(self.get_serializer(instance=review_to_save).data)
        user.liked_reviews.add(review_to_save)
        return Response(self.get_serializer(instance=review_to_save).data)

    # Note: Use the POST request to add or remove a like, there is NO delete request here!


class LikedReviewsView(GenericAPIView):
    permission_classes = [AllowAny]

    def get(self, request):
        all_reviews = Review.objects.all()
        serializer = ReviewSerializer(all_reviews, many=True)
        liked_reviews = list()

        for counter in range(0, len(serializer.data)):
            for liked_user in serializer.data[counter]['liked_by_user']:
                if liked_user == request.user.id:
                    liked_reviews.append(serializer.data[counter])
                    break

        return Response(liked_reviews)


class CommentedReviewsView(GenericAPIView):
    pass
