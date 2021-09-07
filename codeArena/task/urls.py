from django.urls import path
from .views import *

urlpatterns = [
    path('create_task/', CreateTaskView.as_view()),
]
