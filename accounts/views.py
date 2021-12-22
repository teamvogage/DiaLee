from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken


from dj_rest_auth.views import LoginView, LogoutView
from dj_rest_auth.jwt_auth import set_jwt_cookies, unset_jwt_cookies


from allauth.account.adapter import get_adapter
from allauth.utils import email_address_exists
from allauth.account import app_settings as allauth_settings

from django.conf import settings
from django.utils import timezone
from django.contrib.auth import logout as django_logout
from django.core.exceptions import ObjectDoesNotExist


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
@permission_classes([AllowAny])
def check_email_validation(request):
    """
    이메일이 기존 가입 유저의 이메일과 겹치지 않는지 검사한다.
    """
    email = get_adapter().clean_email(request.data['email'])

    if allauth_settings.UNIQUE_EMAIL:
        if email and email_address_exists(email):
            return Response({
                'is_valid': False,
                'message': '해당 이메일 주소는 이미 가입되어 있습니다.'
                },
                status=status.HTTP_409_CONFLICT
            )

    return Response({'is_valid': True}, status=status.HTTP_200_OK)


class CustomLoginView(LoginView):
    def get_response(self):

        serializer_class = self.get_response_serializer()

        if getattr(settings, 'REST_USE_JWT', False):
            from rest_framework_simplejwt.settings import (
                api_settings as jwt_settings,
            )
            access_token_expiration = (timezone.now() + jwt_settings.ACCESS_TOKEN_LIFETIME)
            refresh_token_expiration = (timezone.now() + jwt_settings.REFRESH_TOKEN_LIFETIME)
            return_expiration_times = getattr(settings, 'JWT_AUTH_RETURN_EXPIRATION', False)

            data = {
                'user': self.user,
                'access_token': self.access_token,
                'refresh_token': self.refresh_token,
            }

            if return_expiration_times:
                data['access_token_expiration'] = access_token_expiration
                data['refresh_token_expiration'] = refresh_token_expiration

            serializer = serializer_class(
                instance=data,
                context=self.get_serializer_context(),
            )
        elif self.token:
            serializer = serializer_class(
                instance=self.token,
                context=self.get_serializer_context(),
            )
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)

        response = Response(serializer.data, status=status.HTTP_200_OK)

        # refresh token을 httponly cookie로 저장하기 위해 커스텀한 부분!
        if response.data.get('refresh_token'):
            cookie_max_age = 3600 * 24 * 30  # 30일
            response.set_cookie('refresh_token', response.data['refresh_token'], max_age=cookie_max_age, httponly=True )
            del response.data['refresh_token']

        if getattr(settings, 'REST_USE_JWT', False):
            set_jwt_cookies(response, self.access_token, self.refresh_token)
        return response


class CustomLogoutView(LogoutView):
    def logout(self, request):
        try:
            request.user.auth_token.delete()
        except (AttributeError, ObjectDoesNotExist):
            pass

        if getattr(settings, 'REST_SESSION_LOGIN', True):
            django_logout(request)

        response = Response(
            {'detail': 'Successfully logged out.'},
            status=status.HTTP_200_OK,
        )

        if getattr(settings, 'REST_USE_JWT', False):
            from rest_framework_simplejwt.exceptions import TokenError
            from rest_framework_simplejwt.tokens import RefreshToken

            cookie_name = getattr(settings, 'JWT_AUTH_COOKIE', None)

            unset_jwt_cookies(response)

            if 'rest_framework_simplejwt.token_blacklist' in settings.INSTALLED_APPS:
                # add refresh token to blacklist
                try:
                    token = RefreshToken(request.data['refresh'])
                    token.blacklist()
                except KeyError:
                    response.data = {'detail': 'Refresh token was not included in request data.'}
                    response.status_code =status.HTTP_401_UNAUTHORIZED
                except (TokenError, AttributeError, TypeError) as error:
                    if hasattr(error, 'args'):
                        if 'Token is blacklisted' in error.args or 'Token is invalid or expired' in error.args:
                            response.data = {'detail': error.args[0]}
                            response.status_code = status.HTTP_401_UNAUTHORIZED
                        else:
                            response.data = {'detail': 'An error has occurred.'}
                            response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR

                    else:
                        response.data = {'detail': 'An error has occurred.'}
                        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR

            elif not cookie_name:
                # 빈 refresh_token 쿠키 추가
                response.set_cookie('refresh_token', "")

        return response


class CookieTokenRefreshSerializer(TokenRefreshSerializer):
    refresh = None
    def validate(self, attrs):
        attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
        if attrs['refresh']:
            return super().validate(attrs)
        else:
            raise InvalidToken("'refresh token' 쿠키에 유효한 토큰이 없습니다.")


# class CookieTokenObtainPairView(TokenObtainPairView):
#   def finalize_response(self, request, response, *args, **kwargs):
#     if response.data.get('refresh'):
#         cookie_max_age = 3600 * 24 * 30  # 30일
#         response.set_cookie('refresh_token', response.data['refresh'], max_age=cookie_max_age, httponly=True )
#         del response.data['refresh']
#     return super().finalize_response(request, response, *args, **kwargs)


class CookieTokenRefreshView(TokenRefreshView):
    def finalize_response(self, request, response, *args, **kwargs):
        if response.data.get('refresh'):
            cookie_max_age = 3600 * 24 * 30  # 30일
            response.set_cookie('refresh_token', response.data['refresh'], max_age=cookie_max_age, httponly=True )
            del response.data['refresh']
        return super().finalize_response(request, response, *args, **kwargs)
    serializer_class = CookieTokenRefreshSerializer