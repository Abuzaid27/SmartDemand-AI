import { useState } from "react"
import API from "../services/api"

function Dataset() {

  const [file, setFile] = useState(null)

  const handleFileChange = async (e) => {

  const selectedFile = e.target.files[0]

  setFile(selectedFile)

  const formData = new FormData()

  formData.append(
    "file",
    selectedFile
  )

  try {

    const response =
      await API.post(
        "/upload-dataset",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data"
          }
        }
      )

    alert(
      response.data.message
    )

    console.log(
      response.data
    )

  } catch (error) {

    console.error(error)

    alert(
      "Dataset upload failed"
    )

  }

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
