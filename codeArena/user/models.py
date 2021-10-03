from django.db import models
from django.db.models.fields import CharField
from django.db import transaction
from django.contrib.auth.models import (
    AbstractUser, BaseUserManager
    )

class Role(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

 
class UserManager(BaseUserManager):
    use_in_migrations = True

 
    def create_user(self, username, email, password, **extra_fields):
        """
        Creates and saves a User with the given email,and password.
        """
        if not email:
            raise ValueError('The given email must be set')
        elif not password:
            raise ValueError("the given password must be set")
        try:
            email = self.normalize_email(email)
            username = self.model.normalize_username(username)
            
            user = self.model(username=username, email=email, **extra_fields)
            user.set_password(password)
            user.save(using=self._db)    
            return user
          
        except:
            raise 
 
    # def create_user(self, email, password=None, **extra_fields):
    #     extra_fields.setdefault('is_staff', False)
    #     extra_fields.setdefault('is_superuser', False)
    #     return self._create_user(email, password, **extra_fields)
 
    # def create_superuser(self, email, password, **extra_fields):
    #     extra_fields.setdefault('is_staff', True)
    #     extra_fields.setdefault('is_superuser', True)
    #     return self._create_user(email, password=password, **extra_fields)

class User(AbstractUser):
    class UserStatus(models.TextChoices):
        ON = "Active"
        BANNED = "Banned"
        DEL = "Deleted"

    status = models.CharField(max_length=10, choices=UserStatus.choices, default=UserStatus.ON)
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    email = models.EmailField(unique=True)
    # nickname = models.CharField(max_length=70, unique=True)
    first_name = models.CharField(max_length=70, blank=True, null=True)
    last_name = models.CharField(max_length=70, blank=True, null=True)
    password = models.CharField(max_length=512)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    

    objects = UserManager()
    
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password', 'status', 'role_id']
 
    # def save(self, *args, **kwargs):
    #     super(User, self).save(*args, **kwargs)
    #     return self

    def __str__(self):
        return f'{self.pk}, {self.email}, {self.nickname}, {self.first_name}, {self.last_name} \
            {(True if self.password else False)}, {self.role_id}, {self.created_at}, {self.updated_at}, {self.status}'

    

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
    url = models.URLField()

    def __str__(self):
        return f'{self.coder_id}, {self.hyperlink}'

