from quickstart import models
from rest_framework import serializers

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Users
        fields = ['name', 'email', 'password']
