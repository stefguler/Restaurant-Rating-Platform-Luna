from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views
from review.views import CreateReviewView, ReviewsForRestaurantView, ReviewsByUserView, ReviewView, LikeView, LikedReviewsView, CommentedReviewsView

urlpatterns = [
    path('new/<int:restaurant_id>/', CreateReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ReviewsForRestaurantView.as_view()),
    path('user/<int:user_id>/', ReviewsByUserView.as_view()),
    path('<int:review_id>/', ReviewView.as_view()),
    path('like/<int:review_id>/', LikeView.as_view()),
    path('likes/', LikedReviewsView.as_view()),
    path('comments/', CommentedReviewsView.as_view())
]