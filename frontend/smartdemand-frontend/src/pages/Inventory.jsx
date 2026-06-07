import { useEffect, useState } from "react"

import API from "../services/api"

import InventoryAnalyticsCards from "../components/InventoryAnalyticsCards"
import InventoryChart from "../charts/InventoryChart"

function Inventory() {

  const [inventoryData, setInventoryData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [analyticsData, setAnalyticsData] = useState(null)

  const [searchTerm, setSearchTerm] = useState("")

  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({
    product_name: "",
    stock_quantity: "",
    reorder_level: "",
    warehouse: "",
    unit_price: ""
  })

  const loadData = async () => {

    try {

      const inventoryResponse = await API.get("/inventory")

      setInventoryData(inventoryResponse.data)

      setFilteredData(inventoryResponse.data)

      const analyticsResponse = await API.get(
        "/inventory-analytics"
      )

      setAnalyticsData(analyticsResponse.data)

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {

    loadData()

  }, [])

  useEffect(() => {

    const filtered = inventoryData.filter((item) =>
      item.product_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )

    setFilteredData(filtered)

  }, [searchTerm, inventoryData])

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post("/inventory", {
        product_name: formData.product_name,
        stock_quantity: Number(formData.stock_quantity),
        reorder_level: Number(formData.reorder_level),
        warehouse: formData.warehouse,
        unit_price: Number(formData.unit_price)
      })

      setFormData({
        product_name: "",
        stock_quantity: "",
        reorder_level: "",
        warehouse: "",
        unit_price: ""
      })

      loadData()

    } catch (error) {

      console.error(error)

    }

  }

  const deleteItem = async (id) => {

    try {

      await API.delete(`/inventory/${id}`)

      loadData()

    } catch (error) {

      console.error(error)

    }

  }

  if (loading) {

    return (
      <div className="p-6 text-xl">
        Loading inventory analytics...
      </div>
    )

  }

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Supply Chain Operations
      </h1>

      {analyticsData && (
        <InventoryAnalyticsCards analytics={analyticsData} />
      )}

      <div className="bg-white p-5 rounded-xl shadow-md mb-6">

        <h2 className="text-xl font-bold mb-4">
          Add Inventory
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >

          <input
            type="text"
            name="product_name"
            placeholder="Product Name"
            value={formData.product_name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="stock_quantity"
            placeholder="Stock"
            value={formData.stock_quantity}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="reorder_level"
            placeholder="Reorder Level"
            value={formData.reorder_level}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="warehouse"
            placeholder="Warehouse"
            value={formData.warehouse}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="unit_price"
            placeholder="Unit Price"
            value={formData.unit_price}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded-lg"
          >
            Add Product
          </button>

        </form>

      </div>

      <div className="bg-white p-4 rounded-xl shadow-md mb-6">

        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Product
              </th>

              <th className="px-6 py-4 text-left">
                Stock
              </th>

              <th className="px-6 py-4 text-left">
                Reorder
              </th>

              <th className="px-6 py-4 text-left">
                Warehouse
              </th>

              <th className="px-6 py-4 text-left">
                Price
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredData.map((item) => (

              <tr
                key={item.id}
                className={`border-b ${
                  item.stock_status === "Low Stock"
                    ? "bg-red-50"
                    : ""
                }`}
              >

                <td className="px-6 py-4">
                  {item.product_name}
                </td>

                <td className="px-6 py-4">
                  {item.stock_quantity}
                </td>

                <td className="px-6 py-4">
                  {item.reorder_level}
                </td>

                <td className="px-6 py-4">
                  {item.warehouse}
                </td>

                <td className="px-6 py-4">
                  ₹{item.unit_price}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.stock_status === "Low Stock"
                        ? "bg-red-500"
                        : "bg-green-600"
                    }`}
                  >
                    {item.stock_status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <button
                    onClick={() =>
                      deleteItem(item.id)
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <InventoryChart data={filteredData} />

    </div>

  )

}

export default Inventory