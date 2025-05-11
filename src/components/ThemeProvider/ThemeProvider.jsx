import React, {  useEffect, useState } from 'react'
import ThemeContext from "../../contexts/themeContext";

function ThemeProvider({ children }) {
  const [pageTheme, setPageTheme] = useState("");

  const THEME_ATTR = "data-theme";

  const getTheme = () => pageTheme;

  const setTheme = (theme) => {
    if (theme === "dark" || theme === "light") {
      setPageTheme(theme);
    }
  }

  useEffect(() => {
    document.firstElementChild.setAttribute(THEME_ATTR, pageTheme);
  }, [pageTheme]);

  return (
    <ThemeContext.Provider value={{ getTheme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider