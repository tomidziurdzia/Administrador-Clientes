import React from "react";
import { Formik, Form, Field } from "formik";

const Formulario = () => {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl text-center">
        Agregar Cliente
      </h1>
      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          notas: "",
        }}
      >
        {() => (
          <Form className="mt-10 ">
            <div className="mb-4">
              <label className="text-gray-800" htmlfor="nombre">
                Nombre:
              </label>
              <Field
                id="nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del Cliente"
                name="nombre"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlfor="empresa">
                Empresa:
              </label>
              <Field
                id="empresa"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Empresa del Cliente"
                name="empresa"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlfor="email">
                Email:
              </label>
              <Field
                id="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Email del Cliente"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlfor="telefono">
                Telefono:
              </label>
              <Field
                id="telefono"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Telefono del Cliente"
                name="telefono"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlfor="notas">
                Notas:
              </label>
              <Field
                as="textarea"
                id="notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                placeholder="Notas del Cliente"
                name="cliente"
              />
            </div>
            <input
              type="submit"
              value="Agregar Cliente"
              className="mt-5 w-full bg-blue-800 p-3 text-white text-lg font-bold rounded-md"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
