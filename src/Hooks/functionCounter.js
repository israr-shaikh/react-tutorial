import React, { useState } from "react";

function Example() {
  let value = 10;  
  const [count, setCount] = useState();
  return (
    <div>
      <div className="App">
        <div style={{ color: "white", fontSize: 40 }}>Counter: {count}</div>
        <button onClick={() => setCount(count + 1)} className="button">
          Increament
        </button>
        <button onClick={() => setCount(count - 1)} className="button">
          Decreament
        </button>

        <button onClick={() => setCount(value)} className="button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Example;
