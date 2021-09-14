from django.db.utils import DatabaseError
from rest_framework import generics, status as http_status
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response

from bson.objectid import ObjectId

class GetTaskListView(APIView):
    """Gets all data from Task table"""

    def get(self, request, format=None):
        tasks = Task.objects.all()
        serializer = TaskListSerializer(data=tasks, many=True)
        serializer.is_valid()
        return Response(serializer.data)


class GetTaskDetailView(APIView):
    """Gets object from Task table by _id field"""

    def get(self, request, pk, format=None):
        tasks = Task.objects.filter(_id=ObjectId(pk))

        if tasks:
            serializer = TaskListSerializer(data=tasks, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=http_status.HTTP_400_BAD_REQUEST)


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
