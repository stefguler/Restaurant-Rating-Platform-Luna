from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views
from comment.views import CommentsFromUserView, CreateCommentView, DeleteCommentView

urlpatterns = [
    path('user=<int:user_id>/', CommentsFromUserView.as_view()),
    path('new/<int:review_id>/', CreateCommentView.as_view()),
    path('comment=<int:comment_id>/', DeleteCommentView.as_view())
]