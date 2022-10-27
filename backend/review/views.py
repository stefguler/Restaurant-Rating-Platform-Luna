from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from review.models import Review
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from review.serializers import ReviewSerializer, CreateReviewSerializer
from user.serializers import UserSerializer
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
User = get_user_model()


class BestRatedRestaurantsView(GenericAPIView):
    def get(self, request):
        all_reviews = Review.objects.all()
        serializer = ReviewSerializer(all_reviews, many=True)
        all_reviews_list = list()

        for counter in range(0, len(serializer.data)):
            all_reviews_list.append(serializer.data[counter])

        all_rated_restaurants = list()
        for counter in range(0, len(serializer.data)):
            already_in_list = False
            for sub_counter in range(0, len(all_rated_restaurants)):
                if serializer.data[counter]['restaurant'] == all_rated_restaurants[sub_counter]:
                    already_in_list = True
                    break
            if not already_in_list:
                all_rated_restaurants.append(serializer.data[counter]['restaurant'])

        reviews_by_restaurant = {}
        for counter in range(0, len(all_rated_restaurants)):
            reviews_by_restaurant[all_rated_restaurants[counter]] = list()

        for counter in range(0, len(all_reviews_list)):
            reviews_by_restaurant[all_reviews_list[counter]['restaurant']].append(all_reviews_list[counter]['rating'])

        ratings_by_restaurant = {}
        for counter in range(0, len(all_rated_restaurants)):
            ratings_by_restaurant[all_rated_restaurants[counter]] = 0

        for counter in range(0, len(all_rated_restaurants)):
            added_counter = 0
            for sub_counter in range(0, len(all_reviews_list)):
                if all_rated_restaurants[counter] == all_reviews_list[sub_counter]['restaurant']:
                    ratings_by_restaurant[all_rated_restaurants[counter]] += all_reviews_list[sub_counter]['rating']
                    added_counter += 1
            ratings_by_restaurant[all_rated_restaurants[counter]] /= added_counter

        sorted_ratings_by_restaurant = dict(sorted(ratings_by_restaurant.items(), key=lambda item: item[1], reverse=True))

        all_restaurants = Restaurant.objects.all()
        restaurant_serializer = ReviewSerializer(all_restaurants, many=True)
        best_rated_restaurants = list()
        added_counter = 0
        for single_restaurant in sorted_ratings_by_restaurant.keys():
            for sub_counter in range(0, len(restaurant_serializer.data)):
                if single_restaurant == restaurant_serializer.data['id']:
                    best_rated_restaurants.append(restaurant_serializer.data)
                    added_counter += 1
                if added_counter == 4:
                    break
            if added_counter == 4:
                break

        return Response(best_rated_restaurants)


class SearchView(GenericAPIView):
    def get(self, request):
        if request.data['type'] == 'restaurants':
            restaurants = Restaurant.objects.filter(name__icontains=request.data['search_string'])
            serializer = RestaurantSerializer(restaurants, many=True)

            return Response(serializer.data)
        elif request.data['type'] == 'reviews':
            reviews = Review.objects.filter(text_content__icontains=request.data['search_string'])
            serializer = ReviewSerializer(reviews, many=True)

            return Response(serializer.data)
        elif request.data['type'] == 'users':
            users = User.objects.filter(username__icontains=request.data['search_string'])
            serializer = UserSerializer(users, many=True)

            return Response(serializer.data)
        return Response("Error.")


class CreateReviewView(GenericAPIView):
    def post(self, request, *args, **kwargs):
        serializer = CreateReviewSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user, restaurant=Restaurant.objects.get(id=self.kwargs['restaurant_id']))

        return Response(serializer.data)


class ReviewsForRestaurantView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        all_reviews = Review.objects.all()
        serializer = ReviewSerializer(all_reviews, many=True)
        reviews_of_restaurant = list()

        for counter in range(0, len(serializer.data)):
            if serializer.data[counter]['restaurant'] == self.kwargs['restaurant_id']:
                reviews_of_restaurant.append(serializer.data[counter])

        return Response(reviews_of_restaurant)


class ReviewsByUserView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        all_reviews = Review.objects.all()
        serializer = ReviewSerializer(all_reviews, many=True)
        reviews_by_user = list()

        for counter in range(0, len(serializer.data)):
            if serializer.data[counter]['user'] == self.kwargs['user_id']:
                reviews_by_user.append(serializer.data[counter])

        return Response(reviews_by_user)


class ReviewView(GenericAPIView):
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
