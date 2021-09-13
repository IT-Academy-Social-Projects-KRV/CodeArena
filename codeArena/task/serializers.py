from rest_framework import serializers
from .models import Task


class TaskListSerializer(serializers.ModelSerializer):
    """Serialize all data from Task table"""

    class Meta:
        model = Task
        fields = '__all__'
