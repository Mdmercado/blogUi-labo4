import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "wouter";
import { useRegister } from "../../hooks/useAuth";
import InputField from "../Common/InputField";
import Button from "../Common/Button";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerMutation = useRegister();

  const onSubmit = (data) => {
    const { fullname, username, email, password, confirmPassword, birthdate } =
      data;
    if (password === confirmPassword) {
      registerMutation.mutate({
        nameUser: fullname,
        username: username,
        email: email,
        passwordUser: password,
        birthdate: birthdate,
      });
    } else {
      Swal.fire("ATENCION - ERROR", "Las contraseñas no coinciden", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
      flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 w-full max-w-md mx-auto
      ">
      <InputField
        type="text"
        label="Nombre completo"
        name="fullname"
        placeholder={"Nombre y Apellido"}
        error={errors.fullname}
        errorMessage={errors.fullname?.message}
        register={register}
      />
      <InputField
        type="text"
        label="Nombre de usuario"
        name="username"
        placeholder={"Nombre de usuario"}
        error={errors.username}
        errorMessage={errors.username?.message}
        register={register}
      />
      <InputField
        type="email"
        label="Email"
        name="email"
        placeholder={"Email"}
        error={errors.email}
        errorMessage={errors.email?.message}
        register={register}
      />
      <InputField
        type="password"
        label="Contraseña"
        name="password"
        placeholder={"Contraseña"}
        error={errors.password}
        errorMessage={errors.password?.message}
        register={register}
      />
      <InputField
        type="password"
        label="Confirmar contraseña"
        name="confirmPassword"
        placeholder={"Confirmar contraseña"}
        error={errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
        register={register}
      />
      <InputField
        type="date"
        label="Fecha de nacimiento"
        name="birthdate"
        placeholder={"Fecha de nacimiento"}
        error={errors.birthdate}
        errorMessage={errors.birthdate?.message}
        register={register}
      />
      <div
        className=" w-full
        flex items-center mt-4 justify-between
        md:flex-col
      ">
        <Button
          text="Registrarse"
          type="submit"
          color="orange"
          disabled={registerMutation.isPending}
          isLoading={registerMutation.isPending}
        />
        <div className=" text-orange-500">
          <Link to="/">Continuar como invitado</Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
