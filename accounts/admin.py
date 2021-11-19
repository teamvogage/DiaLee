from django.contrib import admin
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = [
        'pk',
        'voyager_name',
        'date_joined',
        'email',
        'profile_image',
        'point',
    ]
