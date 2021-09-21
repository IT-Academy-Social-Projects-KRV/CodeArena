from django.urls import path
from . import views

urlpatterns = [
    path('create_role/', views.CreateRoleAPIView.as_view()),
    path('roles/', views.RolesAPIView.as_view()),
    path('create_user/', views.CreateUserAPIView.as_view()),
    path('users/', views.UserListAPIView.as_view()),
    path('<pk>/', views.GetUserDetailView.as_view()),
]
