import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [context, setContext] = useState({});
  const [theme, setTheme] = useState({});

  return (
    <ThemeContext.Provider value={{ theme, setTheme, context, setContext }}>
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
