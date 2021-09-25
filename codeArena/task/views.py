from django.db.models import manager
from django.db.utils import DatabaseError
from rest_framework import fields, generics, status as http_status
from rest_framework.serializers import Serializer
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import viewsets

from bson.objectid import ObjectId

class GetTaskListView(APIView):
    """Gets all data from Task table"""

    def get(self, request, format=None):
        tasks = Task.objects.all()
        serializer = TaskListSerializer(data=tasks, many=True)
        serializer.is_valid()
        return Response(serializer.data, status=http_status.HTTP_200_OK)


    # TO DELETE
    def delete(self, request, format=None):
        tasks = Task.objects.all()
        tasks.delete()
        return Response ("All tasks was deleted")


class GetTaskDetailView(APIView):

    def get(self, request, pk, format=None):
        task = Task.objects.filter(_id=ObjectId(pk))
        if task:
            serializer = TaskListSerializer(data=task, many=True)
            serializer.is_valid()
            return Response(serializer.data, status=http_status.HTTP_200_OK)
        else:
            return Response(status=http_status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        Task.objects.filter(_id=ObjectId(pk)).delete()
        return Response({"message": f'Task with id {pk} has been deleted.'}, status=http_status.HTTP_200_OK)

    def put(self, request, pk):
        task = Task.objects.filter(_id=ObjectId(pk)).get()
        data = request.data.get('task')
        serializer = CreateTaskSerializer(
            instance=task, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            task_ = serializer.save()
        return Response({
            "success": f'The task {task_.name} updated successfully'}, status=http_status.HTTP_200_OK)


class CreateTaskView(APIView):

    def post(self, request, format='json'):
        task = CreateTaskSerializer(data=request.data)
        # if task.is_valid(raise_exception=True):
        #     task_ = task.save()

        try:
            task_ = task.save()
        except DatabaseError:
            return Response(
                status=http_status.HTTP_409_CONFLICT)

            return Response({"success": f'Task {task_} created successfully'}, status=http_status.HTTP_201_CREATED)
        return Response(status=http_status.HTTP_422_UNPROCESSABLE_ENTITY)


class GetLanguageListView(APIView):

    def get(self, request, format='json'):
        serializer = LanguageSerializer(data=Language.objects.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=http_status.HTTP_200_OK)


class CreateLanguageView(APIView):

    def post(self, request, format='json'):
        language = LanguageSerializer(data=request.data)
        if language.is_valid(raise_exception=True):
            language_ = language.save()
        return Response({"success": f'Language {language_.name} created successfully'}, status=http_status.HTTP_201_CREATED)


class GetLanguageDetailView(APIView):

    def get(self, request, pk, format=None):
        language = Language.objects.filter(_id=ObjectId(pk))
        if language:
            serializer = LanguageSerializer(data=language, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=http_status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        Language.objects.filter(_id=ObjectId(pk)).delete()
        return Response({"message": f'Landuage with id {pk} has been deleted.'}, status=http_status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        # language = Language.objects.get(_id=ObjectId(pk))
        language = Language.objects.filter(_id=ObjectId(pk)).first()
        data = request.data.get('language_some')        
        serializer = CreateLanguageSerializer(
            instance=language, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            language_ = serializer.save()
        return Response({
            "success": f'The language {language_.name} updated successfully'
        }, status=http_status.HTTP_200_OK)


class GetCategoryListView(APIView):
    def get(self, request, format='json'):
        serializer = CategorySerializer(data=Category.objects.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=http_status.HTTP_200_OK)


class CreateCategoryView(APIView):

    def post(self, request, format='json'):
        category = CategorySerializer(data=request.data)
        if category.is_valid(raise_exception=True):
            category_ = category.save()
        return Response({"success": f'Category {category_.name} created successfully'}, status=http_status.HTTP_201_CREATED)






class GetCategoryDetailView(APIView):

    def get(self, request, pk, format=None):
        category = Category.objects.filter(_id=ObjectId(pk))
        if category:
            serializer = CategorySerializer(data=category, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=http_status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        Category.objects.filter(_id=ObjectId(pk)).delete()
        return Response({"message": f'Category with id {pk} has been deleted.'}, status=http_status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        category = Category.objects.filter(_id=ObjectId(pk)).get()
        data = request.data.get('category')
        serializer = CategorySerializer(
            instance=category, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            category_ = serializer.save()
        return Response({
            "success": f'The category {category_.name} updated successfully'
        }, status=http_status.HTTP_200_OK)


# class Category(generics.ListCreateAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer

#     def list(self, request):
#         queryset = self.get_queryset()
#         serializer = CategorySerializer(queryset, many=True)
#         fields = ('name')
#         return Response(serializer.data)
#     def post(self, request, format='json'):
#         category = CategorySerializer(data=request.data)
#         if category.is_valid(raise_exception=True):
#             category_ = category.save()
#         return Response({"success": f'Category {category_.name} created successfully'})

#     def delete(self, request):
#         queryset = self.get_queryset()
#         serializer = CategorySerializer(queryset, many=True)
#         fields = ('name')
#         return Response(serializer.data)

