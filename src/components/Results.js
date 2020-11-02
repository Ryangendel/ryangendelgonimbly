import React from "react";
import Modal from "./Modal";

function Results(props) {
  return (
    <div>
      <Modal solution={props.results1} />
    </div>
  );
}

export default Results;
