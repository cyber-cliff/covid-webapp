from django.urls import path
from .views import dashboard, mapview

urlpatterns = [
    path('dashboard/', dashboard, name='dashboard-home'),
    path('map/', mapview, name='dashboard-map'),
]