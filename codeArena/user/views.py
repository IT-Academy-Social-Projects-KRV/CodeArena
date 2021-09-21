from rest_framework import serializers, status
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .serializers import UserSerializer, RoleSerializer
from .models import Role, User
from .serializers import UserRegistrationSerializer, UserSerializer


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
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        user = User.objects.filter(id=pk)
        user.delete()
        return Response({"message": f'User with id {pk} has been deleted.'}, status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        user = User.objects.filter(id=pk).first()
        data = request.data.get('user')
        serializer = UserSerializer(
            instance=user, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            user_updated = serializer.save()
        return Response({
            "success": f'The user {user_updated.nickname} updated successfully'
        })