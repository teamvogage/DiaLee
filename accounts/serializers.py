from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    profile_image = serializers.ImageField(use_url=True)

    # TODO: 프로필 이미지 파일을 'profile_{username}'으로 저장하기
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["username"],
            email=validated_data['email'],
            profile_image=validated_data['profile_image']
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

    class Meta:
        model = User
        fields = ["pk", "username", "password", "email", "profile_image"]
