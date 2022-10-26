from django.db import models
from review.models import Review
from django.contrib.auth import get_user_model
User = get_user_model()


class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    text_content = models.CharField(max_length=250)
    user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='comments')
    review = models.ForeignKey(to=Review, on_delete=models.PROTECT, related_name='comment')
    liked_by_user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='liked_comments')
