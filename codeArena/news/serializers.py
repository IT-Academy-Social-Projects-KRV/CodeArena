from rest_framework import serializers
from .models import News


class NewsListSerializer(serializers.ModelSerializer):
    """Serialize all data from News table"""

    class Meta:
        model = News
        fields = '__all__'


class CreateNewsSerializer(serializers.ModelSerializer):
    """Serialize data from front-end"""

    class Meta:
        model = News
        exclude = ['_id', 'src', 'created_at']
