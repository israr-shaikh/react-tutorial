import React, { Component } from "react";

class classRef extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.input2 = React.createRef();
  }

  click() {
    this.input2.current.focus();
  }

  render() {
    return (
      <div className="App">
        <h2 className="highlight">Name:</h2>
        <input className="form__input" type="text" />
        <h2 className="highlight">Age:</h2>
        <input className="form__input" type="text" />
      </div>
    );
  }
}

export default classRef;
