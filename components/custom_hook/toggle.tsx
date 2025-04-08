import React from "react";
import UseToggle from "./useToggle";

const Toggle = () => {
  const [status, handle_toggle] = UseToggle();
  return (
    <div className="shadow-2xl m-8 p-8">
      {status && <h1>This is the data</h1>}

      <br />

      <button className="buttons" onClick={handle_toggle}>
        {status ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Toggle;
