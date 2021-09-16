from django.urls import path
from .views import NewsView, GetNewsDetailView, CreateNewsView
app_name = "news"
# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('', NewsView.as_view()),
    path('create_news/', CreateNewsView.as_view()),
    path('<pk>/', GetNewsDetailView.as_view()),
    
]