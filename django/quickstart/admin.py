from django.contrib import admin
from quickstart import models


class AssetAdmin(admin.ModelAdmin):
    pass


class TickAdmin(admin.ModelAdmin):
    pass


class PortfolioAdmin(admin.ModelAdmin):
    pass


class TransactionAdmin(admin.ModelAdmin):
    pass


admin.site.register(models.Asset, AssetAdmin)
admin.site.register(models.Tick, TickAdmin)
admin.site.register(models.Portfolio, PortfolioAdmin)
admin.site.register(models.Transaction, TransactionAdmin)
