import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import MathResults from "./components/Results";
import API from "./utils/API";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoGrid from "./components/InfoGrid";
import AlertDismissibleExample from "./components/DangerAlert";


class App extends Component {
  state = {
    search: "",
    operation: "",
    results: "",
    submittable: false,
    inputProblem: false,
  };

  searchNewton = (search, operation) => {
    API.search(search, operation)
      .then((res) =>
        this.setState({
          results: res.data,
          search: "",
          operation: "",
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  validData = (search, operation) => {
    const allowedWords = ["simplify", "factor", "derive", "integrate"];
    if (
      allowedWords.indexOf(search.toLowerCase()) >= 0 &&
      operation.match("^[0-9]|x")
    ) {
      this.setState({
        inputProblem: false,
        submittable: true
      });
    } else
      this.setState({
        inputProblem: true,
        results: "",
        search: "",
        operation: "",
      });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    await this.validData(this.state.search, this.state.operation);
    this.state.submittable
      ? this.searchNewton(this.state.search, this.state.operation)
      : this.setState({
          search: "",
          operation: "",
        });
  };

  render() {
    const resultsIn = this.state.results;
    return (
      <div>
        <h1>hello</h1>
        <InfoGrid />
        <SearchForm
          search={this.state.search}
          operation={this.state.operation}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div>
          {resultsIn ? (
            <MathResults results1={this.state.results.result} />
          ) : (
            ""
          )}
        </div>
        {this.state.inputProblem? <AlertDismissibleExample />:""}
      </div>
    );
  }
}

export default App;
