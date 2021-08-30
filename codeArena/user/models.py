from django.db import models
from django.db.models.fields import CharField
from user.enums import UserStatus

class Role(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class User(models.Model):
    email = models.EmailField()
    nickname = models.CharField(max_length=70)
    first_name = models.CharField(max_length=70)
    last_name = models.CharField(max_length=70)
    password = models.CharField(max_length=70)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=[(tag, tag.value) for tag in UserStatus])

    def __str__(self):
        return f'{self.pk}, {self.email}, {self.nickname}, {self.first_name}, {self.last_name} \
            {(True if self.password is not None else False)}, {self.role_id}, {self.created_at}, {self.updated_at}, {self.status}'


