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