from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.database import get_db

from app.models.forecast_model import ForecastHistory

router = APIRouter()


@router.get("/forecast-history")
def get_forecast_history(
    db: Session = Depends(get_db)
):

    history = db.query(
        ForecastHistory
    ).all()

    result = []

    for item in history:

        result.append({
            "id": item.id,
            "predicted_orders": item.predicted_orders,
            "forecast_accuracy": item.forecast_accuracy,
            "demand_growth": item.demand_growth,
            "created_at": item.created_at
        })

    return result