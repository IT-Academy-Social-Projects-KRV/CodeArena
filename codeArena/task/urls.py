from django.urls import path
from . import views


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
]
