from django.conf import settings
from django.db import models


class Article(models.Model):
    DIARY_TYPE_CHOICES = (
        (0, '메모장'),
        (1, '원고지'),
        (2, '어린이 일기장')
    )

    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    diary_type = models.SmallIntegerField(choices=DIARY_TYPE_CHOICES, default=0)
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
