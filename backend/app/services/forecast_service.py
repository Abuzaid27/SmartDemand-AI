import joblib
import pandas as pd

# Load trained model

model = joblib.load("app/ml/demand_forecast_model.pkl")


def predict_demand(day):

    input_data = pd.DataFrame({
        "day": [day]
    })

    prediction = model.predict(input_data)

    return float(round(prediction[0], 2))