import React from "react";
import WithCounter from "./hocCounter";

function MouseCount(props) {
    
  const { count, increament } = props;

  return (
    <div>
      <div onMouseEnter={increament} style={{ color: "white" }}>
        Count {count} times
      </div>
    </div>
  );
}

export default WithCounter(MouseCount);
