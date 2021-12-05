from django.urls import path
from . import views


urlpatterns = [
    path('email-check/', views.check_email_validation),
    path('login/', views.CustomLoginView.as_view(), name='rest_login'),
    
    path('token/refresh/', views.CookieTokenRefreshView.as_view(), name='token_refresh'),
]

