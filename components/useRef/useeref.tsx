import React, { useState, useRef } from "react";

interface check {
  count: number;
  val: number;
}

const Useeref: React.FC<check> = () => {
  const [count, setCount] = useState(0);
  const handel_increment = () => {
    setCount(count + 1);
    val.current = val.current + 1;
    console.log("The updated value is:", val.current);
  };

  const val = useRef(1);
  const btnRef = useRef<HTMLButtonElement>(null);

  const change_btn = () => {
    if (btnRef.current) {
      btnRef.current.style.backgroundColor = "black";
      btnRef.current.style.color = "white";
    }
  };

  return (
    <>
      <div className="m-12">
        <p>Current count: {count}</p>
        <button ref={btnRef} className="buttons" onClick={handel_increment}>
          Click me!
        </button>
        <br />
        <button className="buttons" onClick={change_btn}>
          Change above Button
        </button>
      </div>
    </>
  );
};

export default Useeref;
