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
    user_id = models.CharField(max_length=32)
    unit_test = models.FileField(max_length=500)   # todo: upload_to= ?
    rate = models.IntegerField()
    level = models.CharField(max_length=20)        # todo: choices
    status = models.CharField(max_length=20)       # todo: choices
    languages = models.ArrayReferenceField(
        to=Language,
        on_delete=models.CASCADE,
    )
    categories = models.ArrayReferenceField(
        to=Category,
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = models.DjongoManager()

    def __str__(self):
        return self.name


class CoderTask(models.Model):
    coder_id = models.CharField(max_length=36, default='')
    task_id = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
    )
    solution = models.TextField()
    status = models.BooleanField()

