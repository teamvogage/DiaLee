from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from django.core.validators import MinValueValidator, MinLengthValidator

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin, UserManager
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, voyager_name, **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, voyager_name=voyager_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email=None, password=None, voyager_name=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, voyager_name, **extra_fields)

    def create_superuser(self, email, password, voyager_name, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, voyager_name, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    username = None

    email = models.EmailField(
        max_length=200,
        unique=True,
        help_text=('200자 이내로 입력해 주세요.')
    )

    voyager_name = models.CharField(
        max_length=8,
        validators=[MinLengthValidator(1)],
        unique=False,
        default="익명의 항해자",
        help_text=('1~8자 사이로 입력해 주세요.'),
    )

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

    is_staff = models.BooleanField('스태프 권한', default=False)
    is_active = models.BooleanField('사용중', default=True)
    date_joined = models.DateTimeField('가입일', default=timezone.now)

    def __str__(self):
        return self.email

    objects = UserManager()
    
    USERNAME_FIELD = 'email' 
    REQUIRED_FIELDS = ['voyager_name']

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
        swappable = 'AUTH_USER_MODEL'

    # def email_user(self, subject, message, from_email=None, **kwargs): # 이메일 발송 메소드
    #     send_mail(subject, message, from_email, [self.email], **kwargs)


# class User(AbstractUser):
#     """
#     필수 필드 : voyager_name, email, password

#     [django 기본 User 모델에서 변경된 부분]
#       - username 필드 사용 X
#       - email 필드: unique=False => unique=True (User 모델의 id로 설정)
#       - voyager_name, profile_image, point 필드 추가
#     """
#     username = None

#     voyager_name = models.CharField(
#         max_length=8,
#         validators=[MinLengthValidator(1)],
#         unique=False,
#         default="익명의 항해자",
#         help_text=('1~8자 사이로 입력해 주세요.'),
#     )

#     email = models.EmailField(
#         max_length=200,
#         unique=True,
#         help_text=('200자 이내로 입력해 주세요.')
#     )

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['voyager_name']

#     # TODO: 기본 이미지 중에서 선택하는 기능 추가
#     profile_image = ProcessedImageField(
#         blank=True,
#         upload_to='profile_image/%Y/%m',
#         processors=[ResizeToFill(300, 300)],
#         format='JPEG',
#         options={'quality': 70},
#     )

#     point = models.IntegerField(
#         default=0,
#         validators=[MinValueValidator(0)],
#     )

#     def __str__(self):
#         return self.email
