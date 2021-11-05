import { React } from "react";
import { RemoveCookie } from "./Cookies"

import {
  Nav as NavComp,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Nav = ({userData,setUser}) => {
  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };
  const closeSession= ()=>{
    setUser({
      data: {},
      active: false
    })
    RemoveCookie('data')
    history.push("/");
  }
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ boxShadow: "0 1px 9px 1px rgb(0 0 0 / 35%)" }}
    >
      <Container>
        <Navbar.Brand
          onClick={goHome}
          style={{ cursor: "pointer", display: "inline-block" }}
        >
          <img src="rocket2.png" alt="" width={50} height={50} />
          <span style={{ color: "white" }}> Mis gastos App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavComp
            className="me-auto"
            style={{ width: "100%", justifyContent: "flex-end" }}
          >
            <NavDropdown title={`¡Hola ${userData.nombre}!`} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={closeSession}>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </NavComp>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
