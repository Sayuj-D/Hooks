import { createContext, ReactNode, useState } from "react";

interface props {
  children: ReactNode;
}
export const ThemeContext = createContext();

export const ThemeProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState("Dark");
  const toggle_theme = () => {
    const updated_theme = theme == "Light" ? "Dark" : "Light";
    setTheme(updated_theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggle_theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
