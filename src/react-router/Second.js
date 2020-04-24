import React, { Component } from "react";
import { Link, } from "react-router-dom";

class Second extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div style={{ backgroundColor: "red" }}>Hi {this.props.match.params.username} </div>
      </div>
    );
  }
}

export default Second;
