import React from "react";

function SearchForm(props) {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="search">Expression:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Enter Expression"
            id="search"
          />
          <label htmlFor="search">Operation:</label>
          <input
            onChange={props.handleInputChange}
            value={props.operation}
            name="operation"
            type="text"
            className="form-control"
            placeholder="Enter Operation"
            id="operation"
          />
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-primary mt-3"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
