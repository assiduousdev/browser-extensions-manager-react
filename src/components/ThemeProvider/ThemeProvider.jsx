import React, {  useEffect, useState } from 'react'
import ThemeContext from "../../contexts/themeContext";
import usePreferredTheme from "../../hooks/usePreferredTheme";

function ThemeProvider({ children }) {
  const [pageTheme, setPageTheme] = useState("");
  const preferredTheme = usePreferredTheme();

  const THEME_ATTR = "data-theme";
  
  const getTheme = () => pageTheme;

  const setTheme = (theme) => {
    if (theme === "dark" || theme === "light") {
      setPageTheme(theme);
    }
  }

  useEffect(() => {
    setTheme(preferredTheme);
  }, [preferredTheme])

  useEffect(() => {
    document.firstElementChild.setAttribute(THEME_ATTR, pageTheme);
  }, [pageTheme]);

  useEffect(() => {
    document.firstElementChild.setAttribute(THEME_ATTR, preferredTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ getTheme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider