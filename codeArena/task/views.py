from django.db.utils import DatabaseError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import CreateTaskSerializer


class CreateTaskView(APIView):
    def post(self, request, format='json'):
        task = CreateTaskSerializer(data=request.data)

        if task.is_valid():
            try:
                task.save()
            except django.db.utils.DatabaseError:
                return Response(
                    status=status.HTTP_409_CONFLICT)

            return Response(status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)
