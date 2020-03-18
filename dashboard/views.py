from datetime import datetime as dt
from django.shortcuts import render
from django.views import View
from django.forms.models import model_to_dict

from .models import DailyCase, RegionalCase
from patients.models import HealthFacility

# Get data from models
def get_daily():
    labels = []
    data = {}

    queryset = DailyCase.objects.all()
    confirmed = []
    dead = []
    recovered = []
    for day in queryset:
        # Format date to use the format Mon day
        date = dt.strptime(str(day.date),"%Y-%m-%d")
        labels.append(date.strftime('%b %d'))
        confirmed.append(day.confirmed)
        dead.append(day.deaths)
        recovered.append(day.recovered)
    data['confirmed'] = confirmed
    data['dead'] = dead
    data['recovered'] = recovered
    
    return {
        'labels': labels,
        'data': data
    }

def get_regional_cases():
    labels = []
    data = []

    queryset = RegionalCase.objects.all()
    for region in queryset:
        labels.append(region.region)
        data.append(region.num_cases)
    return {
        'labels': labels,
        'data': data
    }


def dashboard(request):
    # Get data for all the graphs
    context = {
        'daily_cases': get_daily(),
        'regional_cases': get_regional_cases()
    }
    return render(request,'dashboard/dashboard.html', context)

def mapview(request):
    hospitals = HealthFacility.objects.all()
    hospitals_dict = list(map(lambda x: model_to_dict(x), hospitals))
    context = {
        'hospitals': hospitals_dict
    }
    return render(request, 'dashboard/map.html', context=context)

