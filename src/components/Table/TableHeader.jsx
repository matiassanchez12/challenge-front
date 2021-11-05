import { React, memo } from "react";
import { Form, Row, Col } from "react-bootstrap";

const ListHeader = ({ setFilter }) => {
  return (
    <Row style={{ marginBottom: 25, marginTop: 25, rowGap: 20 }}>
      <Col sm={7}></Col>
      <Col sm={3} >
        <Form.Select onChange={(e) => setFilter({by: 'category', value: e.target.value})}>
          <option value="">Filtrar por categoria</option>
          <option value="comida">Comida</option>
          <option value="gastos">Gastos</option>
          <option value="auto">Auto</option>
          <option value="banco">Banco</option>
        </Form.Select>
      </Col>
      <Col sm={2}>
        <Form.Select onChange={(e) => setFilter({by:'type', value:e.target.value})}>
          <option value="">Filtrar por tipo</option>
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default memo(ListHeader);
