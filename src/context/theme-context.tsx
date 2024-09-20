import React, { createContext, useState, useContext } from "react";
import useContextTheme from "../hooks/context-theme-hook";
import { AppFeatureObjectContext } from "monday-sdk-js/types/client-context.type";
import useLogs from "../hooks/logs-hook";
import useMondayData from "../hooks/monday-data-hook";
import { useRatecardCategories } from "../hooks/ratecard-categories-hook";

const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [addRatecardCategory, setAddRatecardCategory] = useState("team");
  const [showAddRatecardCategoryModal, setShowAddRatecardCategoryModal] =
    useState(false);
  const context: AppFeatureObjectContext | null = useContextTheme();

  // const { logs, setLogs } = useLogs(context);
  const mondayData = useMondayData();

  const {
    ratecardCategories,
    setRatecardCategories,
    ratecardCategoriesLoading,
    ratecardCategoriesError,
  } = useRatecardCategories();

  return (
    <ThemeContext.Provider
      value={{
        context,
        mondayData,
        addRatecardCategory,
        setAddRatecardCategory,
        showAddRatecardCategoryModal,
        setShowAddRatecardCategoryModal,
        ratecardCategories,
        setRatecardCategories,
        ratecardCategoriesLoading,
        ratecardCategoriesError,
      }}
    >
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
