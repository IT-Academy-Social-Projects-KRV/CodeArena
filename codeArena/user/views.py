from django.conf import settings
from django.contrib.auth.hashers import check_password
from rest_framework import serializers, status
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import RetrieveUpdateAPIView
from .serializers import UserSerializer, RoleSerializer
from .models import Role, User
from .serializers import UserRegistrationSerializer, UserSerializer
from rest_framework.decorators import api_view, permission_classes, schema
import jwt
from rest_framework_jwt.utils import jwt_payload_handler
from django.contrib.auth.signals import user_logged_in
from decouple import config




class CreateUserAPIView(APIView):
    # Allow any user (authenticated or not) to access this url 
    permission_classes = (AllowAny,)
    

    def post(self, request):
        user = request.data
        serializer = UserRegistrationSerializer(data=user)
        serializer.is_valid(raise_exception=True)
        if str(serializer.validated_data["role_id"]) in ["Admin", "Moderator"]: 
            content = {"You can't be admin or moderator" : "please, provide the correct role!"}
            return Response(content, status=status.HTTP_403_FORBIDDEN)
        else:
            serializer.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED) #delete on production

@api_view(['POST'])
@permission_classes([AllowAny, ])
def authenticate_user(request):
 
    try:
        email = request.data['email']
        password = request.data['password']
          
        user = User.objects.get(email=email)
       
        if user and check_password(password, user.password):
            try:
                payload = jwt_payload_handler(user)
                token = jwt.encode(payload, config('JWT_SECRET_KEY'))
                user_details = {}
                user_details['name'] = f'{user.first_name} {user.last_name}'
                user_details['token'] = token
                user_logged_in.send(sender=user.__class__,
                                    request=request, user=user)
                return Response(user_details, status=status.HTTP_200_OK)
 
            except Exception as e:
                raise e
        else:
            res = {
                'error': 'can not authenticate with the given credentials or the account has been deactivated'}
            return Response(res, status=status.HTTP_403_FORBIDDEN)
    except KeyError:
        res = {'error': 'please provide a email and a password'}
        return Response(res)



class UserRetrieveUpdateAPIView(RetrieveUpdateAPIView):

    # Allow only authenticated users to access this url
    permission_classes = (IsAuthenticated,)
    serializer_class = UserRegistrationSerializer
    
    def get(self, request, *args, **kwargs):
        # serializer to handle turning our `User` object into something that
        # can be JSONified and sent to the client.
        serializer = self.serializer_class(request.user)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        serializer_data = request.data.get('user', {})

        serializer = UserSerializer(
            request.user, data=serializer_data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)



class CreateRoleAPIView(APIView):
    
    def post(self, request):
        role = request.data
        serializer = RoleSerializer(data=role)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RolesAPIView(APIView):
    
    def get(self, request):
        roles = Role.objects.all()
        serializer = RoleSerializer(roles, many=True)
        return Response(serializer.data)


class UserListAPIView(APIView):
    
    def get(self, request):
        users = User.objects.all().order_by('id')
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class GetUserDetailView(APIView):

    def get(self, request, pk, format=None):
        user = User.objects.filter(id=pk)
        if user:
            serializer = UserSerializer(data=user, many=True)
            serializer.is_valid()
            return Response(serializer.data)
        else:
            return Response(status=404)

    def delete(self, request, pk):
        user = User.objects.filter(id=pk)
        user.delete()
        return Response({"message": f'User with id {pk} has been deleted.'}, status=204)

    def put(self, request, pk):
        user = User.objects.filter(id=pk).first()
        data = request.data.get('user')
        serializer = UserSerializer(
            instance=user, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            user_updated= serializer.save()
        return Response({
            "success": f'The user {user_updated.nickname} updated successfully'
        })