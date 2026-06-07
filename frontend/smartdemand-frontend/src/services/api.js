import axios from "axios"

const API = axios.create({
  baseURL: "https://smartdemand-backend.onrender.com",
})

export default API