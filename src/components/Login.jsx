import { React } from "react";
import Form from "./Form/FormLogin";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Motion from "./MotionComponent";

const Login = ({setUser}) => {
  return (
    <Row
      style={{
        height: "100vh",
        width: "100%",
        margin: "auto",
        backgroundColor: "#100b0b",
      }}
    >
      <Col sm={6}>
        <Motion>
          <h2 style={{ marginBottom: 35 }}>Bienvenido a Mis gastos App</h2>
          <Form setUser={({data, active})=>setUser({data, active})} />
          <div style={{ marginTop: 35 }}>
            <Link
              to="/register"
              style={{
                fontSize: "0.9em",
                color: "white",
                textDecoration: "none",
                outlineColor: "none",
              }}
            >
              ¿No tenes una cuenta? <b>Registrate!</b>
            </Link>
          </div>
        </Motion>
      </Col>
      <Col
        sm={6}
        style={{
          backgroundImage: `url(img.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Col>
    </Row>
  );
};

export default Login;
