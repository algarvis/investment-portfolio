from rest_framework import viewsets
from quickstart.api import serializers
from quickstart import models


class AssetViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AssetSerializer
    queryset = models.Asset.objects.all()


class PortfolioViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PortfolioSerializer
    queryset = models.Portfolio.objects.all()


class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TransactionSerializer
    queryset = models.Transaction.objects.all()
