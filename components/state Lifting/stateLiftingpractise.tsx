import React from "react";

type StateLiftingpractiseProps = {
  title: string;
  isActive: boolean;
  onShow: () => void;
  children: React.ReactNode;
};
const stateLiftingpractise: React.FC<StateLiftingpractiseProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="mt-8 mb-8 bg-amber-100 w-100 p-4 flex flex-col items-center justify-center rounded-lg shadow-md">
        <h1 className="text-2xl">{props.title}</h1>
        {props.isActive ? (
          <p>{props.children}</p>
        ) : (
          <button
            onClick={props.onShow}
            className="bg-slate-300 px-4 py-2 rounded cursor-pointer mt-4"
          >
            Show{" "}
          </button>
        )}
      </div>
    </div>

    // SLP again
  );
};

export default stateLiftingpractise;
