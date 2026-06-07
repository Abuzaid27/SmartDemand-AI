import joblib
import pandas as pd

model = joblib.load(
    "app/ml/random_forest_model.pkl"
)

def predict_sales(data):

    df = pd.DataFrame([data])

    prediction = model.predict(df)

    return float(prediction[0])