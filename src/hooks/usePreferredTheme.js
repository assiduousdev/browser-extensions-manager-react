import React, { useEffect, useState } from 'react'

function usePreferredTheme() {
  const [preferredTheme, setPreferredTheme] = useState();

  const updatePreferredTheme = ({ matches }) => {
    const preferredTheme = matches ? "dark" : "light";
    setPreferredTheme(preferredTheme);
  }

  useEffect(() => {
    const systemPreferredThemeMedia = window
      .matchMedia("(prefers-color-scheme: dark)");
        
    setPreferredTheme(
      systemPreferredThemeMedia.matches ? "dark" : "light"
    );

    systemPreferredThemeMedia.addEventListener("change", updatePreferredTheme);

    () => {
      systemPreferredThemeMedia.removeEventListener("change", updatePreferredTheme);
    }
  }, []);

  return preferredTheme;
}

export default usePreferredTheme