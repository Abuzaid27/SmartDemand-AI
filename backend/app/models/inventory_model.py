from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Inventory(Base):

    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)

    product_name = Column(String, nullable=False)

    stock_quantity = Column(Integer, nullable=False)

    reorder_level = Column(Integer, nullable=False)

    warehouse = Column(String, nullable=False)

    unit_price = Column(Float, nullable=False)