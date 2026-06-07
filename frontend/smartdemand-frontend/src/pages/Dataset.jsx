import { useState } from "react"

function Dataset() {

  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {

    setFile(e.target.files[0])

  }

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Dataset Upload
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md">

        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />

        {file && (

          <p className="mt-4 text-green-700">

            Selected File:
            {" "}
            {file.name}

          </p>

        )}

      </div>

    </div>

  )

}

export default Dataset