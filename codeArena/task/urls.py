from django.urls import path
from . import views


app_name = 'task'
urlpatterns = [
    path('create_task/', views.CreateTaskView.as_view()),
    path('get_task/', views.GetTaskListView.as_view()),
    path('get_task/<pk>/', views.GetTaskDetailView.as_view()),
    path('task/<pk>', views.TaskAPI.as_view()),
    path('get_language/', views.GetLanguageListView.as_view()),
    path('get_category/', views.GetCategoryListView.as_view()),
]

