from djongo import models


class Language(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Task(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=150, unique=True)
    description = models.TextField()
    user_id = models.UUIDField()
    unit_test = models.FileField(max_length=500)   # todo: upload_to= ?
    rate = models.IntegerField()
    level = models.CharField(max_length=20)
    status = models.CharField(max_length=20)
    languages = models.ArrayReferenceField(
        to=Language,
        on_delete=models.CASCADE,
    )
    categories = models.ArrayReferenceField(
        to=Category,
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = models.DjongoManager()

    def __str__(self):
        return self.name
