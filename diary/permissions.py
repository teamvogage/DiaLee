from rest_framework import permissions


class IsAuthorOrReadonly(permissions.BasePermission):
    """
    조회(GET)는 인증된 유저 모두에게 허용한다.
    수정(PUT) 및 삭제(DELETE)는 작성자에 한하여 허용한다.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author == request.user


class IsAuthor(permissions.BasePermission):
    """
    작성자에 한하여 수정(PUT) 및 삭제(DELETE)를 허용한다.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        return obj.author == request.user
