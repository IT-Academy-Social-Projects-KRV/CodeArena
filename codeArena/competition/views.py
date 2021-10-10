from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

from .models import Competition
from .serializers import CreateCompetitionSerializer, CompetitionSerializer

class CompetitionInfoView(APIView):

    def get(self, request):
        competition = Competition.objects.all()
        serializer = CompetitionSerializer(competition, many=True)
        return Response(serializer.data)


class CreateCompetitionView(APIView):

    def post(self, request, format='json'):
        competition = CreateCompetitionSerializer(data=request.data)
        if competition.is_valid(raise_exception=True):
            competition.save()
        return Response(status=status.HTTP_201_CREATED)
        