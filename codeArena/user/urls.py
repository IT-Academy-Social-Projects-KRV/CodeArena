from django.urls import path

from . import views

urlpatterns = [

    path('create_role/', views.CreateRoleAPIView.as_view()),
    path('roles/', views.RolesAPIView.as_view()),  
    path('create_user/', CreateUserAPIView.as_view()),
    path('obtain_token/', views.authenticate_user),
    path('update/', UserRetrieveUpdateAPIView.as_view()),
    path('users/', UserListAPIView.as_view()),
    path('<pk>/', GetUserDetailView.as_view()),
    path('create_role/', CreateRoleAPIView.as_view()),
    path('roles/', RolesAPIView.as_view()),

]
 
  if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

