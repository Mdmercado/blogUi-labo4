import { Button } from "@tremor/react";
const btn = ({ text, onClick, type, color, isLoading }) => {
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
export default btn;
