from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views
from review.views import BestRatedRestaurantsView, SearchView, CreateReviewView, ReviewsForRestaurantView, ReviewsByUserView, ReviewView, LikeView, LikedReviewsView, CommentedReviewsView

urlpatterns = [
    path('home/', BestRatedRestaurantsView.as_view()),
    path('search/', SearchView.as_view()),
    path('reviews/new/<int:restaurant_id>/', CreateReviewView.as_view()),
    path('reviews/restaurant/<int:restaurant_id>/', ReviewsForRestaurantView.as_view()),
    path('reviews/user/<int:user_id>/', ReviewsByUserView.as_view()),
    path('reviews/<int:review_id>/', ReviewView.as_view()),
    path('reviews/like/<int:review_id>/', LikeView.as_view()),
    path('reviews/likes/', LikedReviewsView.as_view()),
    path('reviews/comments/', CommentedReviewsView.as_view())
]