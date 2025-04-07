import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Themeswitcher: React.FC<check> = () => {
  const { theme, toggle_theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center shadow-2xl m-8 mb-16 p-8 gap-4 rounded-2xl ${
          theme == "Light" ? "bg-white" : " bg-black text-white"
        }`}
      >
        <h1 className="text-2xl">Theme Toggle </h1>
        <button onClick={toggle_theme} className="buttons">
          Toggle Here
        </button>

        <p>The theme is: {theme}</p>
      </div>
    </>
  );
};

export default Themeswitcher;
