import pandas as pd
import datetime
import time
import os, os.path
import json
from apscheduler.scheduler import Scheduler
import requests

# Start the scheduler
sched = Scheduler()
sched.daemonic = False
sched.start()

def job_function():
    path = os.path.join(os.getcwd())
    print(path)
    if os.path.exists(path):
        # remove existing file
        os.remove("hospitals.csv")
        # download new file
        hosp = "https://docs.google.com/spreadsheets/u/1/d/1_jtQIH2K_MWxZevBCJ1NGO1DY7loHv1FWWGeq-mvksc/export?format=csv&id=1_jtQIH2K_MWxZevBCJ1NGO1DY7loHv1FWWGeq-mvksc&gid=104734875"
        resp1 = requests.get(hosp)
        ophosp = open('hospitals.csv', 'wb')
        ophosp.write(resp1.content)
        ophosp.close()

        # to dataframe
        df = pd.read_csv(path+'/hospitals.csv')
        df.rename(columns={'HospitalID\nDoH Short Code': 'hospital_id', 'Hospital': 'names', 'LATITUDE': 'latitude', 'LONGITUDE': 'longitude', 'Region': 'region', 'Province': 'province', 'Address': 'address', 'Contact': 'contact', 'Type': 'hospital_type', 'Service Capability Level': 'service_level', 'Capacity': 'capacity', 'COVID Capacity\n(Y/N)': 'covid_capacity', 'Notes': 'notes'}, inplace = True)
        df['hospital_id'].fillna("0", inplace = True)
        df['latitude'].fillna("0.0", inplace = True)
        df['longitude'].fillna("0.0", inplace = True)
        df['capacity'].fillna("0", inplace = True)
        df['covid_capacity'].fillna("0", inplace = True)
        df.fillna("No Data", inplace = True)
        df.drop('HospitalID\nDoH Short Code.1', axis=1, inplace=True)
        print(df.head(5))

        # to json
        data = []

        for key,value in df.iterrows():
            dic = {}
            dic["model"] = "patients.healthfacility"
            dic["pk"] = key+1
            fields = {}
            fields["hospital_id"] = value.hospital_id
            fields["name"] = value.names
            fields["latitude"] = value.latitude
            fields["longitude"] = value.longitude
            fields["region"] = value.region
            fields["province"] = value.province
            fields["address"] = value.address
            fields["contact"] = value.contact
            fields["hospital_type"] = value.hospital_type
            fields["service_level"] = value.service_level
            fields["capacity"] = value.capacity
            fields["covid_capacity"] = value.covid_capacity
            fields["notes"] = value.notes
            dic["fields"] = fields
            data.append(dic)

            with open('hospitals.json','w') as f:
                json.dump(data,f)

        time.sleep(3600)


    else:
        hosp = "https://docs.google.com/spreadsheets/u/1/d/1_jtQIH2K_MWxZevBCJ1NGO1DY7loHv1FWWGeq-mvksc/export?format=csv&id=1_jtQIH2K_MWxZevBCJ1NGO1DY7loHv1FWWGeq-mvksc&gid=104734875"
        resp1 = requests.get(hosp)
        ophosp = open('hospitals.csv', 'wb')
        ophosp.write(resp1.content)
        ophosp.close()

# Schedules job_function to be run once each minute
sched.add_cron_job(job_function,  minute='0-59')



