from app.database import engine

from app.models.forecast_model import Base as ForecastBase
from app.models.inventory_model import Base as InventoryBase

ForecastBase.metadata.create_all(bind=engine)

InventoryBase.metadata.create_all(bind=engine)

print("Tables created successfully")