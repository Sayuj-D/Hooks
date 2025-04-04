import React from "react";
type Props_abc = {
  text: string;
  children: React.ReactNode;
  handelReduce: () => void;
};

const Btn: React.FC<Props_abc> = (props) => {
  return (
    <>
      <div>
        {props.children}
        <button
          onClick={props.handelReduce}
          className="bg-amber-100 px-4 py-2 cursor-pointer mt-4 rounded-md"
        >
          {props.text}
        </button>
      </div>
    </>
  );
};

export default Btn;
