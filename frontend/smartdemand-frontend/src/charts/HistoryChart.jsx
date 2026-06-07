import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

function HistoryChart({ data }) {

  return (

    <div className="bg-white p-5 rounded-xl shadow-md mt-6">

      <h2 className="text-xl font-bold mb-4">
        Forecast History Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="id" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="predicted_orders"
            stroke="#16a34a"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}

export default HistoryChart