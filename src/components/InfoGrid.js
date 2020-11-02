import React from "react";
import Table from 'react-bootstrap/Table';

function InfoTable() {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Valid Operations</th>
        <th>Valid Input</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Simplify</td>
        <td>2^2+2(2)</td>
      </tr>
      <tr>
        <td>Factor</td>
        <td>x^2+2</td>
      </tr>
      <tr>
        <td>Derive</td>
        <td>x^2+2x</td>
      </tr>
      <tr>
        <td>Integrate</td>
        <td>x^2+2</td>
      </tr>
    </tbody>
  </Table>
  );
}

export default InfoTable;
