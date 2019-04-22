#!/home/jesse/anaconda3/bin/python3

import csv

with open('hepatitis.csv', 'w', newline='') as csvfile:
	fieldnames = 	['age','steroid','bilirubin','alk_phosphate',
'sgot','albumin','protime']	
	 
	writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

	writer.writeheader()
	writer.writerow({
	'age': 78,
	'steroid': 1,
	
	'bilirubin': 0.7,
	'alk_phosphate': 96,
	'sgot': 32,
	'albumin': 4.0,
	'protime': 61
})
