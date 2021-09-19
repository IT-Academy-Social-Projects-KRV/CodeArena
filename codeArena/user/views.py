from rest_framework import serializers, status
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, RoleSerializer
from .models import Role

class CreateUserAPIView(APIView):
    # Allow any user (authenticated or not) to access this url 
    permission_classes = (AllowAny,)
    

    def validate_role_id(self, value):
        if value in ["Moderator", "Admin"]:
            raise ValidationError("U cannot ")
    
    
    def post(self, request):
        user = request.data
        serializer = UserSerializer(data=user)
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
