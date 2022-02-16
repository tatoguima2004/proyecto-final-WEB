import React from "react";
import "./contador.css"
const { useState } = React;

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="centrado">
        ${count}
      </h1>
      <div className="centrado2 centrado">
        <button classname="" onClick={() => setCount(count - 1)}>-1</button>
        <button className="" onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
};

export default Contador;