import React from "react";
import WithCounter from "./hocCounter";

function ClickCount(props) {
    
  const { count, increament } = props;

  return (
    <div>
      <div style={{ color: "white" }}>Count {count} times</div>
      <button className="button" onClick={increament}>
        increament
      </button>
    </div>
  );
}

export default WithCounter(ClickCount);



