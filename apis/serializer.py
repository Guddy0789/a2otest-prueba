from rest_framework import serializers
from .models import Exercise1
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=Exercise1
        fields = '__all__'