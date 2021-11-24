from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from bson.objectid import ObjectId

from .models import News
from .serializers import NewsListSerializer, CreateNewsSerializer
from .forms import NewsForm


class NewsView(APIView):

    def get(self, request):
        news = News.objects.all()
        serializer = NewsListSerializer(news, many=True)
        return Response(serializer.data)


class GetNewsDetailView(APIView):

    def get(self, request, pk, format=None):
        one_news = News.objects.filter(_id=ObjectId(pk))
        if one_news:
            serializer = NewsListSerializer(data=one_news, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        new_id = News.objects.filter(_id=ObjectId(pk))
        new_id.delete()
        return Response({"message": f'Article with id {pk} has been deleted.'}, status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        saved_news = News.objects.filter(_id=ObjectId(pk)).first()
        serializer = CreateNewsSerializer(instance=saved_news, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            one_news_saved = serializer.save()
        return Response({
            "success": f'The news {one_news_saved.title} updated successfully'
        })


class CreateNewsView(APIView):

    def post(self, request, format='json'):
        one_news = CreateNewsSerializer(data=request.data)
        if one_news.is_valid(raise_exception=True):
            one_news_saved = one_news.save()
        return Response({"success": f'News {one_news_saved.title} created successfully'})


def add_news(request):
    """Process images uploaded by users"""
    if request.method == 'POST':
        form = NewsForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            # Get the current instance object to display in the template
            img_obj = form.instance
            return render(request, 'index.html', {'form': form, 'img_obj': img_obj})
    else:
        form = NewsForm()
    return render(request, 'index.html', {'form': form})
