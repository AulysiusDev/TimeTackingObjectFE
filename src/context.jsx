import React, { createContext, useState, useEffect, useContext } from "react";
import mondaySdk from "monday-sdk-js";
import { addMonths, endOfWeek, startOfWeek, subMonths } from "date-fns";

const GeneralContext = createContext(null);
const monday = mondaySdk();
monday.setToken(process.env.MONDAY_API_TOKEN);

export default function GeneralContextProvider({ children }) {
  const [week, setWeek] = useState({
    firstDay: startOfWeek(new Date(), { weekStartsOn: 1 }),
    lastDay: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return (
    <GeneralContext.Provider
      value={{
        week,
        setWeek,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export function useGeneral() {
  const context = useContext(GeneralContext);
  if (context === null) {
    throw Error("useGeneral must be used within GeneralContextProvider");
  }
  return context;
}
