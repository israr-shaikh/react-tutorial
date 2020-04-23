import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route component={First} exact path="/" />
          <Route component={Second} path="/second" />
          <Route component={Third} path="/third" />
        </Switch>
      </Router>
    );
  }
}

export default App;
