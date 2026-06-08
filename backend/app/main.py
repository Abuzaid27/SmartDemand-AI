from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.forecast import router as forecast_router
from app.routes.history import router as history_router
from app.routes.analytics import router as analytics_router
from app.routes.inventory import router as inventory_router

from app.routes.advanced_forecast import (
    router as advanced_forecast_router
)

from app.routes.upload_dataset import (
    router as upload_dataset_router
)

app = FastAPI(
    title="SmartDemand AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://smart-demand-ai-green.vercel.app",
        "https://smart-demand-n2qgl93da-abuzaid-pathan-s-projects.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(forecast_router)
app.include_router(history_router)
app.include_router(analytics_router)
app.include_router(inventory_router)
app.include_router(advanced_forecast_router)
app.include_router(upload_dataset_router)

@app.get("/")
def home():
    return {
        "message": "SmartDemand AI Backend Running"
    }