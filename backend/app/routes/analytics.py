from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db

from app.models.forecast_model import ForecastHistory

router = APIRouter()


@router.get("/analytics")
def get_analytics(
    db: Session = Depends(get_db)
):

    total_records = db.query(
        ForecastHistory
    ).count()

    average_prediction = db.query(
        func.avg(ForecastHistory.predicted_orders)
    ).scalar()

    max_prediction = db.query(
        func.max(ForecastHistory.predicted_orders)
    ).scalar()

    latest_record = db.query(
        ForecastHistory
    ).order_by(
        ForecastHistory.created_at.desc()
    ).first()

    return {
        "total_records": total_records,
        "average_prediction": round(average_prediction, 2) if average_prediction else 0,
        "max_prediction": max_prediction,
        "latest_forecast": latest_record.created_at if latest_record else None
    }