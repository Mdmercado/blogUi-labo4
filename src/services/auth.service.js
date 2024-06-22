import axiosInstance from "../api/axiosInstance";

export const register = async (credentials) => {
  const response = await axiosInstance.post("/register", credentials);
  localStorage.setItem("authToken", response.data.token);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axiosInstance.post("/login", credentials);
  localStorage.setItem("authToken", response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
