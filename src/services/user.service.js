import axiosInstance from "../api/axiosInstance";

export const getAllUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

export const updateUserById = async (id, user) => {
  const { nameUser, username, email } = user;
  const response = await axiosInstance.put(`/users/${id}`, {
    nameUser,
    username,
    email,
  });
  return response.data;
};

export const deleteUserById = async (id) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.data;
};

export const changePassword = async (id, credentials) => {
  const { oldPassword, newPassword } = credentials;

  const response = await axiosInstance.put(`/users/${id}/change-password`, {
    oldPassword,
    newPassword,
  });
  return response.data;
};
