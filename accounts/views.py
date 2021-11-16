from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from allauth.account.adapter import get_adapter
from allauth.utils import email_address_exists
from allauth.account import app_settings as allauth_settings


# def check_username_validation(username):
#     username = get_adapter().clean_username(username)
#     if 1 <= len(username) <= 8:
#         return Response({'is_valid': True}, status=status.HTTP_200_OK)
#     else:
#         return Response({
#             'is_valid': False,
#             'message': '닉네임은 1자 이상 8자 이하여야 합니다.'
#             }, 
#             status=status.HTTP_400_BAD_REQUEST
#         )


@api_view(['POST'])
def check_email_validation(email):
    """
    이메일이 기존 가입 유저의 이메일과 겹치지 않는지 검사한다.
    """
    email = get_adapter().clean_email(email)

    if allauth_settings.UNIQUE_EMAIL:
        if email and email_address_exists(email):
            return Response({
                'is_valid': False,
                'message': '해당 이메일 주소는 이미 가입되어 있습니다.'
                },
                status=status.HTTP_400_BAD_REQUEST
            )

    return Response({'is_valid': True}, status=status.HTTP_200_OK)
