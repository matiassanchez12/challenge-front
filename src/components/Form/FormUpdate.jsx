import React from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import { Button, Row, Col, useAccordionButton } from "react-bootstrap";
import * as Yup from "yup";
import Axios from "axios";
import Select from "./Select";

const MyForm = ({ data, setList, showMessage }) => {
  const active = useAccordionButton("0");
  const onSubmit = (values) => {
    const newData = { ...values, id: data.id, tipo: data.tipo };
    setList(newData, "update");
    showMessage("Registro actualizado con exito!");
    Axios.put(`http://localhost:3001/budgest/edit/${data.id}`, newData);
  };
  return (
    <div style={{ padding: 5 }}>
      <Formik
        initialValues={{
          concepto: data.concepto,
          monto: data.monto,
          fecha: data.fecha,
          categoria: data.categoria,
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
        })}
      >
        <Form>
          <Row style={{ justifyContent: "center" }}>
            <Col sm={2}>
              <Input type="text" name="concepto" label="Concepto" />
            </Col>
            <Col sm={2}>
              <Input type="text" name="monto" label="Monto" />
            </Col>
            <Col sm={2}>
              <Input type="date" name="fecha" label="Fecha" />
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
            <Col sm={2} style={{ alignSelf: "center" }}>
              <Button
                size="sm"
                type="submit"
                style={{ marginRight: 5 }}
                variant="success"
                onClick={active}
              >
                <i class="fas fa-check" style={{ marginRight: 5 }}></i>Editar
              </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
