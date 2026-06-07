import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const forecastData = [
  { day: "Mon", demand: 120 },
  { day: "Tue", demand: 150 },
  { day: "Wed", demand: 170 },
  { day: "Thu", demand: 140 },
  { day: "Fri", demand: 210 },
  { day: "Sat", demand: 250 },
  { day: "Sun", demand: 230 },
]

function ForecastChart() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Weekly Demand Forecast
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={forecastData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="demand"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default ForecastChart