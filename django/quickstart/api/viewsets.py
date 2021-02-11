from rest_framework import viewsets
from quickstart.api import serializers
from quickstart import models

class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UsersSerializer
    queryset = models.Users.objects.all()