import React, { createContext, useState, useEffect, useContext } from "react";
import mondaySdk from "monday-sdk-js";

const ExportContext = createContext(null);
const monday = mondaySdk();
monday.setToken(process.env.MONDAY_API_TOKEN);

export default function ExportContextProvider({ children }) {
  const [exportFormat, setExportFormat] = useState({
    columns: [],
    rows: [],
  });
  return (
    <ExportContext.Provider value={{ exportFormat, setExportFormat }}>
      {children}
    </ExportContext.Provider>
  );
}

export function useExport() {
  const context = useContext(ExportContext);
  if (context === null) {
    throw Error("useExport must be used within ExportContextProvider");
  }
  return context;
}
