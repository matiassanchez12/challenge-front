import React from "react";
import styled from "styled-components";
import { Toast } from "react-bootstrap";

const Container = styled.div`
  position: absolute;
  right: 0;
`;

const MyToast = ({ toastActive, setToast }) => {
  const handleClose = () => {
    setToast({message: '', active: false});
  };
  return (
    <Container>
      {toastActive.active ? (
        <Toast onClose={handleClose} bg="success" delay={3000} autohide>
          <Toast.Header style={{ borderBottom: "10px" }}>
            <i class="fas fa-check"></i>
            <strong className="me-auto" style={{ marginLeft: 5 }}>
              {toastActive.message}
            </strong>
          </Toast.Header>
        </Toast>
      ) : null}
    </Container>
  );
};

export default MyToast;
