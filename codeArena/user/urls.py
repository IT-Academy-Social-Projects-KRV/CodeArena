from django import urls
from django.urls import path
from django.urls.conf import include

from . import views

urlpatterns = [

    path('create_role/', views.CreateRoleAPIView.as_view()),
    path('roles/', views.RolesAPIView.as_view()),  
    # path('create_user/', views.CreateUserAPIView.as_view()),
    # path('obtain_token/', views.authenticate_user),
    path('update/', views.UserRetrieveUpdateAPIView.as_view()),
    path('users/', views.UserListAPIView.as_view()),
    path('<pk>/', views.GetUserDetailView.as_view()),


]
 
 # if settings.DEBUG:
 #   urlpatterns += static(settings.MEDIA_URL,
  #                        document_root=settings.MEDIA_ROOT)

