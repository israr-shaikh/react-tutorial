import React, { Component } from "react";

const Counter = (Comp) => {

  class HOCCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increament = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      return <Comp count={this.state.count} increament={this.increament} />;
    }
  }
  return HOCCounter;

};

export default Counter;
