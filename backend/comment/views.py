from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from comment.models import Comment
from review.models import Review
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from comment.serializers import CommentSerializer, CreateCommentSerializer
from review.serializers import ReviewSerializer
from user.serializers import UserSerializer
User = get_user_model()


class ReviewsCommentsView(GenericAPIView):
    def get(self, request):
        all_comments = Comment.objects.all()
        comment_serializer = CommentSerializer(all_comments, many=True)

        comments_from_the_current_user = list()
        for counter in range(0, len(comment_serializer.data)):
            if comment_serializer.data[counter]['user'] == request.user.id:
                comments_from_the_current_user.append(comment_serializer.data[counter])

        reviews_the_current_user_commented = list()
        for counter in range(0, len(comments_from_the_current_user)):
            # if comment_serializer.data[counter]['user'] == request.user:
            specific_review = Review.objects.get(id=comments_from_the_current_user[counter]['review'])
            serializer = ReviewSerializer(specific_review, many=False)
            reviews_the_current_user_commented.append(serializer.data)
        return Response(reviews_the_current_user_commented)


class CommentsFromUserView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        all_comments = Comment.objects.all()
        serializer = CommentSerializer(all_comments, many=True)
        comments_by_user = list()

        for counter in range(0, len(serializer.data)):
            if serializer.data[counter]['user'] == self.kwargs['user_id']:
                comments_by_user.append(serializer.data[counter])

        return Response(comments_by_user)


class CreateCommentView(GenericAPIView):
    def post(self, request, *args, **kwargs):
        serializer = CreateCommentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user, review=Review.objects.get(id=self.kwargs['review_id']))

        return Response(serializer.data)


class DeleteCommentView(GenericAPIView):
    def delete(self, request, *args, **kwargs):
        specific_comment = Comment.objects.get(id=self.kwargs['comment_id'])
        specific_comment.delete()

        return Response("Comment deleted.")
