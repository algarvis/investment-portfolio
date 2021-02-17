from django.contrib import admin
from quickstart.models import Asset, Tick


class AssetAdmin(admin.ModelAdmin):
    pass


class TickAdmin(admin.ModelAdmin):
    pass


admin.site.register(Asset, AssetAdmin)
admin.site.register(Tick, TickAdmin)
