import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

function InventoryChart({ data }) {

  return (

    <div className="bg-white p-5 rounded-xl shadow-md mt-6">

      <h2 className="text-xl font-bold mb-4">
        Warehouse Stock Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="product_name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="stock_quantity"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  )

}

export default InventoryChart