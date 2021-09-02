from user.models import User
from django.db import models


class Vacancies(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    recruiter_id = models.ForeignKey(User, on_delete=models.CASCADE)
    company = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at =  models.DateTimeField(auto_now=True)
    language_id = models.IntegerField()
    company_logo = models.ImageField(blank=True, null=True)
    coder_id = models.ManyToManyField(User, related_name="coder")

    def __str__(self):
        return f'{self.name}, {self.description}, {self.recruiter_id}, {self.company}, \
            {self.created_at}, {self.updated_at}, {self.language_id}, {self.company_logo}, {self.coder_id}'



