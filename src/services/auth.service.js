import axiosInstance from "../api/axiosInstance";
import Swal from "sweetalert2";

export const register = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/register", credentials);
    return response.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Registration Failed",
      text: error.message,
    });
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);
    const { token, user } = response.data;
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    return response.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.message,
    });
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
};
