import axios from "axios";
import { useLocation } from "wouter";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7259/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authToken");
      const [, setLocation] = useLocation();
      setLocation("/login");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
