from django.urls import path
from . import views

urlpatterns = [
    path('email-check/', views.check_email_validation),
]

