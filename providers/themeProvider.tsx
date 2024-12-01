"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// import { useMedia } from "react-use";

const defCtx = {
  toggleColorMode: () => undefined,
  isDarkTheme: false,
};
const isDarkThemeContext = createContext(defCtx);

export function AppThemeContextProvider({ children }: { children: ReactNode }) {
  if (typeof window === undefined) {
    return (
      <isDarkThemeContext.Provider value={defCtx}>
        {children}
      </isDarkThemeContext.Provider>
    );
  }
  //const prefersDarkMode = useMedia("(prefers-color-scheme: dark)");
  const storedTheme = !!localStorage.getItem("isDarkTheme");
  const initState =
    /*storedTheme !== undefined ?*/ storedTheme; /*: prefersDarkMode*/

  const [isDarkTheme, setIsDarkTheme] = useState(initState);

  useEffect(() => {
    // false has to be represented with empty string, so !! can convert false values correctly
    localStorage.setItem("isDarkTheme", isDarkTheme ? "true" : "");
    if (isDarkTheme) {
      document.getElementsByTagName("html")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
    }
  }, [isDarkTheme]);

  const toggleColorMode = (): undefined => {
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
