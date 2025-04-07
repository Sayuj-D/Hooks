import React, { useContext } from "react";
import { ToggleContext } from "@/app/page";

const Child_capture = () => {
  const { themes, setThemes } = useContext(ToggleContext);
  const handel_toggle = () => {
    const updated_themes = themes == "Light" ? "Dark" : "Light";
    setThemes(updated_themes);
  };
  return (
    <>
      <div
        className={` rounded-2xl shadow-2xl m-8 mb-16 p-8 transition duration-300 ${
          themes == "Light" ? "bg-white" : "bg-gray-900 text-white"
        }`}
      >
        <h1 className="text-2xl">Toggle Here also</h1>
        <button className="buttons mb-4" onClick={handel_toggle}>
          Click me!
        </button>
        <p>The theme is: {themes}</p>
      </div>
    </>
  );
};

export default Child_capture;
