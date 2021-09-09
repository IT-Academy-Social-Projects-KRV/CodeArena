from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from .models import Task, Language, Category


class CreateTaskSerializer(serializers.ModelSerializer):
    unit_test = serializers.FileField(
        max_length=500, allow_null=True, allow_empty_file=True)

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
