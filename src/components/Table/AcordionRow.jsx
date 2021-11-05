import React from "react";
import {Accordion} from "react-bootstrap";

const Acordionrow = ({ children, eventKey }) => {
  return (
    <tr style={{ border: 0 }}>
      <td colSpan="7" style={{ padding: 0 }}>
        <Accordion.Collapse
          eventKey={eventKey}
          style={{
            overflowX: "hidden",
          }}
        >
          {children}
        </Accordion.Collapse>
      </td>
    </tr>
  );
};

export default Acordionrow;
