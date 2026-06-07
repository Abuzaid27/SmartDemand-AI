from sqlalchemy import Column, Integer, Float, DateTime
from sqlalchemy.orm import declarative_base

from datetime import datetime

Base = declarative_base()


class ForecastHistory(Base):

    __tablename__ = "forecast_history"

    id = Column(Integer, primary_key=True, index=True)

    predicted_orders = Column(Float)

    forecast_accuracy = Column(Float)

    demand_growth = Column(Float)

    created_at = Column(DateTime, default=datetime.utcnow)