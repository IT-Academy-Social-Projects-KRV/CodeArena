# from django.db import models
from djongo import models

# Create your models here.
class Language(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.title
