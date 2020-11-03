import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger">
        <Alert.Heading>
          Oh snap! There is an error, make sure to enter a valid Expression and
          Operation
        </Alert.Heading>
      </Alert>
    );
  }
}

export default AlertDismissibleExample;
