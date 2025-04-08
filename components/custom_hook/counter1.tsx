import React from "react";
import Usecounter from "./usecounter";

// we are sharing the logic in the file main.tsx and counter1.tsx.
// the core logic is written in the usecounter custom hook.

const Counter1 = () => {
  const [count, handel_inc, handel_dec] = Usecounter();
  return (
    <div>
      <div>{count}</div>
      <button onClick={handel_inc}>click</button>
      <button onClick={handel_dec}>Click</button>
    </div>
  );
};

export default Counter1;
