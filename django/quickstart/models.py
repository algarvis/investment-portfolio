from django.db import models
from django.contrib.auth.models import User


class Asset(models.Model):
    ticker = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    asset_category = models.IntegerField()

    def __str__(self):
        return self.name


class Tick(models.Model):
    ticker = models.ForeignKey(Asset, on_delete=models.CASCADE)
    date = models.DateField()
    close = models.DecimalField(max_digits=16, decimal_places=8)


class Portfolio(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # Don't know if it is better to create the intermediary table manually
    assets = models.ManyToManyField(Asset)

    def __str__(self):
        return self.name


class Transaction(models.Model):

    date = models.DateTimeField()

    sold_asset = models.ForeignKey(
        Asset, on_delete=models.CASCADE, related_name="transaction_sold")
    sold_amount = models.DecimalField(max_digits=16, decimal_places=8)

    bought_asset = models.ForeignKey(
        Asset, on_delete=models.CASCADE, related_name="transaction_bought")
    bought_amount = models.DecimalField(max_digits=16, decimal_places=8)

    fee_asset = models.ForeignKey(
        Asset, on_delete=models.CASCADE, related_name="transaction_fee")
    fee_amount = models.DecimalField(max_digits=16, decimal_places=8)
