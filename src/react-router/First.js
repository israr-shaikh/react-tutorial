import React, { Component } from "react";
import { Link, NavLink  } from "react-router-dom";

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
              <NavLink activeStyle={{color:'white'}} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{color:'red'}} to="/second">Second</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{color:'red'}} to="/third">Third</NavLink>
            </li>
          </ul>
        </nav>
        <div style={{ backgroundColor: "Blue" }}>First</div>
      </div>
    );
  }
}

export default First;
