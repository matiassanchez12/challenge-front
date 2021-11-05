import { React, useState } from "react";

const Resultrow = ({ list }) => {
  const calcularTotal = () => {
    let res = 0;
    if (list.lenght !== 0) {
      list.forEach((element) => {
        if (element.tipo === "ingreso") {
          res = parseInt(element.monto) + res;
        } else {
          res = res - parseInt(element.monto);
        }
      });
    }
    return res;
  };
  const total = calcularTotal();
  return (
    <tbody>
      <tr>
        <td colSpan={7} style={{ textAlign: "right" }}>
          <h4>Total gastos $: {total}</h4>
        </td>
      </tr>
    </tbody>
  );
};

export default Resultrow;
