from django.urls import path
from rest_framework_simplejwt.views import TokenVerifyView


app_name = 'accounts'

urlpatterns = [
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]