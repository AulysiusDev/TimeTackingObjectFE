import React, { createContext, useState, useEffect, useContext } from "react";
import { endOfWeek, startOfWeek } from "date-fns";
import { createDatesArray } from "../utils/helpers";
import { useTheme } from "./theme-context";

const EntriesContext = createContext(null);

export default function EntriesContextProvider({ children }) {
  const [week, setWeek] = useState({
    firstDay: startOfWeek(new Date(), { weekStartsOn: 1 }),
    lastDay: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  const [datesArr, setDatesArr] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const { context } = useTheme();

  useEffect(() => {
    setDatesArr(createDatesArray(week.firstDay, week.lastDay));
  }, [week]);

  return (
    <EntriesContext.Provider
      value={{
        week,
        setWeek,
        datesArr,
        setDatesArr,
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
}

export function useEntries() {
  const context = useContext(EntriesContext);
  if (context === null) {
    throw Error("useEntries must be used within EntriesContextProvider");
  }
  return context;
}
