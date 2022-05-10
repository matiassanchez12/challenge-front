import { React, useState } from "react";
import Input from "./Input";
import { Formik, Form } from "formik";
import { Button, Alert, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import Axios from "axios";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [createSuccessful, setCreateSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    const res = await Axios.post("https://gastos-app-server.herokuapp.com/users/insert", values);
    if (res.status === 200) {
      setCreateSuccessful(true);
      resetForm();
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: 400 }}>
      {createSuccessful ? (
        <Alert variant="success" onClose={() => setCreateSuccessful(false)} dismissible>
          Usuario registrado con exito. <Link to="/">Iniciar sesión!</Link>
        </Alert>
      ) : null}
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          password: "",
          repassword: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          nombre: Yup.string().required("Obligatorio"),
          email: Yup.string().required("Obligatorio").email("Ingresar Email valido"),
          password: Yup.string().required("Obligatorio"),
          repassword: Yup.string()
            .required("Obligatorio")
            .oneOf([Yup.ref("password"), null], "Ambas password deben ser iguales"),
        })}
      >
        <Form>
          <Input type="text" placeholder="Ej.: Juan Perez" label="Tu nombre*" name="nombre" />
          <Input type="text" placeholder="Ej.: juan@correo.com" label="Email*" name="email" />
          <Input type="text" placeholder="Al menos 6 caracteres" label="Password*" name="password" />
          <Input type="text" label="Confirmar password*" name="repassword" />
          <Button type="submit" style={{ display: "block", width: "100%" }}>
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <span>
                Crear cuenta <i class="fas fa-arrow-right"></i>
              </span>
            )}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormRegister;
