from django.contrib import admin
from .models import Symptom, HealthFacility, Patient
# Register your models here.
admin.site.register(Symptom)
admin.site.register(HealthFacility)
admin.site.register(Patient)