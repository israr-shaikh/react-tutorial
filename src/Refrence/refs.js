import React, { Component } from "react";
import TextInput from './classRef';

class Testing extends Component {
  constructor(props) {
    super(props);

    this.txtInput = React.createRef();

  }

  clickMe(){
    // console.log(this.txtInput.current);
    this.txtInput.current.click(); 
  }


  render() {
    return (
      <div className="App">
        
        <TextInput ref={this.txtInput} />
        <button className="button" onClick={()=>this.clickMe()} >go next</button>
        
      </div>
    );
  }
}

export default Testing;
