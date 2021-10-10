from rest_framework import serializers
from .models import Competition


class CompetitionSerializer(serializers.ModelSerializer):
       class Meta:
        model = Competition
        fields = '__all__'


class CreateCompetitionSerializer(serializers.ModelSerializer):
        class Meta:
            model = Competition
            fields = ('name', 'start_time', 'finish_time', 'description')

