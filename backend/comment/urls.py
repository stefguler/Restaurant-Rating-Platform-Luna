from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views
from comment.views import ReviewsCommentsView, CommentsFromUserView, CreateCommentView, DeleteCommentView

urlpatterns = [
    path('reviews/comments/', ReviewsCommentsView.as_view()),
    path('review/comment/user=<int:user_id>/', CommentsFromUserView.as_view()),
    path('review/comment/new/<int:review_id>/', CreateCommentView.as_view()),
    path('review/comment/comment=<int:comment_id>/', DeleteCommentView.as_view())
]