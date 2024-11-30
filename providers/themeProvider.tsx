"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { useMedia } from "react-use";

const defCtx = { toggleColorMode: () => undefined, isDarkTheme: false };
const isDarkThemeContext = createContext(defCtx);

export function AppThemeContextProvider({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMedia("(prefers-color-scheme: dark)", false);
  const storedTheme = localStorage.getItem("isDarkTheme");
  const initState = !!storedTheme || prefersDarkMode;

  const [isDarkTheme, setIsDarkTheme] = useState(initState);

  const toggleColorMode = (): undefined => {
    if (!isDarkTheme) {
      document.getElementsByTagName("html")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
    }
    localStorage.setItem("isDarkTheme", String(!isDarkTheme));
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <isDarkThemeContext.Provider value={{ toggleColorMode, isDarkTheme }}>
      {children}
    </isDarkThemeContext.Provider>
  );
}

export const useIsDarkTheme = () => {
  return useContext(isDarkThemeContext);
};
