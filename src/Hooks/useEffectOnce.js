import React, { useState, useEffect } from "react";

function UseEffectOnce() {
  const [count, setCount] = useState(10);

  useEffect(() => {

    console.log(count);
    setInterval(()=>{setCount(count+1)},1000)

  },[])



  return (
    <div className="App">
      <div style={{ color: "white" }}>this is my Count {count}</div>
    </div>
  );
}

export default UseEffectOnce;
