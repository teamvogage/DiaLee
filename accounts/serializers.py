from rest_framework import serializers
from django.contrib.auth import get_user_model
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import LoginSerializer


User = get_user_model()


class CustomRegisterSerializer(RegisterSerializer):
    # 기본 설정 필드: password, email
    # 추가 설정 필드: profile_image, voyager_name
    username = None

    voyager_name = serializers.CharField(
        max_length=8,
        min_length=1,
        required=True,
    )

    profile_image = serializers.ImageField(use_url=True, required=False)

    def get_cleaned_data(self):
        data = {
            'password': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
        }
        data['voyager_name'] = self.validated_data.get('voyager_name', '')
        data['profile_image'] = self.validated_data.get('profile_image', '')

        return data


class CustomLoginSerializer(LoginSerializer):
    # 로그인 시 입력 받는 필드 : email, password
    username = None
    email = serializers.EmailField()
