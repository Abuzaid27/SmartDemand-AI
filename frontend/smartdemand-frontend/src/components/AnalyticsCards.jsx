function AnalyticsCards({ analytics }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">

      <div className="bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-gray-500 text-sm">
          Total Forecasts
        </h2>

        <p className="text-2xl font-bold text-green-700 mt-2">
          {analytics.total_records}
        </p>

      </div>

      <div className="bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-gray-500 text-sm">
          Average Prediction
        </h2>

        <p className="text-2xl font-bold text-blue-700 mt-2">
          {analytics.average_prediction}
        </p>

      </div>

      <div className="bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-gray-500 text-sm">
          Highest Prediction
        </h2>

        <p className="text-2xl font-bold text-red-700 mt-2">
          {analytics.max_prediction}
        </p>

      </div>

      <div className="bg-white p-5 rounded-xl shadow-md">

        <h2 className="text-gray-500 text-sm">
          Latest Forecast
        </h2>

        <p className="text-sm font-semibold text-gray-700 mt-2">
          {analytics.latest_forecast}
        </p>

      </div>

    </div>

  )

}

export default AnalyticsCards