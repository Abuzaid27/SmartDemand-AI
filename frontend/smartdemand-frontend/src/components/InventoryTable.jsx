const inventoryData = [
  {
    product: "Milk",
    stock: 12,
    status: "Low",
  },
  {
    product: "Rice",
    stock: 150,
    status: "Healthy",
  },
  {
    product: "Sugar",
    stock: 8,
    status: "Critical",
  },
]

function InventoryTable() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow mt-6">

      <h2 className="text-xl font-bold mb-4">
        Inventory Alerts
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">Product</th>
            <th className="pb-2">Stock</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {inventoryData.map((item, index) => (
            <tr
              key={index}
              className="border-b"
            >
              <td className="py-3">
                {item.product}
              </td>

              <td>
                {item.stock}
              </td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm
                  ${
                    item.status === "Healthy"
                      ? "bg-green-500"
                      : item.status === "Low"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default InventoryTable