from django.conf import settings
from django.contrib.auth.hashers import check_password
from rest_framework import serializers, status
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import RetrieveUpdateAPIView
from .serializers import UserSerializer, RoleSerializer
from .models import Role, User
from .serializers import UserSerializer, RoleSerializer, SocialSerializer
from rest_framework.decorators import api_view, permission_classes, schema

# from rest_framework_jwt.utils import jwt_payload_handler
from django.contrib.auth.signals import user_logged_in
from decouple import config
from django.conf.urls.static import static

from requests.exceptions import HTTPError

from social_django.utils import psa


# class CreateUserAPIView(APIView):
#     # Allow any user (authenticated or not) to access this url 
#     permission_classes = (AllowAny,)
    

#     def post(self, request):
#         user = request.data
#         serializer = UserRegistrationSerializer(data=user)
#         serializer.is_valid(raise_exception=True)
#         if str(serializer.validated_data["role_id"]) in ["Admin", "Moderator"]: 
#             content = {"You can't be admin or moderator" : "please, provide the correct role!"}
#             return Response(content, status=status.HTTP_403_FORBIDDEN)
#         else:
#             serializer.save()
           
#         return Response(serializer.data, status=status.HTTP_201_CREATED) #delete on production



#this function is temporary and gonna be tested and might be edited
#it's gonna be used for OAuth through social media
@api_view(http_method_names=['POST'])
@permission_classes([AllowAny])
@psa()
def exchange_token(request, backend):
    
    serializer = SocialSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        
        try:
            nfe = settings.NON_FIELD_ERRORS_KEY
        except AttributeError:
            nfe = 'non_field_errors'

        try:
          
            user = request.backend.do_auth(serializer.validated_data['access_token'])
        except HTTPError as e:
          
            return Response(
                {'errors': {
                    'token': 'Invalid token',
                    'detail': str(e),
                }},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if user:
            if user.is_active:
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'token': token.key})
            else:
             
                return Response(
                    {'errors': {nfe: 'This user account is inactive'}},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        else:
           
            return Response(
                {'errors': {nfe: "Authentication Failed"}},
                status=status.HTTP_400_BAD_REQUEST,
            )



class UserRetrieveUpdateAPIView(RetrieveUpdateAPIView):

    # Allow only authenticated users to access this url
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    
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
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        user = User.objects.filter(id=pk)
        user.delete()
        return Response({"message": f'User with id {pk} has been deleted.'}, status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        user = User.objects.filter(id=pk).get()
        data = request.data.get('user')
        serializer = UserSerializer(
            instance=user, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            user_updated = serializer.save()
        return Response({
            "success": f'The user {user_updated.nickname} updated successfully'
        })

