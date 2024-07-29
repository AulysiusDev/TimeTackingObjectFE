import React, { createContext, useState, useContext, useEffect } from "react";
import useMondayContext from "../hooks/useMondayContext";
import { changeTheme } from "../utils/helpers";

const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const { context } = useMondayContext();

  useEffect(() => {
    if (!context) return;
    changeTheme(context?.theme);
  }, [context]);

  return (
    <ThemeContext.Provider value={{ context }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw Error("useTheme must be used within ThemeContextProvider");
  }
  return context;
}
