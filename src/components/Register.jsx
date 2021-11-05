import React from "react";
import Form from "./Form/FormRegister";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100vw",
    },
  };
  const pageTransition = {
    type: "spring",
    stiffness: 50,
  };
  return (
    <Row
      style={{
        height: "100vh",
        width: "100%",
        margin: "auto",
        backgroundColor: "#100b0b",
        overflowX: 'hidden'
      }}
    >
      <Col
        sm={6}
        style={{
          backgroundImage: `url(img-register.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      ></Col>
      <Col sm={6}>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          style={{
            height: "100%",
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Registro</h3>
          <Form />
          <div style={{ marginTop: 35 }}>
            <Link
              to="/"
              style={{
                fontSize: "0.9em",
                color: "white",
                textDecoration: "none",
                outlineColor: "none",
              }}
            >
              Ya tengo mi cuenta. <b>Ingresar!</b>
            </Link>
          </div>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Register;
