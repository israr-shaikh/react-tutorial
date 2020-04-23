import React, { Component } from "react";
import Text from "./Text";
import Image from "./Image";
class App extends Component {
  render() {
    return (
      <div className="App__body" >
        <Text style={{fontSize:30,paddingBottom:20,color:'red'}} >This is my custom heading tag for - Text</Text>
        <Image height={200} width={200} src={require("./pink.jpeg")} />
      </div>
    );
  }
}

export default App;
