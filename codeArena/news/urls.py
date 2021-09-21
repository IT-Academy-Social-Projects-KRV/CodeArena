from django.urls import path
from .views import CreateNewsView, GetNewsDetailView, NewsView


urlpatterns = [
    path('', NewsView.as_view()),
    path('create_news/', CreateNewsView.as_view()),
    path('<pk>/', GetNewsDetailView.as_view()),
]
