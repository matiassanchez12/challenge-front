import React from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import { Button, Row, Col, useAccordionButton } from "react-bootstrap";
import Axios from "axios";

const Formdelete = ({ data, setList, showMessage }) => {
  const active = useAccordionButton("1");
  const onSubmit = (values) => {
    const newData = { ...values, id: data.id, tipo: data.tipo };
    setList(newData, "delete");
    showMessage('Registro eliminado con exito!')
    Axios.delete(`https://gastos-app-back.herokuapp.com/budgest/remove/${data.id}`);
  };
  return (
    <div style={{ padding: 5 }}>
      <Formik
        initialValues={{
          concepto: data.concepto,
          monto: data.monto,
          fecha: data.fecha,
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <Row style={{ justifyContent: "center" }}>
            <Col sm={2}>
              <Input type="text" name="concepto" label="Concepto" disabled />
            </Col>
            <Col sm={2}>
              <Input type="text" name="monto" label="Monto" disabled />
            </Col>
            <Col sm={2}>
              <Input type="date" name="fecha" label="Fecha" disabled />
            </Col>
            <Col sm={2} style={{ alignSelf: "center" }}>
              <Button
                size="sm"
                type="submit"
                style={{ marginRight: 5 }}
                variant="danger"
                onClick={active}
              >
                <i class="far fa-trash-alt" style={{ marginRight: 5 }}></i>Eliminar
              </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
};

export default Formdelete;
