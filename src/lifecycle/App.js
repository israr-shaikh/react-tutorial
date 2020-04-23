import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      text: "I am rendering",
    };
  }

  componentDidMount() {
    console.log("component Did Mount");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStatefromProps");
    return {};
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <div className="text" >{this.state.text}</div>
        <button className='button' onClick={() => this.setState({ text: "I am re-rendered" })}>
          Click me to check phase-2
        </button>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.text !== nextState.text) {
      return true;
    } else return false;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("getSnapshotBeforeUpdate", nextState);
    return true;
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }
}

export default App;

// sequence of Lifcycle Method Phase-1
// * 1. cunstructor - its default method to get call itself
// * 2. getDerivedStateFromProps - calls everytime after changes into props and state before render
// * 3. render - it actually renders and show output
// * 4. componentDidMount - after rendering first time

// After making any changes to props or state Phase-2
// * 1. getDerivedStateFromProps - calls everytime after changes into props and state before render
// * 2. shouldComponentUpdate - ask permisiion to re-render or not
// * 3. render - if calls after shouldComponentUpdate returns true
// * 4. getSnapshotBeforeUpdate - it takes your backup of previous state and previous props before making changes
// * 5. componentDidUpdate - after render method called second time
