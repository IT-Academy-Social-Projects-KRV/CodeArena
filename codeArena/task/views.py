from django.db.utils import DatabaseError
from rest_framework import generics, status as http_status
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response

from bson.objectid import ObjectId

from .services import delete_testsfile, create_testsfile


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
            return Response(status=http_status.HTTP_404_NOT_FOUND)


class CreateTaskView(APIView):
    def post(self, request, format='json'):
        task = CreateTaskSerializer(data=request.data)

        if task.is_valid():
            try:
                task.save()
            except django.db.utils.DatabaseError:
                return Response(
                    status=status.HTTP_409_CONFLICT)

            return Response(status=http_status.HTTP_201_CREATED)

        return Response(status=http_status.HTTP_422_UNPROCESSABLE_ENTITY)


class TaskAPI(APIView):
    def delete(self, request, pk):
        task = Task.objects.get(_id=ObjectId(pk))

        if task.unit_test:
            try:
                delete_testsfile(task.unit_test.path)
            except FileNotFoundError:
                pass
        task.delete()
        
        return Response({"message": f"Task with id={pk} successfully deleted."})

    def put(self, request, pk):
        task = Task.objects.get(_id=ObjectId(pk))
        data = request.data
        serializer = TaskListSerializer(instance=task, data=data, partial=True)

        if request.FILES.get("tests", False):
            if task.unit_test:
                try:
                    delete_testsfile(task.unit_test.path)
                except FileNotFoundError:
                    pass
            create_testsfile(task=task, filecontent=request.FILES["tests"].read())
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(status=http_status.HTTP_422_UNPROCESSABLE_ENTITY)
        return Response({"message": f"Task with _id={pk} successfully updated."})


class GetLanguageListView(APIView):
    def get(self, request, format='json'):
        serializer = LanguageSerializer(data=Language.objects.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=http_status.HTTP_200_OK)


class GetCategoryListView(APIView):
    def get(self, request, format='json'):
        serializer = CategorySerializer(data=Category.objects.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=http_status.HTTP_200_OK)
