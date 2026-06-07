from pydantic import BaseModel

class InventoryCreate(BaseModel):

    product_name: str

    stock_quantity: int

    reorder_level: int

    warehouse: str

    unit_price: float