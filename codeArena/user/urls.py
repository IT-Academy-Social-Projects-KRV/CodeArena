from django.urls import path
from . import views

urlpatterns = [
    path('create_user/', views.CreateUserAPIView),
    path('users/', views.UserListAPIView),
    path('<pk>/', views.GetUserDetailView),
    path('create_role/', views.CreateRoleAPIView),
    path('roles/', views.RolesAPIView),
]