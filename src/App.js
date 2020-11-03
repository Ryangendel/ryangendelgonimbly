import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import InfoGrid from "./components/InfoGrid";
import AlertDismissible from "./components/DangerAlert";
import Modal from "./components/Modal";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

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
      allowedWords.indexOf(search.toLowerCase().replace(/\s/g, "")) >= 0 &&
      operation.replace(/\s/g, "").match("^[0-9]|x")
    ) {
      this.setState({
        inputProblem: false,
        submittable: true,
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

  resetFun = () => {
    this.setState({
      search: "",
      operation: "",
      results: "",
      submittable: false,
      inputProblem: false,
    });
  };

  render() {
    const resultsIn = this.state.results;
    return (
      <div>
        
        <Container>
        <Jumbotron style={{padding: "2% 2% .5% 2%"}} className="jtron">
          <h1>The Homework Helper</h1>
          <p>
            This app allows you to do anything from numerical calculation to
            symbolic math parsing.
          </p>
          <p>
            For example: let's find the derivative of x^2. Type 'derive' to the
            operation field and the 'x^2' expression into the expression field
            and we will return the derivative of your formula.
          </p>
        </Jumbotron>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <InfoGrid />
            </Col>
          </Row>
          {this.state.inputProblem ? <AlertDismissible /> : ""}
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <SearchForm
                search={this.state.search}
                operation={this.state.operation}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
          {this.state.results.result ? (
            <Modal reset={this.resetFun} solution={this.state.results.result} />
          ) : (
            ""
          )}
        </Container>
      </div>
    );
  }
}

export default App;
