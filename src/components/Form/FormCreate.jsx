import React from "react";
import Input from "./Input";
import Select from "./Select";
import { Formik, Form } from "formik";
import { Button, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import styled from "styled-components";
import Axios from "axios";
import { GetCookie } from "../Cookies";

const Container = styled.div`
  margin-top: 21px;
  border: 1px solid #242424;
  border-radius: 5px;
  padding: 11px;
  background: #212529;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
`;

const MyForm = ({ setList, showMessage }) => {
  const sendData = async (data) => {
    const res = await Axios.post("https://gastos-app-back.herokuapp.com/budgest/insert", data);
    return res.data.insertId;
  };

  const onSubmit = (values, { resetForm }) => {
    const user = GetCookie("data");
    const data = {
      ...values,
      id_usuario: user.id_usuario,
    };
    sendData(data).then((id)=>{
      setList({ ...data, id: id }, "create");
    });
    resetForm();
    showMessage("Registro creado con exito! ");
  };

  return (
    <Container>
      <h4>Agregar gasto o ingreso</h4>
      <hr />
      <Formik
        initialValues={{
          concepto: "",
          monto: "",
          fecha: "",
          tipo: "",
          categoria: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          concepto: Yup.string().required("Obligatorio"),
          monto: Yup.number()
            .required("Obligatorio")
            .typeError("Debe ser un número"),
          fecha: Yup.date()
            .required("Obligatorio")
            .typeError("Debe ser una fecha"),
          tipo: Yup.string().required("Obligatorio"),
          categoria: Yup.string().required("Obligatorio"),
        })}
      >
        {({ resetForm }) => (
          <Form>
            <Row style={{ justifyContent: "center" }}>
              <Col sm={2}>
                <Input type="text" name="concepto" label="Concepto" />
              </Col>
              <Col sm={2}>
                <Input type="text" name="monto" label="Monto" />
              </Col>
              <Col sm={2}>
                <Select name="categoria" label="Categoria">
                  <option value="">Elegir categoria</option>
                  <option value="comida">Comida</option>
                  <option value="gastos">Gastos</option>
                  <option value="auto">Auto</option>
                  <option value="banco">Banco</option>
                </Select>
              </Col>
              <Col sm={3}>
                <Input type="date" name="fecha" label="Fecha" />
              </Col>
              <Col sm={3}>
                <Select name="tipo" label="Tipo">
                  <option value="">Seleccionar tipo</option>
                  <option value="ingreso">Ingreso</option>
                  <option value="egreso">Egreso</option>
                </Select>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Col sm={3} style={{ alignSelf: "center" }}>
                <Button
                  size="sm"
                  type="submit"
                  style={{ marginRight: 5 }}
                  variant="success"
                >
                  <i class="fas fa-check" style={{ marginRight: 5 }}></i>Agregar
                </Button>
                <Button size="sm" variant="warning" onClick={resetForm}>
                  <i class="fas fa-redo-alt" style={{ marginRight: 5 }}></i>
                  Limpiar datos
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MyForm;
