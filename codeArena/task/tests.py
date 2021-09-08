import uuid
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase
import json

from .models import CoderTask, Task, Language, Category


class CoderTaskTestCase(TestCase):
    multi_db = True
    databases = {'default', 'mongo'}
    
    
    def setUp(self):
        u1 = uuid.uuid4()
        u2 = uuid.uuid4()

        # create Tasks
        t1 = Task.objects.create(name='Task1', description='Desc1', user_id=u1)
        t2 = Task.objects.create(name='Task2', description='Desc2', user_id=u2)

        # create CoderTask relations
        c1 = CoderTask.objects.create(coder_id=u1, task_id=t1, solution='Sol1', status=0)
        c2 = CoderTask.objects.create(coder_id=u2, task_id=t1, solution='Sol2', status=1)
        c3 = CoderTask.objects.create(coder_id=u1, task_id=t2, solution='Sol3', status=0)


    def test_delete_cascade(self):
        """CoderTask rows deletes cascade with related Task rows"""

        t = Task.objects.get(name='Task1')
        t.delete()
        c = CoderTask.objects.filter(task_id=t)
        self.assertEqual(c.count(), 0)


class TaskModelTestCase(TestCase):
    multi_db = True
    databases = {'default', 'mongo'}


    def setUp(self):
        u1 = uuid.uuid4()
        t1 = Task.objects.create(name='Task1', description='Desc1.0', user_id=u1)
        

    def test_updated_at(self):
        """Updated_at is changed after editing task description"""

        t1 = Task.objects.get(name='Task1')
        before_updated = t1.updated_at
        t1.description = 'Desc1.1'
        t1.save()
        after_updated = t1.updated_at
        self.assertNotEqual(before_updated, after_updated)


    def test_created_at(self):
        """Created_at stays the same after editing task description"""

        t1 = Task.objects.get(name='Task1')
        before_updated = t1.created_at
        t1.description = 'Desc1.2'
        t1.save()
        after_updated = t1.created_at
        self.assertEqual(before_updated, after_updated)


class CreatingTaskTestCase(APITestCase):
    multi_db = True
    databases = {'default', 'mongo'}

    def setUp(self):
        self.path = '/api/task/create_task/'

        self.valid_data = {
            'name': 'task1',
            'description': 'lorem',
            'user_id': 'de305d54-75b4-431b-adb2-eb6b9e546013',
            'rate': 42,
            'level': 'lorem',
            'languages': ['a', 'b'],
            'categories': ['1', '2'],
            'status': 'DR',
            'unit_test': None
        }
        self.unvalid_data = {
            'name': 'task2',
            'description': 'lorem',
            'user_id': 'de305d54-75b4-431b-adb2-eb6b9e546013',
            'rate': 42,
            'level': 'lorem',
            'languages': ['c', 'b'],
            'categories': ['3', '2'],
            'status': '42',
            'unit_test': None
        }

        # create Languages
        l1 = Language.objects.create(name='a')
        l2 = Language.objects.create(name='b')

        # create Categories
        c1 = Category.objects.create(name='1')
        c2 = Category.objects.create(name='2')

    def test_creating_task(self):
        """
        Testing serializer validator
        """

        # vaid data
        request = self.client.post(
            path=self.path,
            data=json.dumps(self.valid_data),
            content_type='application/json'
        )

        self.assertEqual(request.status_code, status.HTTP_201_CREATED)

        # unvalid data
        request = self.client.post(
            path=self.path,
            data=json.dumps(self.unvalid_data),
            content_type='application/json'
        )

        self.assertEqual(request.status_code,
                         status.HTTP_422_UNPROCESSABLE_ENTITY)
