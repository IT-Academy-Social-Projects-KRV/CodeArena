from django.urls import path, re_path
from django.conf.urls import url
from . import views
from rest_framework import generics



app_name = 'task'
urlpatterns = [
    path('create_task/', views.CreateTaskView.as_view()),
    path('get_task/', views.GetTaskListView.as_view()),
    path('get_task/<pk>/', views.GetTaskDetailView.as_view()),

    path('get_language/', views.GetLanguageListView.as_view()),
    path('get_language/add/', views.CreateLanguageView.as_view()),
    path('get_language/<pk>/', views.GetLanguageDetailView.as_view()),

    path('get_category/', views.GetCategoryListView.as_view()),
    path('get_category/add/', views.CreateCategoryView.as_view()),
    path('get_category/<pk>/', views.GetCategoryDetailView.as_view()),

# ______________________________________________________________
    path('task/', views.TaskApiListView.as_view()),
    path('task/add', views.CreateApiTaskView.as_view()),
    path('task/<pk>', views.TaskApiListView.as_view()),


    # path('language/', views.LanguageApiListView.as_view()),
    path('language/', views.LanguageApiListView.as_view()),
    # path('language/add', views.CreateLanguageApiView.as_view()),
    path('language/<pk>', views.LanguageDetailApiView.as_view()),


    
    path('category/', views.CategoryApiListView.as_view()),
    
]

