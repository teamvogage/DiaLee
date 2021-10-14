from django.contrib import admin
from .models import Article, Comment


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = [
        'pk',
        'author',
        'diary_type',
        'title',
        'created_at'
    ]


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = [
        'pk',
        'author',
        'article',
        'content',
        'created_at'
    ]
