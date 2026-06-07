import pandas as pd
import joblib

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    mean_absolute_error,
    r2_score
)

# Load engineered dataset

df = pd.read_csv(
    "../datasets/walmart_features.csv"
)

# Features

X = df[
    [
        "Store",
        "Holiday_Flag",
        "Temperature",
        "Fuel_Price",
        "CPI",
        "Unemployment",
        "Year",
        "Month",
        "Quarter",
        "Week"
    ]
]

# Target

y = df["Weekly_Sales"]

# Split data

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Train model

model = RandomForestRegressor(
    n_estimators=200,
    random_state=42
)

model.fit(
    X_train,
    y_train
)

# Predictions

predictions = model.predict(
    X_test
)

# Metrics

mae = mean_absolute_error(
    y_test,
    predictions
)

r2 = r2_score(
    y_test,
    predictions
)

print("\nRandom Forest Results")
print("=" * 40)

print(f"MAE : {mae:,.2f}")

print(f"R2 Score : {r2:.4f}")

print("\nFeature Importance")
print("=" * 40)

importance = pd.DataFrame(
    {
        "Feature": X.columns,
        "Importance": model.feature_importances_
    }
)

importance = importance.sort_values(
    by="Importance",
    ascending=False
)

print(importance) 

joblib.dump(
    model,
    "app/ml/random_forest_model.pkl"
)

print(
    "\nModel saved successfully"
)