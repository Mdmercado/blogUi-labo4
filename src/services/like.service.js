import axiosInstance from "../api/axiosInstance";

export const countLikes = async (idPost) => {
  const response = await axiosInstance.get(`/Like/${idPost}/count`);
  return response.data;
};

export const postLike = async (postId) => {
  const response = await axiosInstance.post(`/Like/${postId}/like `, {
    postId,
  });
  return response.data;
};

export const deleteLike = async (id) => {
  const response = await axiosInstance.delete(`/Like/${id}/unlike`);
  return response.data;
};
