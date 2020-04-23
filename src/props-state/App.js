import React, { Component } from "react";
import Example from "./Example";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loader: true };
  }

  render() {
    return (
      <div>
         {/* Exmaple component has two props passs Name and Age */}
        <Example name={'Israr'} age={25} />
      </div>
    );
  }
}

export default App;
