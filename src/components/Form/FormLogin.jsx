import { React, useState } from "react";
import Input from "./Input";
import { Formik, Form } from "formik";
import { Button, Alert, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";
import { SetCookie } from "../Cookies";

const Formlogin = ({ setUser }) => {
  const [invalidUser, setInvalidUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await Axios.post("https://gastos-app-server.herokuapp.com/users/login", values);

    if (res.data.message === "ok") {
      SetCookie(`${res.data.user.nombre}-${res.data.user.email}-${res.data.user.id}`);
      setUser({ data: res.data.user, active: true });
      history.push("/home");
    } else {
      setInvalidUser(true);
      setIsLoading(false);
    }
  };
  return (
    <div style={{ width: 400 }}>
      {invalidUser ? (
        <Alert variant="danger" onClose={() => setInvalidUser(false)} dismissible>
          El email o el password ingresados son incorrectos
        </Alert>
      ) : null}
      <Formik
        initialValues={{
          email: "admin@correo.com",
          password: "admin",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          email: Yup.string().required("Obligatorio"),
          password: Yup.string().required("Obligatorio"),
        })}
      >
        <Form>
          <Input type="text" label="Email" name="email" />
          <Input type="password" label="Password" name="password" />
          <div>
            <Button type="submit" style={{ width: "100%" }}>
              {isLoading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <span>
                  <i class="fas fa-sign-in-alt"></i> Ingresar
                </span>
              )}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Formlogin;
