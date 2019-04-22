# import json
from ludwig import LudwigModel
import pandas as pd

# load the csv file
csv_file = pd.read_csv('out.csv')

model = LudwigModel.load("/home/jesse/Documents/Machine Learning/Disease Prediction System/Hepatitis/results/_run_4/model")
predict = model.predict(csv_file)

# convert prediit to json file
predict.to_json(r'./prediit.json')
