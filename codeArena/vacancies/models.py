from codeArena.user.models import Coder
from django.db import models
from django.db.models.fields import CharField, DateField, FloatField, IntegerField, EmailField, DateTimeField, ImageField
from user.enums import UserStatus
from django.utils.timezone import now



class Vacancies(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    recruiter_id = models.IntegerField(max_length=250)
    company = models.CharField(max_length=20)
    created_at = models.DateTimeField(default=now, editable=False)
    updated_at = models.DateTimeField(null=True, blank=True)
    language_id = models.IntegerField(max_length=20)
    company_logo = models.ImageField(Null=True)

    def __str__(self):
        return f'{self.name}, {self.description}, {self.recruiter_id}, {self.company}, {self.created_at}, {self.updated_at}, {self.language_id}, {self.company_logo}'




class Coder_vacancies(models.Model):
    vacancies_id = models.ForeignKey(Vacancies, on_delete=models.CASCADE)
    coder_id = models.ForeignKey(Coder, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.vacancies_id}, {self.coder_id}'
