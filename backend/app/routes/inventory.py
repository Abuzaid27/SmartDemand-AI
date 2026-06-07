from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db

from app.models.inventory_model import Inventory
from app.models.inventory_schema import InventoryCreate

router = APIRouter()


@router.post("/inventory")
def create_inventory(
    inventory: InventoryCreate,
    db: Session = Depends(get_db)
):

    new_item = Inventory(
        product_name=inventory.product_name,
        stock_quantity=inventory.stock_quantity,
        reorder_level=inventory.reorder_level,
        warehouse=inventory.warehouse,
        unit_price=inventory.unit_price
    )

    db.add(new_item)

    db.commit()

    db.refresh(new_item)

    return {
        "message": "Inventory added successfully"
    }


@router.delete("/inventory/{item_id}")
def delete_inventory(
    item_id: int,
    db: Session = Depends(get_db)
):

    item = db.query(Inventory).filter(
        Inventory.id == item_id
    ).first()

    if not item:

        return {
            "message": "Item not found"
        }

    db.delete(item)

    db.commit()

    return {
        "message": "Inventory deleted"
    }


@router.get("/inventory")
def get_inventory(
    db: Session = Depends(get_db)
):

    inventory = db.query(Inventory).all()

    result = []

    for item in inventory:

        stock_status = (
            "Low Stock"
            if item.stock_quantity < item.reorder_level
            else "Healthy"
        )

        result.append({
            "id": item.id,
            "product_name": item.product_name,
            "stock_quantity": item.stock_quantity,
            "reorder_level": item.reorder_level,
            "warehouse": item.warehouse,
            "unit_price": item.unit_price,
            "stock_status": stock_status
        })

    return result


@router.get("/inventory-analytics")
def get_inventory_analytics(
    db: Session = Depends(get_db)
):

    total_products = db.query(
        Inventory
    ).count()

    low_stock_items = db.query(
        Inventory
    ).filter(
        Inventory.stock_quantity < Inventory.reorder_level
    ).count()

    total_inventory_value = db.query(
        func.sum(
            Inventory.stock_quantity *
            Inventory.unit_price
        )
    ).scalar()

    warehouse_count = db.query(
        Inventory.warehouse
    ).distinct().count()

    return {
        "total_products": total_products,
        "low_stock_items": low_stock_items,
        "total_inventory_value": total_inventory_value or 0,
        "warehouse_count": warehouse_count
    }