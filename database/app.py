import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, request, jsonify

app = Flask(__name__)

full_df = pd.read_csv('skincare_products.csv')

categories = ["cleansers", "toners", "serums", "moisturizers"]

cleanser_df = full_df[full_df['Category'] == 'cleansers']
toner_df = full_df[full_df['Category'] == 'toners']
serum_df = full_df[full_df['Category'] == 'serums']
moist_df = full_df[full_df['Category'] == 'moisturizers']


def add_filters(skin_type, weather, skin_goals, sensitivity, acne, uv, paraben, allergies):
    include = []
    exclude = []

    if skin_type and skin_type == 'Good for Dry Skin':
        include.append('Good for Dry Skin')
        exclude.append('Bad for Dry Skin')
    elif skin_type and skin_type == 'Good for Oily Skin':
        include.append('Good for Oily Skin')
        exclude.append('Bad for Oily Skin')
    else:
        include.append('Good for Dry Skin')
        include.append('Good for Oily Skin')
        
    if sensitivity and sensitivity == 'Sensitive Skin':
        include.append('Good for Sensitive Skin')
        exclude.append('Bad for Sensitive Skin')

    if acne and acne == 'severe':
        include.append('Promotes Wound Healing')
        include.append('Acne-Fighting')
    elif acne and acne == 'moderate':
        include.append('Acne-Fighting')
    elif acne and acne == 'Fungal Acne Trigger':
        exclude.append('Fungal Acne Trigger')

    if uv and uv == 'UV Protection':
        include.append('UV Protection')

    if paraben and paraben == 'no paraben':
        exclude.append('Paraben')
    
    if allergies and allergies == 'Allergens':
        exclude.append('Allergens')

    if skin_goals and len(skin_goals) <= 2:
        include += skin_goals
    elif skin_goals and len(skin_goals) > 2:
        include.extend(skin_goals[:2])
    
    return include, exclude

def filter_by_feature(df, feature):
    return df[df['Features'].apply(lambda x: feature in x)]

def filter_out_features(df, features_to_exclude):
    return df[df['Features'].apply(lambda x: not any(feature in x for feature in features_to_exclude))]

def recommendation(answers, df):
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform(df["features"])

    user_vector = tfidf_vectorizer.transform(" ".join(answers))

    similarities = cosine_similarity(user_vector, tfidf_matrix)
    
    rec_df = df.copy()
    rec_df["score"] = similarities[0]
    recommendation = rec_df.sort_values(by="score", ascending=False)

    return recommendation.iloc[0].to_dict()

def filter_dfs(include, exclude, skin_goals):
    filter_out_clean = filter_out_features(cleanser_df, exclude)
    cleanser_filtered = filter_by_feature(filter_out_clean, include)

    filter_out_toner = filter_out_features(toner_df, exclude)
    toner_filtered = filter_by_feature(filter_out_toner, include)

    filter_out_serum = filter_out_features(serum_df, exclude)
    serum_filtered = filter_by_feature(filter_out_serum, include)

    filter_out_cream = filter_out_features(moist_df, exclude)
    moist_filtered = filter_by_feature(filter_out_cream, include)

    if len(skin_goals) > 2:
        include.extend(skin_goals[2:])

    top_clean = recommendation(include, cleanser_filtered)
    top_toner = recommendation(include, toner_filtered)
    top_serum = recommendation(include, serum_filtered)
    top_moist = recommendation(include, moist_filtered)

    return {
        "cleanser": top_clean['Product'],
        "toner": top_toner['Product'],
        "serum": top_serum['Product'],
        "moisturizer": top_moist['Product'],
    }


@app.route('/get_recommendations', methods=['POST'])
def get_recommendations():
    if request.method == 'POST':
        data = request.json  # Receive JSON data from React
        skin_type = data.get('skinType')
        weather = data.get('weather')
        skin_goals = data.get('skinGoals')
        sensitivity = data.get('sensitivity')
        acne = data.get('acne')
        uv = data.get('uv')
        paraben = data.get('paraben')
        allergies = data.get('allergies')
        
        include, exclude = add_filters(skin_type, weather, skin_goals, sensitivity, acne, uv, paraben, allergies)

        recs = filter_dfs(skin_goals, include=include, exclude=exclude, skin_goals=skin_goals)

        return jsonify(recs)

if __name__ == '__main__':
    app.run(debug=True)

        





