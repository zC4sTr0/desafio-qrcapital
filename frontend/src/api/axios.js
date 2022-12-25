import axios from "axios";
const BASE_URL = "http://localhost:3001";

const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
