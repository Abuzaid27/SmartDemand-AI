import KPIcard from "../components/KPIcard"
import SalesChart from "../charts/SalesChart"
import InventoryTable from "../components/InventoryTable"

function Dashboard() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Supply Chain Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <KPIcard
          title="Total Sales"
          value="₹12.5L"
        />

        <KPIcard
          title="Forecast Accuracy"
          value="92%"
        />

        <KPIcard
          title="Low Stock Alerts"
          value="14"
        />
      </div>

      <SalesChart />

      <InventoryTable />

    </div>
  )
}

export default Dashboard                    