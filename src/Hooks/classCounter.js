import React from "react";

class classCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increamentor = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="App">
        <div style={{ color: "white", fontSize: 40 }}>
          Counter: {this.state.counter}
        </div>
        <button className="button" onClick={this.increamentor}>
          Increament
        </button>
      </div>
    );
  }
}

export default classCounter;
