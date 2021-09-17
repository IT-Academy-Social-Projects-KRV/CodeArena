from django.urls import path
from .views import CreateTaskView, GetTaskListView, GetTaskDetailView, GetLanguageListView


app_name = 'task'
urlpatterns = [
    path('create_task/', CreateTaskView.as_view()),
    path('get_task/', GetTaskListView.as_view()),
    path('get_task/<pk>/', GetTaskDetailView.as_view()),
    path('get_language/', GetLanguageListView.as_view()),
]
