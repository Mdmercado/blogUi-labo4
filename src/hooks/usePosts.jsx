// hooks/usePosts.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useStore from "../store/useStore";
import { fetchPosts, createPost } from "../services/posts.service";

export const useFetchPosts = () => {
  const setPosts = useStore((state) => state.setPosts);
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const data = await fetchPosts();
      const sortedData = data.sort((a, b) => b.idPost - a.idPost);
      setPosts(sortedData);
      return sortedData;
    },
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const addPost = useStore((state) => state.addPost);
  return useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
      addPost(data);
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      }).fire({
        icon: "success",
        title: "Post creado correctamente",
      });
    },
    onError: (error) => {
      console.error("Error creating post:", error);
      Swal.fire({
        title: "Error!",
        text: "Ha ocurrido un error al crear el post",
        icon: "error",
        confirmButtonText: "Entendido",
      });
    },
  });
};
