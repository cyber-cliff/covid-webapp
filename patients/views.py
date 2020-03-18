from django.shortcuts import render
from django.views import View
from django.views.generic import ListView
from .models import Patient, HealthFacility, Symptom

# Create your views here.
class CasesView(ListView):
    model = Patient
    template_name = 'dashboard/patients_table.html'
    context_object_name = 'patients'

    # def get(self, request):
    #     return render(request, 'dashboard/patient_table.html')

class HospitalsView(View):

    def get(self, request):
        return render(request, 'dashboard/hospitals.html')
