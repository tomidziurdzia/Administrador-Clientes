import { useParams } from "react-router-dom";

const VerCliente = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>VerCliente</h1>
    </div>
  );
};

export default VerCliente;
