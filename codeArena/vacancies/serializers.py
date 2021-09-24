from rest_framework import serializers
from .models import Vacancies

class VacanciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancies
        fields = '__all__'

class CreateVacanciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancies
        fields = '__all__'
    def create(self, validated_data):
            return Vacancies.objects.create(**validated_data)
