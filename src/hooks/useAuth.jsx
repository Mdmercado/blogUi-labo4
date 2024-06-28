import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useLocation } from "wouter";
import { login, register, logout } from "../services/auth.service";
import { getAllUsers } from "../services/user.service";
import useStore from "../store/useStore";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const setAuthToken = useStore((state) => state.setAuthToken);
  const setUser = useStore((state) => state.setUser);
  const [, setLocation] = useLocation();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setAuthToken(data.token);
      setUser(data.user);
      queryClient.invalidateQueries("user");
      setLocation("/");
    },
    onError: (error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    },
  });
};
export const useRegister = () => {
  const queryClient = useQueryClient();
  const setAuthToken = useStore((state) => state.setAuthToken);
  const [, setLocation] = useLocation();

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuthToken(data.token);
      Swal.fire({
        title: "¡Exito!",
        text: "Se ha registrado el usuario correctamente",
        icon: "success",
        confirmButtonText: "Entendido",
      });
      setLocation("/login");
      queryClient.invalidateQueries("user");
    },
    onError: () => {
      Swal.fire({
        title: "Error!",
        text: "Ha ocurrido un error al registrar el usuario",
        icon: "error",
        confirmButtonText: "Entendido",
      });
    },
  });
};
export const useLogout = () => {
  const clearAuth = useStore((state) => state.clearAuth);

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearAuth();
      Swal.fire({
        title: "Sesión cerrada",
        text: "Has cerrado sesión correctamente",
        icon: "success",
        confirmButtonText: "Entendido",
      });
    },
    onError: () => {
      Swal.fire({
        title: "Error!",
        text: "Ha ocurrido un error al cerrar la sesión",
        icon: "error",
        confirmButtonText: "Ok",
      });
    },
  });
};

export const useFetchUsers = () => {
  const user = useStore((state) => state.user);
  const setUsers = useStore((state) => state.setUsers);
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      if (user) {
        const data = await getAllUsers();
        setUsers(data);
        return data;
      }
      return [];
    },
  });
};
