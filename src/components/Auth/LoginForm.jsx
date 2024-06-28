import { useForm } from "react-hook-form";
import { Link } from "wouter";
import { useLogin } from "../../hooks/useAuth";
import InputField from "../Common/InputField";
import Btn from "../Common/Button.jsx";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginMutation = useLogin();

  const onSubmit = (data) => {
    if (data.emailUsername.includes("@")) {
      data.email = data.emailUsername;
      data = {
        email: data.email,
        password: data.password,
      };
    } else {
      data.username = data.emailUsername;
      data = {
        username: data.username,
        password: data.password,
      };
    }
    loginMutation.mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-2">
          <InputField
            name={"emailUsername"}
            label={"Email o Nombre de Usuario"}
            type="text"
            placeholder="Email o Nombre de Usuario"
            error={errors.emailUsername}
            errorMessage={errors.emailUsername?.message}
            register={register}
          />
          <InputField
            name={"password"}
            label={"Contraseña"}
            type="password"
            placeholder="Contraseña"
            error={errors.password}
            errorMessage={errors.password?.message}
            register={register}
          />
        </div>
        <div className="flex items-center mt-4">
          <Btn
            text="Iniciar Sesión"
            type="submit"
            color="orange"
            disabled={loginMutation.isPending}
            isLoading={loginMutation.isPending}
          />
        </div>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-600">
          ¿Nuevo en el blog?{" "}
          <Link
            href="/register"
            className="text-orange-500 hover:text-orange-700">
            Registrarse
          </Link>
        </p>
      </div>

      <div className="text-center text-orange-500">
        <Link to="/">Continuar como invitado</Link>
      </div>
    </>
  );
};

export default LoginForm;
