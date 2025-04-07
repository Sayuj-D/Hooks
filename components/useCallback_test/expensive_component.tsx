import React, { useCallback, useMemo, useState } from "react";

const Expensive_component = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // this is the expensive function, the loop has to be executed 10 trillion times, and executing it in every render is expensive. thus we use the useMemo to solve the problem

  const doublefunc = useCallback((num: number) => {
    for (let i = 0; i < 1000000; i++) {}
    return num * 2;
  }, []);
  const double_val = useMemo(() => {
    return doublefunc(input);
  }, [input]);

  return (
    <>
      <p>Count: {count}</p>
      <button className="buttons" onClick={handleClick}>
        Increment
      </button>
      <br />

      <input
        className="border-2 rounded-md mt-4 mb-4"
        type="number"
        placeholder="Number to double"
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <h1>The double value is: {double_val}</h1>
    </>
  );
};

export default Expensive_component;
