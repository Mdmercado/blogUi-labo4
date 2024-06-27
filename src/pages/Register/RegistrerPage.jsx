import RegisterForm from "../../components/Auth/RegisterForm";
import FormContainer from "../../components/Common/Form";

const RegisterPage = () => {
  return (
    <FormContainer title="Registro" imageUrl="/reddit.jpg">
      <RegisterForm />
    </FormContainer>
  );
};

export default RegisterPage;
