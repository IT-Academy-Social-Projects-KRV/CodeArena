from rest_framework import serializers
from .models import Task, Language, Category, CoderTask
from bson.objectid import ObjectId


class ObjectIdField(serializers.Field):
    def to_representation(self, value):
        return str(value)

    def to_internal_value(self, data):
        return ObjectId(data)


class TaskListSerializer(serializers.ModelSerializer):
    """Serialize all data from Task table"""

    languages = serializers.JSONField()
    categories = serializers.JSONField()

    class Meta:
        model = Task
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class LanguageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Language
        fields = '__all__'


class CreateTaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        exclude = ['_id', 'created_at', 'updated_at']

    def validate_languages(self, value):
        """
        Checks for languages in the database.
        """

        language_list = Language.objects.values_list('name', flat=True)

        if set(value).issubset(set(language_list)):
            return value

        raise serializers.ValidationError(
            'One or more items do not exist in model Language.')

    def validate_categories(self, value):
        """
        Checks for categories in the database.
        """

        category_list = Category.objects.values_list('name', flat=True)

        if set(value).issubset(set(category_list)):
            return value

        raise serializers.ValidationError(
            'One or more items do not exist in model Category.')

    def create(self, validated_data):
        return Task.objects.create(**validated_data)


class CoderTaskListSerializer(serializers.ModelSerializer):
    """Serialize all data from CoderTask table"""

    class Meta:
        model = CoderTask
        fields = '__all__'


class CreateCoderTaskSerializer(serializers.ModelSerializer):
    solution = serializers.CharField(style={'base_template': 'textarea.html'}, allow_blank=True)

    class Meta:
        model = CoderTask
        fields = '__all__'

    def create(self, validated_data):
        return CoderTask.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.solution = validated_data.get('solution', instance.solution)
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance
