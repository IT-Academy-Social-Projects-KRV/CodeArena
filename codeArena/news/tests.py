import json
import tempfile

from django.test import override_settings
from django.test.testcases import TestCase
from PIL import Image
from rest_framework import status
from rest_framework.test import APITestCase

from .models import News
from .serializers import CreateNewsSerializer, NewsListSerializer


class NewsImageTestCase(TestCase):
    multi_db = True
    databases = {'default', 'mongo'}

    def get_temporary_image(self, temp_file):
        """ Creating temporary image_file """
        size = (200, 200)
        color = (255, 0, 0, 0)
        image = Image.new("RGB", size, color)
        image.save(temp_file, 'jpeg')
        return temp_file

    @override_settings(MEDIA_ROOT=tempfile.gettempdir())
    def test_create_news_with_image(self):
        """ Test of creating news with image_file """
        temp_file = tempfile.NamedTemporaryFile()
        test_image = self.get_temporary_image(temp_file)
        news_with_image = News.objects.create(title="News with image was created",
                                              content="Some content", src=test_image.name)
        self.assertIsInstance(news_with_image, News)
        self.assertEqual(len(News.objects.all()), 1)


class CreateNewsApiTestCase(APITestCase):
    multi_db = True
    databases = {'default', 'mongo'}

    def setUp(self):
        """ Create news object to be used by the tests """
        self.news1 = News.objects.create(
            title='News1 testcase was tested', content='Some content1')

    def test_valid_creating_news(self):
        """ Positive Test of the CreateNewsApi """
        url = '/api/news/create_news/'
        valid_data = {"title": "News3 testcase was created",
                      "content": "Some content3"}
        response = self.client.post(url, data=json.dumps(valid_data),
                                    content_type='application/json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_unvalid_creating_news(self):
        """ Negative Test of the CreateNewsApi """
        url = '/api/news/create_news/'
        unvalid_data = {"title": "N", "content": "Some content3"}
        response = self.client.post(url, data=json.dumps(unvalid_data),
                                    content_type='application/json')
        self.assertEqual(status.HTTP_400_BAD_REQUEST, response.status_code)

    def test__str__(self):
        """Test of the News.__str__() method"""
        news_returned = str(News.objects.get(_id=self.news1._id))
        news_to_expect = 'News1 testcase was tested'
        self.assertEqual(news_returned, news_to_expect)


class NewsApiTestCase(APITestCase):
    multi_db = True
    databases = {'default', 'mongo'}

    def setUp(self):
        """ Create news objects to be used by the tests """
        self.news1 = News.objects.create(
            title='News1 testcase was tested', content='Some content1')
        self.news2 = News.objects.create(
            title='News2 testcase was tested', content='Some content2')

    def test_get_news_list(self):
        """ Test of getting news list """
        url = '/api/news/'
        response = self.client.get(url)
        serializer_data = NewsListSerializer(
            [self.news1, self.news2], many=True).data
        for date_time in serializer_data:
            date_time['created_at'] = date_time['created_at'][:-4] + \
                '000Z'  # change date into json format
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(serializer_data, response.data)

    def test_get_news_detail(self):
        """ Test of getting the news detail by id """
        url = '/api/news/' + str(self.news1._id) + '/'
        response = self.client.get(url)
        serializer_data = NewsListSerializer([self.news1], many=True).data
        for date_time in serializer_data:
            date_time['created_at'] = date_time['created_at'][:-4] + \
                '000Z'  # change date into json format
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(serializer_data, response.data)

    def test_update_news(self):
        """ Test of updating the news by id """
        updated_data = {"title": "News1 testcase was updated"}
        url = '/api/news/' + str(self.news1._id) + '/'
        response = self.client.put(url, data=json.dumps(updated_data),
                                   content_type='application/json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_delete_news(self):
        """ Test of deleting the news by id """
        url = '/api/news/' + str(self.news1._id) + '/'
        response_delete = self.client.delete(url)
        response_get_no_exist = self.client.get(url)
        self.assertEqual(status.HTTP_204_NO_CONTENT,
                         response_delete.status_code)
        self.assertEqual(status.HTTP_404_NOT_FOUND,
                         response_get_no_exist.status_code)


class NewsSerializerTestCase(TestCase):
    multi_db = True
    databases = {'default', 'mongo'}

    def setUp(self):
        """ Create news objects to be used by the tests """
        self.news1 = News.objects.create(
            title='News1 testcase was tested', content='Some content1')
        self.news2 = News.objects.create(
            title='News2 testcase was tested', content='Some content2')

    def test_list_serializer_ok(self):
        """ Test of NewsListSerializer """
        data = NewsListSerializer([self.news1, self.news2], many=True).data
        expected_data = [
            {
                "_id": str(self.news1._id),
                "title": "News1 testcase was tested",
                "content": "Some content1",
                "src": None,
                "created_at": self.news1.created_at.isoformat()[:-6] + 'Z'
            },
            {
                "_id": str(self.news2._id),
                "title": "News2 testcase was tested",
                "content": "Some content2",
                "src": None,
                "created_at": self.news2.created_at.isoformat()[:-6] + 'Z'
            }
        ]
        self.assertEqual(expected_data, data)

    def test_create_serializer_ok(self):
        """ Test of CreateNewsSerializer """
        data = CreateNewsSerializer([self.news1, self.news2], many=True).data
        expected_data = [
            {
                "title": "News1 testcase was tested",
                "content": "Some content1",
            },
            {
                "title": "News2 testcase was tested",
                "content": "Some content2",
            }
        ]
        self.assertEqual(expected_data, data)
