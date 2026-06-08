import joblib
import pandas as pd


def predict_sales(data):

    model = joblib.load(
        "app/ml/random_forest_model.pkl"
    )

    df = pd.DataFrame([data])

    prediction = model.predict(df)

    return float(prediction[0])