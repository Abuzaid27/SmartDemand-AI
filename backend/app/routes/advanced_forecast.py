from fastapi import APIRouter

from pydantic import BaseModel

from app.services.random_forest_service import (
    predict_sales
)

router = APIRouter()


class ForecastRequest(BaseModel):

    Store: int

    Holiday_Flag: int

    Temperature: float

    Fuel_Price: float

    CPI: float

    Unemployment: float

    Year: int

    Month: int

    Quarter: int

    Week: int


@router.post("/advanced-forecast")
def advanced_forecast(
    request: ForecastRequest
):

    prediction = predict_sales(
        request.dict()
    )

    return {
        "predicted_sales": round(
            prediction,
            2
        )
    }