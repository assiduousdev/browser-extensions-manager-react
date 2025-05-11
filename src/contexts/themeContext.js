import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeContext as default, useTheme }