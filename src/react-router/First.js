import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class First extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ backgroundColor: "red", margin: 0 }}>
        <div style={{ color: "white", fontSize: 50 }}>First</div>
      </div>
    );
  }
}

export default First;
