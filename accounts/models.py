from django.contrib.auth.models import AbstractUser
from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from django.core.validators import MinValueValidator


class User(AbstractUser):
    """
    필수 필드 : username, email, password

    [django 기본 User 모델에서 변경된 부분]
      - username 필드: unique=True => unique=False
      - email 필드: unique=False => unique=True (User 모델의 id로 설정)
      - profile_image, point 필드 추가
    """
    username = models.CharField(
        max_length=150,
        unique=False,
        help_text=('Required. 150 characters or fewer.'),
    )

    email = models.EmailField(
        max_length=200,
        unique=True,
        help_text=('200 characters or fewer.')
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    # TODO: 기본 이미지 중에서 선택하는 기능 추가
    profile_image = ProcessedImageField(
        blank=True,
        upload_to='profile_image/%Y/%m',
        processors=[ResizeToFill(300, 300)],
        format='JPEG',
        options={'quality': 70},
    )

    point = models.IntegerField(
        default=0,
        validators=[MinValueValidator(0)],
    )

    def __str__(self):
        return self.email
