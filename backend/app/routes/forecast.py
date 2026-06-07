from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.services.forecast_service import predict_demand

from app.database import get_db

from app.models.forecast_model import ForecastHistory

router = APIRouter()


@router.get("/forecast")
def get_forecast(db: Session = Depends(get_db)):

    predicted_demand = predict_demand(8)

    forecast_record = ForecastHistory(
        predicted_orders=predicted_demand,
        forecast_accuracy=92,
        demand_growth=18
    )

    db.add(forecast_record)

    db.commit()

    return {
        "forecast_accuracy": 92,
        "predicted_orders": predicted_demand,
        "demand_growth": 18
    }