import { useState } from "react";
import API from "../services/api";

function Forecast() {
  const [formData, setFormData] = useState({
    Store: 20,
    Holiday_Flag: 0,
    Temperature: 70,
    Fuel_Price: 3.2,
    CPI: 210,
    Unemployment: 7,
    Year: 2012,
    Month: 11,
    Quarter: 4,
    Week: 47,
  });

  const [prediction, setPrediction] = useState(null);
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleForecast = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await API.post(
        "/advanced-forecast",
        formData
      );

      const sales = response.data.predicted_sales;

      setPrediction(sales);

      if (sales > 2000000) {
        setRecommendation(
          "Increase inventory levels. Expected demand is significantly above average."
        );
      } else if (sales > 1200000) {
        setRecommendation(
          "Maintain current inventory levels. Demand is stable."
        );
      } else {
        setRecommendation(
          "Monitor stock carefully. Demand is below average."
        );
      }
    } catch (error) {
      console.error("Forecast Error:", error);
      alert("Unable to generate forecast.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        SmartDemand AI Forecast Engine
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Context-Aware Demand Forecasting
        </h2>

        <form
          onSubmit={handleForecast}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="number"
            name="Store"
            value={formData.Store}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Store"
          />

          <input
            type="number"
            name="Holiday_Flag"
            value={formData.Holiday_Flag}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Holiday Flag"
          />

          <input
            type="number"
            name="Temperature"
            value={formData.Temperature}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Temperature"
          />

          <input
            type="number"
            step="0.01"
            name="Fuel_Price"
            value={formData.Fuel_Price}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Fuel Price"
          />

          <input
            type="number"
            step="0.01"
            name="CPI"
            value={formData.CPI}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="CPI"
          />

          <input
            type="number"
            step="0.01"
            name="Unemployment"
            value={formData.Unemployment}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Unemployment"
          />

          <input
            type="number"
            name="Year"
            value={formData.Year}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Year"
          />

          <input
            type="number"
            name="Month"
            value={formData.Month}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Month"
          />

          <input
            type="number"
            name="Quarter"
            value={formData.Quarter}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Quarter"
          />

          <input
            type="number"
            name="Week"
            value={formData.Week}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Week"
          />

          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded-lg font-semibold"
          >
            {loading ? "Generating Forecast..." : "Predict Demand"}
          </button>
        </form>
      </div>

      {prediction !== null && (
        <div className="bg-green-50 border border-green-300 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Predicted Weekly Sales
          </h2>

          <p className="text-4xl font-bold text-gray-800">
            ₹ {prediction.toLocaleString()}
          </p>

          <p className="mt-3 text-gray-600">
            Generated using Random Forest Model (R² = 0.9604)
          </p>

          <div className="mt-6 p-4 bg-white rounded-lg border">
            <h3 className="font-bold text-lg mb-2">
              Business Recommendation
            </h3>

            <p className="text-gray-700">
              {recommendation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forecast;