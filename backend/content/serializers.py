from rest_framework import serializers
from .models import Project, Gallary

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class GallarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallary
        fields = '__all__'