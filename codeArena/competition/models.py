from djongo import models

from task.models import Task


class Competition(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=150, unique=True)
    description = models.TextField()
    language = models.CharField(max_length=30)
    company_name = models.CharField(max_length=50)
    list_of_task = models.ArrayReferenceField(
        to=Task,
        on_delete=models.CASCADE,
    )
    start_time = models.DateTimeField()
    finish_time = models.DateTimeField() 
    created_at = models.DateTimeField(editable=False)
    updated_at = models.DateTimeField()
    recruiter_id = models.UUIDField(editable=False)

    def __str__(self):
        return f'{self.name}, {self.description}, {self.start_time}, {self.finish_time}'


class CoderCompetition(models.Model):
    _id = models.ObjectIdField()
    competition_id = models.ForeignKey(
        Competition,
        on_delete=models.CASCADE,
    )
    coder_id = models.CharField(max_length=32)
    rate = models.IntegerField()

