import React, { useState, useEffect, Fragment } from "react";

function ObjectHooks() {
  const [useName, changeName] = useState({ name: "Israr", age: 25 });

  useEffect(() => {
    console.log(new Date());
  });

  return (
    <Fragment>
      <div className="Israr" style={{ color: "white", fontSize: 40 }}>
        Name: {useName.name}, Age: {useName.age}
      </div>

      <button
        onClick={() => changeName({ ...useName, name: "Anything" })}
        className="button"
      >
        changeName
      </button>

      <button
        onClick={() => changeName({ ...useName, age: 150 })}
        className="button"
      >
        changeAge
      </button>
    </Fragment>
  );
}

export default ObjectHooks;
