import pandas as pd
import json

data = []

df = pd.read_csv('covid_daily.csv')
for key,value in df.iterrows():
    dic = {}
    dic["model"] = "dashboard.dailycase"
    dic["pk"] = key+1
    fields = {}
    date = value.date.split('/')
    fields["date"] = f"{date[2]}-{int(date[0]):02}-{int(date[1]):02}"
    fields["confirmed"] = value.confirmed
    fields["deaths"] = value.deaths
    fields["recovered"] = value.recovered
    dic["fields"] = fields
    data.append(dic)

with open('initial_daily.json','w') as f:
    json.dump(data,f)

def pool(a):
    import random
    pool = []
    i = 0
    while i!=len(a):
        color = random.randint(1,10)
        print(color)
        if not color in pool:
            pool.append(color)
            i+=1
        else:
            print('else')
            continue
    print(pool)
pool(list(range(10)))