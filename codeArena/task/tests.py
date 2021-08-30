import uuid
from django.test import TestCase
from .models import CoderTask, Task


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

