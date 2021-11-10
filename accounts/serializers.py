from rest_framework import serializers
from django.contrib.auth import get_user_model
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import LoginSerializer


User = get_user_model()


class CustomRegisterSerializer(RegisterSerializer):
    # 기본 설정 필드: username, password, email
    # 추가 설정 필드: profile_image
    profile_image = serializers.ImageField(use_url=True, required=False)

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['profile_image'] = self.validated_data.get('profile_image', '')

        return data


class CustomLoginSerializer(LoginSerializer):
    # 로그인 시 입력 받는 필드 : email, password
    username = None
    email = serializers.EmailField()
