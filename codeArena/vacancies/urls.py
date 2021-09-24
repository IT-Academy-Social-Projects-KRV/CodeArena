from django.urls import path
from .views import CreateVacanciesView, VacanciesView

urlpatterns = [
    path('', VacanciesView.as_view()),
    path('create_vacancies/', CreateVacanciesView.as_view()),
]
