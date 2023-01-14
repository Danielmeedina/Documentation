import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme(true);
      localStorage.setItem("theme", theme);
    } else {
      setTheme(false);
      localStorage.setItem("theme", theme);
    }
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
