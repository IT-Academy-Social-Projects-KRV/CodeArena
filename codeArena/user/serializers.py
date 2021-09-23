from django.db import models
from rest_framework import serializers
from user.models import User, Coder, Role
from django.contrib.auth.hashers import get_hasher, make_password



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'email', 'nickname', 'first_name', 'last_name',
                  'password', 'role_id', 'created_at', 'updated_at', 'status']
        extra_kwargs = {
                'password': {'write_only': True}
        }

class UserRegistrationSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(
        write_only=True,
        required=True
    )

    class Meta:
        model = User

        fields = ['email', 'nickname', 'password', 'confirm_password', 'role_id', 'first_name', 'last_name']
        extra_kwargs = {
                'password': {'write_only': True}
        }
    
    def save(self):
        user = User(
            email = self.validated_data['email'],
            nickname = self.validated_data['nickname'],
            role_id = self.validated_data['role_id'],
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
        )
        password = self.validated_data['password']
        confirm_password = self.validated_data['confirm_password']

        if password != confirm_password:
            raise serializers.ValidationError({'password': 'Password must match.'})
        
        user.set_password(password)
        user.save()




def create(self, validated_data):
    if 'password' in validated_data:
        validated_data['password'] = make_password(validated_data['password'])
        print(get_hasher)
    return super(UserSerializer, self).create(validated_data)


def update(self, instance, validated_data):
    if 'password' in validated_data:
        validated_data['password'] = make_password(validated_data['password'])
    return super(UserSerializer, self).update(instance, validated_data)


class CoderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coder
        fields = ['id', 'city', 'description', 'phone_number', 'level_id']


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'
        
