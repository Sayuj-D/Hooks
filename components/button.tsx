import React from "react";

type ButtonProps = {
  handelClick: () => void;
  children: React.ReactNode;
  text: string;
};
const button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <div>
        {props.children}
        <button
          onClick={props.handelClick}
          className="bg-blue-400 px-4 py-2 rounded cursor-pointer"
        >
          {props.text}
        </button>
      </div>
    </>
  );
};

export default button;
