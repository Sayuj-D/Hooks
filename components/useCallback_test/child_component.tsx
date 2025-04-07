import React from "react";

const Child_component = React.memo((props) => {
  console.log("I have been rendered!");
  return (
    <div>
      <button className="buttons" onClick={props.handleClick}>
        {props.button_name}
      </button>
    </div>
  );
});

Child_component.displayName = "Child_component";

export default Child_component;
