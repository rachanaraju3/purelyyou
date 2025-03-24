import csv
import pandas as pd
import os

def read_skincare_data(file_path, category):
    products = []
    features = []
    categories = []

    print('starting ', category)
    
    with open(file_path, 'r', encoding="utf-8") as file:
        lines = file.readlines()
        for line in lines:
            line = line.strip().strip('[],')
            
            if '", [' in line:
                product, feature_list = line.split('", [', 1)
                
                product = product.strip('["')
                
                feature_list = feature_list.strip('[]')
                feature_list = feature_list.replace("'", "").split(', ')
                
                products.append(product)
                features.append(feature_list)
                categories.append(category) 

    return pd.DataFrame({'Product': products, 'Category': categories, 'Features': features})

categories = ["cleansers", "toners", "serums", "moisturizers"]
all_data = pd.DataFrame()

for category in categories:
    file_path = f"{category}.txt"
    if os.path.exists(file_path):  
        print('adding category')
        df = read_skincare_data(file_path, category)
        all_data = pd.concat([all_data, df], ignore_index=True)

all_data.to_csv("skincare_products.csv", index=False, encoding="utf-8")
print('finished creating csv')


