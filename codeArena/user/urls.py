from django.urls import path
from .views import CreateUserAPIView, CreateRoleAPIView, RolesAPIView

urlpatterns = [
    path('create_user/', CreateUserAPIView.as_view()),
    path('users/', CreateUserAPIView.as_view()),
    path('create_role/', CreateRoleAPIView.as_view()),
    path('roles/', RolesAPIView.as_view()),
]