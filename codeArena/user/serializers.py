from django.db import models
from rest_framework import serializers
from user.models import User, Coder, Role
from django.contrib.auth.hashers import get_hasher, make_password



class UserSerializer(serializers.ModelSerializer):
    role_id = serializers.StringRelatedField()

    class Meta:
        model = User
        fields = ['id', 'email', 'status',
                  'password']
        extra_kwargs = {
                'password': {'write_only': True}
        }

# class UserRegistrationSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = User

#         fields = ['email', 'username', 'password', 'status']
#         # extra_kwargs = {
#         #         'password': {'write_only': True}
#         # }
#         # db_table = 'user_user'
    
#     def create(self, validated_data):
#         user = User(
#             email = validated_data['email'],
#             nickname = validated_data['username'],
#             role_id = validated_data['role_id'],
#         )
#         password = validated_data['password']
#         if 'password' in validated_data:
#             validated_data['password'] = make_password(validated_data['password'])

        
#         user.set_password(password)
#         user.save()
#         # return super(UserRegistrationSerializer, self).create(validated_data)




# def update(self, instance, validated_data):
#     if 'password' in validated_data:
#         validated_data['password'] = make_password(validated_data['password'])
#     return super(UserSerializer, self).update(instance, validated_data)

class SocialSerializer(serializers.Serializer):
    """
    Serializer which accepts an OAuth2 access token.
    """
    access_token = serializers.CharField(
        allow_blank=False,
        trim_whitespace=True,
    )

class CoderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coder
        fields = ['id', 'city', 'description', 'phone_number', 'level_id']


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'
        
