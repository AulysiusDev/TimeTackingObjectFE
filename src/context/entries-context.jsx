import React, { createContext, useState, useEffect, useContext } from "react";
import mondaySdk from "monday-sdk-js";
import { endOfWeek, startOfWeek } from "date-fns";
import { createDatesArray } from "../utils/helpers";
import { fetchUserLogs } from "../utils/utils";
import { useTheme } from "./theme-context";

const EntriesContext = createContext(null);
const monday = mondaySdk();

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

  useEffect(() => {
    if (!context?.user) return;
    async function getLogs() {
      const logsRes = await fetchUserLogs({
        userId: parseInt(context?.user?.id),
      });
    }
    getLogs();
  }, [context]);

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
