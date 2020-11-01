//import SearchForm from './components/SearchForm';
import './App.css';
import React, { Component } from "react";
import SearchForm from './components/SearchForm';
// import SearchForm from "./SearchForm";
import MathResults from "./components/Results";
import API from "./utils/API";
import './App.css';

class App extends Component {
  state = {
    search: "",
    operation:"",
    results: ""
  };

  searchNewton = (search, operation) => {
    API.search(search, operation)
      .then(res => this.setState({results: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };



  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();    
    this.searchNewton(this.state.search, this.state.operation);
    this.setState({
      search: "",
      operation: ""
    })
  };

  render() {
    const isLoggedIn = this.state.results;
    return (
      <div>
        <h1>hello</h1>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {console.log("hello")}
        <div>
         {isLoggedIn ? <MathResults results1={this.state.results.result} /> : ""}.
        </div>
         {/* {this.state.results[0] ? "hello" : ""} */}
         {/* <MathResults results1={this.state.results[0].result} /> */}
      </div>
    );
  }
}

export default App;

