from os import name
from bson.objectid import ObjectId
from django.views import generic
from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework import status as http_status
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from django.db.models import Q
from rest_framework import viewsets
import django_filters.rest_framework

from .models import *
from .serializers import *


class GetTaskListView(APIView):
    """Gets all data from Task table"""

    def get(self, request, format=None):
        tasks = Task.objects.all()
        serializer = TaskListSerializer(data=tasks, many=True)
        serializer.is_valid()
        return Response(serializer.data)


class GetTaskDetailView(APIView):

    def get(self, request, pk, format=None):
        task = Task.objects.filter(_id=ObjectId(pk))
        if task:
            serializer = TaskListSerializer(data=task, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=http_status.HTTP_404_NOT_FOUND)
            
    def delete(self, request, pk):
        Task.objects.filter(_id=ObjectId(pk)).delete()
        return Response({"message": f'Task with id {pk} has been deleted.'})

    def put(self, request, pk):
        task = Task.objects.filter(_id=ObjectId(pk)).get()
        data = request.data.get('task')
        serializer = CreateTaskSerializer(
            instance=task, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            task_ = serializer.save()
        return Response({
            "success": f'The task {task_.name} updated successfully'})


class CreateTaskView(APIView):

    def post(self, request, format='json'):
        task = CreateTaskSerializer(data=request.data)
        if task.is_valid(raise_exception=True):
            task_ = task.save()
            return Response({"success": f'Task {task_.name} created successfully'}, status=http_status.HTTP_201_CREATED)


class CreateLanguageView(APIView):

    def post(self, request, format='json'):
        language = LanguageSerializer(data=request.data)
        if language.is_valid(raise_exception=True):
            language_ = language.save()
        return Response({"success": f'Language {language_.name} created successfully'}, status=http_status.HTTP_201_CREATED)


class GetLanguageListView(APIView):
    
    def get(self, request, format='json'):
        serializer = LanguageSerializer(data=Language.objects.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data)
        
class GetLanguageDetailView(APIView):

    def get(self, request, pk, name, format=None, *args, **kwargs):
        language = Language.objects.filter(_id=ObjectId(pk))
        # params = request.query_params['name']

        if language:
            serializer = LanguageSerializer(data=language, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=http_status.HTTP_404_NOT_FOUND)
# class GetLanguageDetailView(APIView):
#     serializer_class = LanguageSerializer
#     def get(self, request, pk, format=None, *args, **kwargs):
#         language = Language.objects.filter(_id=ObjectId(pk))

#         if language:
#             serializer = LanguageSerializer(data=language, many=True)
#             serializer.is_valid()
#             return Response(serializer.data)
#         else:
#             return Response(status=http_status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        Language.objects.filter(_id=ObjectId(pk)).delete()
        return Response({"message": f'Landuage with id {pk} has been deleted.'}, status=http_status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        language = Language.objects.filter(_id=ObjectId(pk)).first()
        data = request.data.get('language_some')        
        serializer = LanguageSerializer(
        # serializer = CreateLanguageSerializer(
            instance=language, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            language_ = serializer.save()
        return Response({
            "success": f'The language {language_.name} updated successfully'
        }, )


class GetCategoryListView(APIView):
    
    def get(self, request, format='json'):
        serializer = CategorySerializer(data=Category.objects.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data)


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
            "success": f'The category {category_.name} updated successfully'}, )
# ______________________________________________
# ______________________________________________
# ______________________________________________
# ______________________________________________
# ______________________________________________


class LanguageApiListView(generics.ListCreateAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    filterset_fields = ['name']

    def perform_create(self, request,  format='json'):
        l = CreateLanguageSerializer(data=request.data)
        if l.is_valid(raise_exception=True):
            l_ = l.save()
        return Response({"success": f'Category {l_.name} created successfully'}, status=http_status.HTTP_201_CREATED)


#  def post(self, request, format='json'):
#         category = CategorySerializer(data=request.data)
#         if category.is_valid(raise_exception=True):
#             category_ = category.save()
#         return Response({"success": f'Category {category_.name} created successfully'}, status=http_status.HTTP_201_CREATED)

class LanguageDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

# def perform_update(self, serializer):
#     instance = serializer.save()
#     send_email_confirmation(user=self.request.user, modified=instance)


#     def perform_destroy(self, instance):
#         Language.objects.get(_id=ObjectId(instance)).delete()
#         return Response({"message": f'Landuage with id {instance} has been deleted.'}, status=http_status.HTTP_404_NOT_FOUND)





# class CreateLanguageApiView(generics.CreateAPIView):
#     queryset = Language.objects.all()
#     serializer_class = CreateLanguageSerializer






class TaskApiListView(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskListSerializer
    filterset_fields = ['name', 'language', 'rate']


class CategoryApiListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CreateApiTaskView(generics.CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = CreateTaskSerializer

