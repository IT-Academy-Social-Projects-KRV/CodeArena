from djongo import models


class Language(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Category(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Task(models.Model):


    class Status(models.TextChoices):
        DRAFT = "DR"
        PUBLISHED = "PB"


    _id = models.ObjectIdField()
    name = models.CharField(max_length=150, unique=True)
    description = models.TextField()
    user_id = models.UUIDField()
    unit_test = models.TextField()
    rate = models.IntegerField()
    level = models.CharField(max_length=20)        # todo: choices
    status = models.CharField(
        max_length=2,
        choices=Status.choices,
        default=Status.DRAFT
        )
    language = models.CharField(max_length=100)
    categories = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = models.DjongoManager()

    def __str__(self):
        return self.name


class CoderTask(models.Model):
    _id = models.ObjectIdField()
    coder_id = models.CharField(max_length=36, default='')
    task_id = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
    )
    solution = models.TextField()
    status = models.BooleanField()

