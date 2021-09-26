from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import CreateVacanciesSerializer, VacanciesSerializer
from .models import Vacancies

class VacanciesView(APIView):

    def get(self, request):
        vacancies = Vacancies.objects.all()
        serializer = VacanciesSerializer(vacancies, many=True)
        return Response(serializer.data)

class CreateVacanciesView(APIView):

    def post(self, request, format='json'):
        vacancy = CreateVacanciesSerializer(data=request.data)
        if vacancy.is_valid(raise_exception=True):
            vacancy1 = vacancy.save()
            return Response({"success": f'News {vacancy1.name} created successfully'})
        return Response(status=status.HTTP_201_CREATED)
        