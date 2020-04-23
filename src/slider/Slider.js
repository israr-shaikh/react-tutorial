import React, { Component } from "react";

let intervalTimer;
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }

  componentDidMount() {
    this.interval();
  }

  interval(){  
    intervalTimer = setInterval(
        () =>
          this.setState({
            timer:
              this.state.timer == this.props.data.length - 1
                ? 0
                : this.state.timer + 1,
          }),
        5000
      );
  }

  gotoIndex(index){
    clearInterval(intervalTimer); 
    this.setState({ timer: index });
    this.interval();
  }


  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          height={400}
          width={400}
          src={this.props.data[this.state.timer]}
        ></img>
        <div className="outerdiv">
          {this.props.data.map((item, index) => (
            <div
              className="innerdiv"
              onClick={() => this.gotoIndex(index)}
              style={{
                backgroundColor:
                  this.state.timer === index ? "white" : "black",
                borderRadius: 10,
                width: 20,
                textAlign: "center",
              }}
            >
              .
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
