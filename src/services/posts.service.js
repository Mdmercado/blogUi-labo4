import axiosInstance from "../api/axiosInstance";

export const fetchPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export const fetchPostById = async (id) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axiosInstance.post("/posts", post);
  return response.data;
};
