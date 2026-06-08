from fastapi import APIRouter, UploadFile, File, HTTPException
import pandas as pd
import os
import joblib

from sklearn.ensemble import RandomForestRegressor

router = APIRouter()

UPLOAD_DIR = "data"

os.makedirs(UPLOAD_DIR, exist_ok=True)

REQUIRED_COLUMNS = [
    "Store",
    "Holiday_Flag",
    "Temperature",
    "Fuel_Price",
    "CPI",
    "Unemployment",
    "Year",
    "Month",
    "Quarter",
    "Week",
    "Weekly_Sales"
]


@router.post("/upload-dataset")
async def upload_dataset(
    file: UploadFile = File(...)
):

    filepath = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(filepath, "wb") as buffer:
        buffer.write(await file.read())

    df = pd.read_csv(filepath)

    missing_columns = [
        col
        for col in REQUIRED_COLUMNS
        if col not in df.columns
    ]

    if missing_columns:
        raise HTTPException(
            status_code=400,
            detail=f"Missing columns: {missing_columns}"
        )

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

    y = df["Weekly_Sales"]

    model = RandomForestRegressor(
        n_estimators=200,
        random_state=42
    )

    model.fit(
        X,
        y
    )

    joblib.dump(
        model,
        "app/ml/random_forest_model.pkl"
    )

    return {
        "message": "Dataset uploaded and model retrained successfully",
        "rows": len(df)
    }