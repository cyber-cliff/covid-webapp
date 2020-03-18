from django.shortcuts import render
from django.forms.models import model_to_dict
from django.views import View
from django.views.generic import ListView
from .models import Patient, HealthFacility, Symptom

# Create your views here.
class CasesView(View):
    # model = Patient
    # template_name = 'dashboard/patients_table.html'
    # context_object_name = 'patients'
    def serialize_model(self):
        qset = Patient.objects.all().order_by('case_number')
        output = []
        dict_output = {}
        for patient in qset:
            # print(patient,patient.exposure, patient.exposure_link.all(), patient.symptoms.all())
            obj = model_to_dict(patient)
            exp_link = list(map(lambda x: x.case_number, obj['exposure_link']))
            symptoms = list(map(lambda x: x.name, obj['symptoms']))
            obj['exposure_link'] = exp_link
            obj['symptoms'] = symptoms
            output.append(obj)

            # Add transmission fielf to obj for dict_output
            if obj['country_visited_0'] == '' or obj['country_visited_0'] == 'None':
                obj['transmission'] = 'Local'
            else:
                obj['transmission'] = 'Imported'
            dict_output[patient.case_number] = obj
        return {
            'output': output,
            'dict_output': dict_output
        }

    def get(self, request):
        context = {
            'patients': self.serialize_model()
        }
        return render(request, 'dashboard/patients_table.html', context=context)

class HospitalsView(View):

    def get(self, request):
        return render(request, 'dashboard/hospitals.html')
