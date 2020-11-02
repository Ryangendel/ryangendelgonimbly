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
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
}

export default AlertDismissibleExample;
