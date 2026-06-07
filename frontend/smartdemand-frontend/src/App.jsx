import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dataset from "./pages/Dataset"
import Forecast from "./pages/Forecast"
import Inventory from "./pages/Inventory"

function App() {

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gray-100">

        <nav className="bg-green-700 text-white p-4 flex gap-6">

          <Link to="/">
            Forecast Dashboard
          </Link>

          <Link to="/inventory">
            Operations Dashboard
          </Link>

          <Link to="/dataset">
            Dataset Upload
          </Link>

        </nav>

        <Routes>

          <Route
            path="/"
            element={<Forecast />}
          />

          <Route
            path="/inventory"
            element={<Inventory />}
          />
          
          <Route
            path="/dataset"
            element={<Dataset />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  )

}

export default App