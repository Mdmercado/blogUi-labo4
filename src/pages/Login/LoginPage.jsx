import LoginForm from "../../components/Auth/LoginForm";
import FormContainer from "../../components/Common/Form";

const LoginPage = () => {
  return (
    <FormContainer title="Iniciar Sesión" imageUrl="/reddit.jpg">
      <LoginForm />
    </FormContainer>
  );
};

export default LoginPage;
