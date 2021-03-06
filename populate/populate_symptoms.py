import pandas as pd
import datetime
import time
import urllib, os
import json
from apscheduler.scheduler import Scheduler
import requests

# Start the scheduler
sched = Scheduler()
sched.daemonic = False
sched.start()

def job_function():
    if os.path.exists("/home/dev-hpc/Documents/covid-19/"):
        # remove existing file
        os.remove("symptoms.csv")
        # download new file
        symp = "https://docs.google.com/spreadsheets/d/1n9bYVsKAgXzqLAYgJWtawkWWWjT6Jove/export?format=csv&id=1n9bYVsKAgXzqLAYgJWtawkWWWjT6Jove&gid=1767109008"
        resp1 = requests.get(symp)
        opsymp = open('symptoms.csv', 'wb')
        opsymp.write(resp1.content)
        opsymp.close()

        # to dataframe
        df = pd.read_csv('/home/dev-hpc/Documents/covid-19/symptoms.csv')
        print(df.head(10))

        # df.to_json('temp.json', orient='split', lines=True)
        df_dicts = df.T.to_dict().values()
        result = list(map(lambda x: {'model': 'patients.patient', 'pk': '1', 'fields': x}, df_dicts))
        json_blob = json.dumps(result)
        print(json_blob)
        # json_blob.to_json('temp.json', orient='split', lines=True)
        time.sleep(3600)


    else:
        df = pd.read_csv('/home/dev-hpc/Documents/covid-19/symptoms.csv')
        print(df.head(10))
        time.sleep(3600)

# Schedules job_function to be run once each minute
sched.add_cron_job(job_function,  minute='0-59')



