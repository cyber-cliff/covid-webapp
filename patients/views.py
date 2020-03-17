from django.shortcuts import render
from django.views import View
# Create your views here.
class CasesView(View):

    def get(self, request):
        return render(request, 'dashboard/patient_table.html')
