from djongo import models
from django.core.validators import MinLengthValidator


class News(models.Model):
    _id = models.ObjectIdField()
    title = models.CharField(max_length=70, validators=[MinLengthValidator(50)])
    description = models.TextField()
    src = models.FileField(max_length=500) #???

    def __str__(self):
        return self.title
