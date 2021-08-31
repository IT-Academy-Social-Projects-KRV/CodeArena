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


class Level(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Coder(models.Model):
    id = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    city = models.CharField(max_length=100)
    description = models.TextField()
    phone_number = models.CharField(max_length=15)
    level_id = models.ForeignKey(Level, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.id}, {self.city}, {self.description}, {self.phone_number}, {self.level_id}'


class Link(models.Model):
    coder_id = models.ForeignKey(Coder, on_delete=models.CASCADE)
    hyperlink = models.URLField()

    def __str__(self):
        return f'{self.coder_id}, {self.hyperlink}'

