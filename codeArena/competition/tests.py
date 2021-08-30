from django.test import TestCase
from .models import Competition, CoderCompetition
from task.models import Task

from datetime import datetime, timedelta
from pytz import timezone


class CompetitionTestCase(TestCase):
    multi_db = True
    databases = {'default', 'mongo'}

    def setUp(self):
        tz = timezone('Europe/Kiev')
        datetime_now = datetime.now(tz=tz)
        
        # create Tasks
        t1 = Task.objects.create(name='Task1', description='Desc1', user_id='1')
        t2 = Task.objects.create(name='Task2', description='Desc2', user_id='2')
        t3 = Task.objects.create(name='Task3', description='Desc3', user_id='1')

        # create Competitions
        c1 = Competition.objects.create(
            name='Comp1',
            description='Desc1',
            start_time=datetime_now + timedelta(days=3),
            finish_time=datetime_now + timedelta(days=4),
            created_at=datetime_now,
            updated_at=datetime_now + timedelta(days=2)
        )
        c1.list_of_task.add(t1, t2)
        c2 = Competition.objects.create(
            name='Comp2',
            description='Desc2',
            start_time=datetime_now + timedelta(days=4),
            finish_time=datetime_now + timedelta(days=6),
            created_at=datetime_now,
            updated_at=datetime_now + timedelta(days=1)
        )
        c2.list_of_task.add(t2, t3)

    def test_count_competitions(self):
        """Count of Competition objects should be 2."""

        num = Competition.objects.all().count()
        self.assertEqual(num, 2)
    
    def test_delete_cascade(self):
        """lisk_of_task items deletes cascade with related Task objects."""

        t1 = Task.objects.get(name='Task1')
        t1.delete()
        c1 = Competition.objects.filter(list_of_task=t1).count()
        self.assertEqual(c1, 0)

        t2 = Task.objects.get(name='Task2')
        c2 = Competition.objects.filter(list_of_task=t2).count()
        self.assertEqual(c2, 1)

    def test_time_goes_consistently(self):
        """
        The sequence of time fields should be: created_at, start_time,
        finish_time.
        """

        objects = Competition.objects.all()
        for obj in objects:
            self.assertTrue(
                obj.created_at < obj.start_time <
                obj.finish_time
            )


class CoderCompetitionTestCase(TestCase):
    multi_db = True
    databases = {'default', 'mongo'}

    def setUp(self):
        
        # create Competitions
        c1 = Competition.objects.create(name='Comp1', description='Desc1')
        c2 = Competition.objects.create(name='Comp2', description='Desc2')

        # create CoderCompetitions relations
        cc1 = CoderCompetition.objects.create(
            competition_id=c1,
            coder_id='ef5ef134-9aef-4e8e-8d23-628e74e3b6c4',
            rate=10
        )
        cc2 = CoderCompetition.objects.create(
            competition_id=c2,
            coder_id='b6f6a506-5473-4041-b46a-f24e2e49ca59',
            rate=5
        )
    
    def test_count_coder_competitions(self):
        """Count of CoderCompetition objects should be 2."""

        num = CoderCompetition.objects.all().count()
        self.assertEqual(num, 2)
    
    def test_delete_cascade(self):
        """
        CoderCompetition objects deletes cascade with related Competition
        objects.
        """

        c1 = Competition.objects.get(name='Comp1')
        c1.delete()
        cc1 = CoderCompetition.objects.filter(competition_id=c1).count()
        self.assertEqual(cc1, 0)
