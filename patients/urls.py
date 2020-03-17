from django.urls import path
from .views import CasesView

urlpatterns = [
    path('cases/', CasesView.as_view(), name='dashboard-cases')
]