import axios from "axios";

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
      console.log("No autorizado, redirigiendo al login");
      window.location.href = "/login"; // reemplazar por wouter
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
