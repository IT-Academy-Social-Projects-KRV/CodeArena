from django.urls import path
from . import views


urlpatterns = [
    path('', views.NewsView.as_view()),
    path('create_news/', views.CreateNewsView.as_view()),
    path('upload/', views.add_news),
    path('<pk>/', views.GetNewsDetailView.as_view()),
]
