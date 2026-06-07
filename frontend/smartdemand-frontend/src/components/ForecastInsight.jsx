function ForecastInsight() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow mt-6">

      <h2 className="text-xl font-bold mb-4">
        AI Forecast Insights
      </h2>

      <div className="space-y-3">

        <div className="bg-blue-50 p-4 rounded-xl">
          📈 Demand expected to increase by 18% this weekend.
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl">
          ⚠ High sales probability during festival season.
        </div>

        <div className="bg-red-50 p-4 rounded-xl">
          🚨 Milk inventory may run low within 3 days.
        </div>

      </div>

    </div>
  )
}

export default ForecastInsight