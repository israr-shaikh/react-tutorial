import React, { Component } from "react";
import { Link } from "react-router-dom";

class First extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/second">
                Second
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/third">
                Third
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ backgroundColor: "Blue" }}>First</div>
      </div>
    );
  }
}

export default First;
