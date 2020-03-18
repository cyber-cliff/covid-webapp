import os
import sys
from pathlib import Path
import pandas as pd
from datetime import datetime as dt
import django
from django.conf import settings
from django.db import models

PROJECT_ROOT = Path(__file__).parent

# add project root to sys path
sys.path.append(str(PROJECT_ROOT))

# set up the Django enviroment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "covid.settings")
django.setup()

from dashboard.models import DailyCase, RegionalCase
from patients.models import Patient, HealthFacility, Symptom
from django.forms.models import model_to_dict


# Get HealthFacility and Symptom qsets because Patient depends on them
qset_h = HealthFacility.objects.all()
qset_s = Symptom.objects.all()
df = pd.read_csv('populate/covid_cases.csv')
print(df.head())

def symptoms(p,s):
    symps = s.split()
    # Get id of each symps from qset_s
    for item in symps:
        obj, created = Symptom.objects.get_or_create(
            name = item.lower()
        )
        p.symptoms.add(obj)

def date_helper(month,day):
    date = str(month) + '/' + str(day) + '/2020'
    try:
        final = dt.strptime(date, '%m/%d/%Y')
    except ValueError:
        return None
    return final


def hospital(s):
    try:
        h = qset_h.filter(hospital_id=int(s)).first()
    except:
        return None
    return h

def overseas(s):
    if s.lower() == 'yes':
        return True
    elif s.lower() == 'no':
        return False
    else:
        return None

# Start making the object
for index, item in df.iterrows():
    print(index)
    p = Patient(
        case_number = item['Case #'],
        sex = item['Sex'],
        age = item['Age'],
        nationality = item['Nationality'],
        overseas_travel = overseas(item['OverseasTravelHistory']),
        country_visited_0 = item['Country1Visited'],
        country_visited_1 = item['Country2Visited'],
        country_visited_2 = '',
        exposure = item['Exposure'],
        # exposure_link = '',
        # symptoms = symptoms(item['Symptoms']),
        onset_date = date_helper(item['OnsetMonth'],item['OnsetDate']),
        admission_date = date_helper(item['AdmissionMonth'],item['AdmissionDate']),
        lab_confirmation_date = date_helper(item['LabConfirmMonth'],item['LabConfirmDate']),
        admitted_to = hospital(item['HospitalID']),
        residence_city_mun = item['ResidenceCityMun'],
        city_mun_psgc = item['PSGC_MUNI'],
        residence_prov = item['ResidenceProv'],
        prov_psgc = item['PSGC_PROV'],
        status = item['Status'],
        death_date = date_helper(item['DeathMonth'],item['DeathDate']),
        death_cause = item['DeathCause'],
        remarks = item['Remarks']

    )
    p.save()
    symptoms(p,item['Symptoms'])











# print(Patient.objects.count())
# qset = Patient.objects.all().order_by('case_number')
# output = []
# for patient in qset:
    # print(patient,patient.exposure, patient.exposure_link.all(), patient.symptoms.all())
    # print(patient.admitted_to)
#     obj = model_to_dict(patient)
#     exp_link = list(map(lambda x: x.case_number, obj['exposure_link']))
#     symptoms = list(map(lambda x: x.name, obj['symptoms']))
#     obj['exposure_link'] = exp_link
#     obj['symptoms'] = symptoms
#     output.append(obj)
# hospitals = HealthFacility.objects.all()
# print(list(map(lambda x: model_to_dict(x), hospitals)))
# qset = Patient.objects.all().order_by('case_number')
# output = []
# dict_output = {}
# for patient in qset:
    # print(patient,patient.exposure, patient.exposure_link.all(), patient.symptoms.all())
    # obj = model_to_dict(patient)
    # exp_link = list(map(lambda x: x.case_number, obj['exposure_link']))
    # symptoms = list(map(lambda x: x.name, obj['symptoms']))
    # obj['exposure_link'] = exp_link
    # obj['symptoms'] = symptoms
    # output.append(obj)
    # # Add transmission fielf to obj for dict_output
    # if obj['country_visited_0'] == '' or obj['country_visited_0'] == 'None':
    #     obj['transmission'] == 'Local'
    # else:
    #     obj['transmission'] = 'Imported'
    # dict_output[patient.case_number] = obj
    # print(patient.healthfacility_set)

# h = HealthFacility.objects.all()
# y = h[0]
# print(y.patient_set.all())