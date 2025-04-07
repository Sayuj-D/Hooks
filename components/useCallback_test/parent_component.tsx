import React, { useState, useCallback } from "react";
import Child_component from "./child_component";

const Parent_component = () => {
  const [count, setCount] = useState(0);

  // here by the use of the useCallback, we have frooze the reference of the function, thus when the page re-renders the reference of the function "handelClick" is not changed.

  const handleClick = useCallback(() => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>The count is: {count}</p>
      <button className="buttons" onClick={handleClick}>
        Increment!
      </button>

      <div>
        <Child_component
          button_name="Click me! Passed as prop"
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default Parent_component;
