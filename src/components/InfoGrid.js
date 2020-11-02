import React from "react";
import Table from 'react-bootstrap/Table';

function InfoTable() {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Valid Operations</th>
        <th>Valid Input Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>simplify</td>
        <td>2^2+2(2)</td>
      </tr>
      <tr>
        <td>factor</td>
        <td>x^2+2</td>
      </tr>
      <tr>
        <td>derive</td>
        <td>x^2+2x</td>
      </tr>
      <tr>
        <td>integrate</td>
        <td>x^2+2</td>
      </tr>
    </tbody>
  </Table>
  );
}

export default InfoTable;
