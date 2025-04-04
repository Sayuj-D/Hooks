import React from "react";

type Props_sl = {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
};

const Slpractise: React.FC<Props_sl> = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Permanent Address"
          className="text-center border-2 border-slate-400 rounded-md px-4 mb-8 py-2"
          onChange={(e) => props.setData(e.target.value)}
        />

        <div>
          <input
            type="checkbox"
            className="mb-8 mr-2"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            id="checkbox"
          />
          <label htmlFor="checkbox">Same as Permanent Address</label>
        </div>

        <input
          type="text"
          placeholder="Temporary Address"
          // disabled={isChecked}
          className="text-center border-2 border-slate-400 rounded-md px-4 py-2"
          value={isChecked ? props.data : ""}
          onChange={(e) => props.setData(e.target.value)}
        />
      </div>
    </>
  );
};

export default Slpractise;
