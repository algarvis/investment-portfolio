from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=50)


class Asset(models.Model):
    ticker = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    asset_category = models.IntegerField()


class Tick(models.Model):
    ticker = models.ForeignKey(Asset, on_delete=models.CASCADE)
    date = models.DateField()
    close = models.DecimalField(max_digits=16, decimal_places=8)
