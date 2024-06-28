import axiosInstance from "../api/axiosInstance";

export const getComments = async () => {
  const response = await axiosInstance.get("/comments");
  return response.data;
};

export const postComment = async (comment) => {
  //coment= {userId: 1, idPost: 1, content: "This is a comment"}
  const response = await axiosInstance.post("/comments", comment);
  return response.data;
};

export const deleteComment = async (id) => {
  const response = await axiosInstance.delete(`/comments/${id}`);
  return response.data;
};

export const updateComment = async (id, comment) => {
  const { content } = comment;
  const response = await axiosInstance.put(`/comments/${id}`, { content });
  return response.data;
};
