import React from "react";
import { Row, Col } from "react-bootstrap";

function SearchForm(props) {
  return (
    <div>
      <form>
        <div className="form-group">
          <label className="expression" htmlFor="search"></label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Enter Operation"
            id="search"
          />
          <label className="search" htmlFor="search"></label>
          <input
            onChange={props.handleInputChange}
            value={props.operation}
            name="operation"
            type="text"
            className="form-control"
            placeholder="Enter Expression"
            id="operation"
          />

          <Row>
            <Col md={{ span: 1, offset: 4 }}>
              <button
                onClick={props.handleFormSubmit}
                className="btn btn-primary mt-3 submitButton"
              >
                Submit
              </button>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
