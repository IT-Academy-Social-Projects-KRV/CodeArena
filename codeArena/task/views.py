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
            return Response(status=http_status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, pk):
        new_id = Task.objects.filter(_id=ObjectId(pk))
        new_id.delete()
        return Response({"message": f'Task with id {pk} has been deleted.'}, status=204)

    def put(self, request, pk):
        saved_task = Task.objects.filter(_id=ObjectId(pk)).first()
        data = request.data.get('one_task')
        serializer = CreateTaskSerializer(
            instance=saved_task, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            one_task_saved = serializer.save()
        return Response({
            "success": f'The task {one_task_saved.name} updated successfully'
        })


class CreateTaskView(APIView):
    
    def post(self, request, format='json'):
        task = CreateTaskSerializer(data=request.data)
        if task.is_valid():
            try:
                task.save()
            except DatabaseError:
                return Response(
                    status=http_status.HTTP_409_CONFLICT)

            return Response(status=http_status.HTTP_201_CREATED)
        return Response(status=http_status.HTTP_422_UNPROCESSABLE_ENTITY)


class GetLanguageListView(APIView):
    
    def get(self, request, format='json'):
        serializer = LanguageSerializer(data=Language.objects.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=http_status.HTTP_200_OK)


class CreateLanguageView(APIView):

    def post(self, request, format='json'):
        one_language = LanguageSerializer(data=request.data)
        if one_language.is_valid(raise_exception=True):
            one_language_saved = one_language.save()
        return Response({"success": f'Language {one_language_saved.name} created successfully'}, status=http_status.HTTP_201_CREATED)


class GetLanguageDetailView(APIView):

    def get(self, request, pk, format=None):
        one_language = Language.objects.filter(_id=ObjectId(pk))
        if one_language:
            serializer = LanguageSerializer(data=one_language, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=404)

    def delete(self, request, pk):
        new_id = Language.objects.filter(_id=ObjectId(pk))
        new_id.delete()
        return Response({"message": f'Landuage with id {pk} has been deleted.'}, status=204)

    def put(self, request, pk):
        saved_language = Language.objects.filter(_id=ObjectId(pk)).first()
        data = request.data.get('one_language')
        serializer = LanguageSerializer(
            instance=saved_language, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            one_language_saved = serializer.save()
        return Response({
            "success": f'The language {one_language_saved.name} updated successfully'
        })


class GetCategoryListView(APIView):
    
    def get(self, request, format='json'):
        serializer = CategorySerializer(data=Category.objects.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=http_status.HTTP_200_OK)


class CreateCategoryView(APIView):

    def post(self, request, format='json'):
        one_category = CategorySerializer(data=request.data)
        if one_category.is_valid(raise_exception=True):
            one_category_saved = one_category.save()
        return Response({"success": f'Category {one_category_saved.name} created successfully'}, status=http_status.HTTP_201_CREATED)


class GetCategoryDetailView(APIView):

    def get(self, request, pk, format=None):
        one_category = Category.objects.filter(_id=ObjectId(pk))
        if one_category:
            serializer = CategorySerializer(data=one_category, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=404)

    def delete(self, request, pk):
        new_id = Category.objects.filter(_id=ObjectId(pk))
        new_id.delete()
        return Response({"message": f'Category with id {pk} has been deleted.'}, status=204)

    def put(self, request, pk):
        saved_language = Category.objects.filter(_id=ObjectId(pk)).first()
        data = request.data.get('one_category')
        serializer = CategorySerializer(
            instance=saved_language, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            one_category_saved = serializer.save()
        return Response({
            "success": f'The category {one_category_saved.name} updated successfully'
        })
