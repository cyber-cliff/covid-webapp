from django.db import models
from dashboard.models import RegionalCase

# Choices
TRUE_FALSE_CHOICES = (
        (True, 'Yes'),
        (False, 'No')
    )

class Symptom(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        super().save(*args, **kwargs)



class HealthFacility(models.Model):
    hospital_id = models.IntegerField(blank=True)
    name = models.CharField(max_length=300)
    latitude = models.FloatField()
    longitude = models.FloatField()
    region = models.ForeignKey(RegionalCase, on_delete=models.SET_NULL, null=True)
    province = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    contact = models.CharField(max_length=300)
    hospital_type = models.CharField(max_length=200)
    SERVICE_CAPABILITY_LEVEL = [
        (1,'Level 1'),
        (2, 'Level 2'),
        (3, 'Level 3')
    ]
    service_level = models.IntegerField(choices=SERVICE_CAPABILITY_LEVEL)
    capacity = models.IntegerField()
    covid_capacity = models.BooleanField(choices=TRUE_FALSE_CHOICES)
    notes = models.TextField(max_length=300)

    def __str__(self):
        return self.name


class Patient(models.Model):
    case_number = models.CharField(max_length=10, primary_key=True)
    SEX_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female')
    ]
    sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    age = models.IntegerField()
    nationality = models.CharField(max_length=100)
    overseas_travel = models.BooleanField(choices=TRUE_FALSE_CHOICES)
    country_visited_0 = models.CharField(max_length=40, blank=True)
    country_visited_1 = models.CharField(max_length=40, blank=True)
    country_visited_2 = models.CharField(max_length=40, blank=True)
    exposure = models.CharField(max_length=100)
    exposure_link = models.ForeignKey('self',on_delete=models.SET_NULL, null=True, blank=True)
    symptoms = models.ManyToManyField(Symptom)
    onset_date = models.DateField()
    admission_date = models.DateField()
    lab_confirmation_date = models.DateField()
    admitted_to = models.ForeignKey('HealthFacility',on_delete=models.SET_NULL, null=True,blank=True)
    residence_city_mun = models.CharField(max_length=100, blank=True)
    city_mun_psgc = models.CharField(max_length=50, blank=True)
    residence_prov = models.CharField(max_length=100, blank=True)
    prov_psgc = models.CharField(max_length=50, blank=True)
    STATUS_CHOICES = [
        ('recovered', 'Recovered'),
        ('admitted', 'Admitted'),
        ('dead', 'Dead'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, blank=True)
    death_date = models.DateField(blank=True)
    death_cause = models.CharField(max_length=300, blank=True)
    remarks = models.CharField(max_length=300, blank=True)


    def __str__(self):
        return self.case_number