function InventoryAnalyticsCards({ analytics }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">

      <div className="bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-gray-500 text-sm">
          Total Products
        </h2>

        <p className="text-2xl font-bold text-blue-700 mt-2">
          {analytics.total_products}
        </p>

      </div>

      <div className="bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-gray-500 text-sm">
          Low Stock Items
        </h2>

        <p className="text-2xl font-bold text-red-600 mt-2">
          {analytics.low_stock_items}
        </p>

      </div>

      <div className="bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-gray-500 text-sm">
          Inventory Value
        </h2>

        <p className="text-2xl font-bold text-green-700 mt-2">
          ₹{analytics.total_inventory_value}
        </p>

      </div>

      <div className="bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-gray-500 text-sm">
          Warehouses
        </h2>

        <p className="text-2xl font-bold text-purple-700 mt-2">
          {analytics.warehouse_count}
        </p>

      </div>

    </div>

  )

}

export default InventoryAnalyticsCards