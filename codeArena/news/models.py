from djongo import models
from django.core.validators import MinLengthValidator


class News(models.Model):
    _id = models.ObjectIdField()
    title = models.CharField(max_length=70, validators=[MinLengthValidator(20)])
    content = models.TextField()
    src = models.ImageField(upload_to='news_images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
