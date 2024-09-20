import React, { createContext, useState, useContext, useEffect } from "react";
import useContextTheme from "../hooks/context-theme-hook";
import { AppFeatureObjectContext } from "monday-sdk-js/types/client-context.type";
import useLogs from "../hooks/logs-hook";
import useMondayData from "../hooks/monday-data-hook";

const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const context: AppFeatureObjectContext | null = useContextTheme();

  // const { logs, setLogs } = useLogs(context);
  const mondayData = useMondayData();

  return (
    <ThemeContext.Provider value={{ context, mondayData }}>
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
