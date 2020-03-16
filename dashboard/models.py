from django.db import models

# Model for daily cases
class DailyCase(models.Model):
    date = models.DateField()
    confirmed = models.IntegerField()
    deaths = models.IntegerField()
    recovered = models.IntegerField()

    def __str__(self):
        return str(self.id)


class RegionalCase(models.Model):
    region = models.CharField(max_length=80)
    verbose_name = models.CharField(max_length=200)
    num_cases = models.IntegerField()
    percentage = models.FloatField()

    def __str__(self):
        return str(self.region)
