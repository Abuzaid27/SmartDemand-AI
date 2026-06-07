import pandas as pd

from sklearn.linear_model import LinearRegression
import joblib

# Sample training data

data = {
    "day": [1, 2, 3, 4, 5, 6, 7],
    "demand": [120, 150, 170, 140, 210, 250, 230]
}

df = pd.DataFrame(data)

# Features and target

X = df[["day"]]
y = df["demand"]

# Train model

model = LinearRegression()

model.fit(X, y)

# Save trained model

joblib.dump(model, "app/ml/demand_forecast_model.pkl")

print("Model trained and saved successfully")