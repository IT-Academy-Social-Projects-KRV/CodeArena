from django.urls import path
from . import views


urlpatterns = [
    path('', views.NewsView),
    path('create_news/', views.CreateNewsView),
    path('<pk>/', views.GetNewsDetailView),
    path('upload/', views.add_news),
]
