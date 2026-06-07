import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        SmartDemand AI
      </h1>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/forecast">Forecast</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
    </div>
  )
}

export default Sidebar    