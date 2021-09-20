from django.urls import path
from .views import *

urlpatterns = [
    path('create_user/', CreateUserAPIView.as_view()),
    path('users/', UserListAPIView.as_view()),
    path('<pk>/', GetUserDetailView.as_view()),
    path('create_role/', CreateRoleAPIView.as_view()),
    path('roles/', RolesAPIView.as_view()),
]