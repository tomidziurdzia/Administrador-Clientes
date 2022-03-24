import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setCargando(!cargando);
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteAPI();
  }, []);

  const { nombre, empresa, email, telefono, notas } = cliente;

  return Object.keys(cliente).length === 0 ? (
    <p>No hay Resultados</p>
  ) : (
    <div>
      {cargando ? (
        "cargando"
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">Ver Cliente</h1>
          <p className="mt-3">Informacion del Cliente</p>
          <p className="text-4xl text-gray-600 mt-10">
            <span className="text-gray-800 font-bold">Cliente: </span>
            {nombre}
          </p>
          <p className="text-2xl text-gray-600 mt-4">
            <span className="text-gray-800 font-bold">Empresa: </span>
            {empresa}
          </p>
          <p className="text-2xl text-gray-600 mt-4">
            <span className="text-gray-800 font-bold">Email: </span>
            {email}
          </p>
          {telefono && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 font-bold">Telefono: </span>
              {telefono}
            </p>
          )}
          {notas && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 font-bold">Notas: </span>
              {notas}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default VerCliente;
