import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    window.moment = moment;
  }
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
