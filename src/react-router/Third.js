import React, { Component } from "react";
import { Link } from "react-router-dom";

class Third extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
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
        <div style={{ backgroundColor: "Yellow" }}>Three {this.props.location.state.alam} </div>
      </div>
    );
  }
}

export default Third;
