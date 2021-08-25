from django.test import TestCase
from .models import CoderTask, Task


class CoderTaskTestCase(TestCase):
    multi_db = True
    databases = {'default', 'mongo'}

    def setUp(self):

        # create Tasks
        t1 = Task.objects.create(name='Task1', description='Desc1', user_id='1')
        t2 = Task.objects.create(name='Task2', description='Desc2', user_id='2')

        # create CoderTask relations
        c1 = CoderTask.objects.create(coder_id='1', task_id=t1, solution='Sol1', status=0)
        c2 = CoderTask.objects.create(coder_id='2', task_id=t1, solution='Sol2', status=1)
        c3 = CoderTask.objects.create(coder_id='1', task_id=t2, solution='Sol3', status=0)


    def test_delete_cascade(self):
        """CoderTask rows deletes cascade with related Task rows"""

        t = Task.objects.get(name='Task1')
        t.delete()
        c = CoderTask.objects.filter(task_id=t)
        self.assertEqual(c.count(), 0)
