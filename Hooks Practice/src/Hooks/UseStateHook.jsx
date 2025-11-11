import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  return (
    <>
      <h1>useState Hook Example</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default UseStateHook;
