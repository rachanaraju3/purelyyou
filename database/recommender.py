import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

full_df = pd.read_csv('skincare_products.csv')

categories = ["cleansers", "toners", "serums", "moisturizers"]

cleanser_df = full_df[full_df['Category'] == 'cleansers']
toner_df = full_df[full_df['Category'] == 'toners']
serum_df = full_df[full_df['Category'] == 'serums']
moist_df = full_df[full_df['Category'] == 'moisturizers']

include = []
exclude = []

def add_filters():
    if skin_type and skin_type == 'Good for Dry Skin':
        include.append('Good for Dry Skin')
        exclude.append('Bad for Dry Skin')
    if skin_type and skin_type == 'Good for Oily Skin':
        include.append('Good for Oily Skin')
        exclude.append('Bad for Oily Skin')

    if acne and acne == 'severe':
        include.append('Promotes Wound Healing')
        include.append('Acne-Fighting')
    if acne and acne == 'Fungal Acne Trigger':
        exclude.append('Fungal Acne Trigger')

    if uv_protection and uv_protection == 'UV Protection':
        include.append('UV Protection')

    if parabens and parabens == 'no paraben':
        exclude.append('Paraben')
    
    if sensitivity and sensitivity == 'Sensitive Skin':
        include.append('Good for Sensitive Skin')
        exclude.append('Bad for Sensitive Skin')

    if allergies and allergies == 'Allergens':
        exclude.append('Allergens')

    if skin_goals:
        include.append(skin_goals)
        

def filter_by_feature(df, feature):
    return df[df['Features'].apply(lambda x: feature in x)]

def filter_out_features(df, features_to_exclude):
    return df[df['Features'].apply(lambda x: not any(feature in x for feature in features_to_exclude))]

def recommendation(answers, df):
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform(df["features"])

    user_vector = tfidf_vectorizer.transform([answers])

    similarities = cosine_similarity(user_vector, tfidf_matrix)

    df["score"] = similarities[0]
    recommendation = df.sort_values(by="score", ascending=False)

    return recommendation.iloc[0]



add_filters()

filter_out_clean = filter_out_features(cleanser_df, exclude)
cleanser_filtered = filter_by_feature(filter_out_clean, include)

filter_out_toner = filter_out_features(toner_df, exclude)
toner_filtered = filter_by_feature(filter_out_toner, include)

filter_out_serum = filter_out_features(serum_df, exclude)
serum_filtered = filter_by_feature(filter_out_serum, include)

filter_out_cream = filter_out_features(moist_df, exclude)
moist_filtered = filter_by_feature(filter_out_cream, include)


top_clean = recommendation(cleanser_filtered)
top_toner = recommendation(toner_filtered)
top_serum = recommendation(serum_filtered)
top_moist = recommendation(moist_filtered)

