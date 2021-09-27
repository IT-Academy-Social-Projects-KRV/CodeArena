from django.urls import path
from .views import CompetitionInfoView, CreateCompetitionView

urlpatterns = [
    path('competition/', CompetitionInfoView.as_view()),
    path('create_competition/', CreateCompetitionView.as_view()),
]
