from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenVerifyView, TokenObtainPairView, TokenRefreshView


app_name = 'accounts'


urlpatterns = [
    path("signup/", views.SignupView.as_view(), name="login"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
