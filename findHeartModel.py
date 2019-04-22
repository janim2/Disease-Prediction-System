import sys
import json

from ludwig import LudwigModel
import pandas as pd

if len(sys.argv) == 2:
	# load the csv file
	csv_file = pd.read_csv(sys.argv[1])

	model = LudwigModel.load("/home/jesse/Documents/Machine Learning/Disease Prediction System/HeartDisease/results/_run_0/model")
	prediit = model.predict(csv_file)

	# convert prediit to json file
	prediit.to_json(r'./prediit.json')

	with open('prediit.json', 'r') as json_file:
		content = json_file.read()
		content_dict = json.loads(content)
		print('--------------------------------------------------')
		target_prediction = content_dict['target_predictions']
		t_value = target_prediction['0']
		print(t_value)

		# probalities
		target_probabilities = content_dict['target_probabilities']
		t__value = target_probabilities['0']
		print(t__value)
else:
	print('usage: {0} <csv-file>'.format(sys.argv[0]))
