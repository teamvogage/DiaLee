from django.urls import path
from . import views


url_name = 'diary'

urlpatterns = [
    path('articles/', views.article_list),
]
