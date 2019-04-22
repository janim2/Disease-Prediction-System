#!/home/jesse/anaconda3/bin/python3

import csv

with open('heart.csv', 'w', newline='') as csvfile:
	fieldnames = ['age', 'trestbps', 'restecg','thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
	
	writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

	writer.writeheader()
	writer.writerow({'age' : 45,
        'trestbps' :128,
        'restecg':0,
        'thalach':170,
        'exang':0,
        'oldpeak':0,
        'slope':2,
        'ca':0,
        'thal':2})

#67.0,1.0,3.0,152.0,212.0,0.0,2.0,150.0,0.0,0.8,2.0,0.0,7.0,1
