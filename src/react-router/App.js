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
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle={{ color: "white" }} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: "red" }} to="/second">
                Second
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: "red" }} to="/third">
                Third
              </NavLink>
            </li>
          </ul>
        </nav>

        <Router>
          <Switch>
            <Route component={First} exact path="/" />
            <Route component={Second} exact path="/second/:username" />
            <Route component={Third} exact path="/third" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
