import { Button } from "@tremor/react";
const Btn = ({ text, onClick, type, color, isLoading }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      color={color}
      loading={isLoading}
      disabled={isLoading}
      loadingText={"Cargando..."}>
      {text}
    </Button>
  );
};
export default Btn;
