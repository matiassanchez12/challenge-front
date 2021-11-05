import React from "react";
import { useAccordionButton, Button } from "react-bootstrap";

const Customtogglebutton = ({ variant, eventKey, children }) => {
  const active = useAccordionButton(eventKey);

  return (
    <Button variant={variant} size="sm" onClick={active} style={{marginRight: 5}}>
      {children}
    </Button>
  );
};

export default Customtogglebutton;
