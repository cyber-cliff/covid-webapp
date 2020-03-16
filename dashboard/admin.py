from django.contrib import admin
from .models import DailyCase, RegionalCase

admin.site.register(DailyCase)
admin.site.register(RegionalCase)
