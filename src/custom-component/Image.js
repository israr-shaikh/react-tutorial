import React, { Component } from "react";

function Image(props) {
  return <img height={props.height} width={props.width} src={props.src}></img>;
}

export default Image;
