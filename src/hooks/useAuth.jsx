import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useLocation } from "wouter";
import { login, register } from "../services/auth.service";
import useStore from "../store/useStore";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const setAuthToken = useStore((state) => state.setAuthToken);
  const [, setLocation] = useLocation();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setAuthToken(data.token);
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
