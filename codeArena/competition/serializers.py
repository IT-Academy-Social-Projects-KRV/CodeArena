from rest_framework import serializers
from .models import Competition


class CompetitionSerializer(serializers.ModelSerializer):
       class Meta:
        model = Competition
        fields = '__all__'


class CreateCompetitionSerializer(serializers.ModelSerializer):
        class Meta:
            model = Competition
            fields = '__all__'


        def validate(self, data):
            if data['start_time'] > data['finish_time']:
                raise serializers.ValidationError("finish must occur after start")
            return Competition.objects.create(data)
