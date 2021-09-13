from django.urls import path
from .views import *


app_name = 'task'
urlpatterns = [
    path('get_task/', GetTaskListView.as_view()),
    path('get_task/<pk>/', GetTaskDetailView.as_view()),
    
]
