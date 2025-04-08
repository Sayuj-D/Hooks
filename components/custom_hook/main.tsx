import React from "react";
import Usecounter from "./usecounter";

const Main_custom = () => {
  const [count, handel_inc, handel_dec] = Usecounter();
  return (
    <>
      <div className="shadow-2xl m-8 p-8 rounded-2xl">
        <div>{count}</div>
        <button className="buttons" onClick={handel_inc}>
          Increase
        </button>
        <br />
        <button className="buttons" onClick={handel_dec}>
          Decrease
        </button>
      </div>
    </>
  );
};

export default Main_custom;
