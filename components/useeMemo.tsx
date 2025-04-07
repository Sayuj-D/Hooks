import React, { useMemo, useState } from "react";

const UseeMemo = () => {
  const [count, setCount] = useState(0);
  const [input_field, setInput_field] = useState<number>(0);
  const handelClick = () => {
    setCount(count + 1);
  };

  // expensive function here:
  const expensive_function = (num: number) => {
    // console.log("this is a expensive function");
    for (let i = 0; i < 100000; i++) {}
    return num * 2;
  };

  const double_value = useMemo(
    () => expensive_function(input_field),
    [input_field]
  );

  return (
    <>
      <div>
        <button className="buttons" onClick={handelClick}>
          Click me!
        </button>
        <p>Count: {count}</p>
      </div>
      <br />
      <input
        className="border-2 border-slate-600 rounded-md"
        type="number"
        placeholder="value here"
        value={input_field}
        onChange={(e) => setInput_field(Number(e.target.value))}
      />
      <div>
        <h1>{double_value}</h1>
      </div>
    </>
  );
};

export default UseeMemo;
