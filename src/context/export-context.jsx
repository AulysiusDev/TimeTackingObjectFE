import React, { createContext, useState, useContext } from "react";

const ExportContext = createContext(null);

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
