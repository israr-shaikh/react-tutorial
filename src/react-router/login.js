import React, { Component } from "react";

class Example extends Component {
  constructor(props) {
    super(props);
    // props are used to set initial state of name and age
    this.state = {
      name: this.props.name,
      age: this.props.age,
    };
  }

  handleClick(input, event) {
    let state = this.state;

    state[input] = event.target.value;

    this.setState({ state });
  }

  render() {
    return (
      <div className="App__body" >
        <h1 className="h1" >
          Intial Props coming from Parent 
          <span className="highlight"> Name: {this.props.name}</span> and
          <span className="highlight"> Age: {this.props.age}</span>
        </h1>

        <h2 className="highlight">Name: {this.state.name}</h2>
        <input
          className="form__input"
          type="text"
          value={this.state.name}
          onChange={(event) => this.handleClick("name", event)}
        />

        <h2 className="highlight">Age: {this.state.age}</h2>
        <input
          className="form__input"
          type="number"
          value={this.state.age}
          onChange={(event) => this.handleClick("age", event)}
        />
      </div>
    );
  }
}

export default Example;
