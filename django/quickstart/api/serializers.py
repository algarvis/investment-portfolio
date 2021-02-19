from quickstart import models
from rest_framework import serializers


class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Asset
        fields = '__all__'


class TickSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tick
        fields = '__all__'


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Portfolio
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Transaction
        fields = '__all__'
