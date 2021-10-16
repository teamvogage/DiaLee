from django.urls import path
from . import views
from .views import ArticleDetailView, CommentDetailView


url_name = 'diary'

urlpatterns = [
    path('articles/', views.article_list),
    path('articles/<int:article_pk>', ArticleDetailView.as_view()),
    path('articles/<int:article_pk>/comments', views.comment_list),
    path('comments/<comment_pk>', CommentDetailView.as_view()),
]
