from django.urls import path
from .views import CasesView, HospitalsView

urlpatterns = [
    path('cases/', CasesView.as_view(), name='dashboard_cases'),
    path('hospitals/', HospitalsView.as_view(), name='dashboard_hospitals')
]