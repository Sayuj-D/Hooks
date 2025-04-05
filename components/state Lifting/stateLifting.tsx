import React from "react";

type StateLiftingProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const StateLifting: React.FC<StateLiftingProps> = (props) => {
  return (
    <>
      <input
        placeholder="Something"
        className="border-2 border-slate-400 rounded text-center flex items-center justify-center mx-auto mt-4 w-1/2 h-10 mb-4"
        type="text"
        // onChange what does it do?
        // here we are using the setName function to update the name state in the parent component, which is passed as a prop to this component.
        onChange={(e) => props.setName(e.target.value)}
      />
      <p className="text-center">Value reflected from child component</p>
      <p className="text-center font-bold">
        Value that is getting typed: {props.name}
      </p>
    </>
  );
};

export default StateLifting;
