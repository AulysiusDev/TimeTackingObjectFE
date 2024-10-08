import React, { createContext, useState, useContext } from "react";
import useContextTheme from "../hooks/context-theme-hook";
import { AppFeatureObjectContext } from "monday-sdk-js/types/client-context.type";
import useLogs from "../hooks/logs-hook";
import useMondayData from "../hooks/monday-data-hook";
import { useRatecardCategories } from "../hooks/ratecard-categories-hook";
import { ClientDetails, NewRatecard, StoredRatecard } from "../types";
import useStoredRatecards from "../hooks/stored-ratecards-hook";
import { clientDetailsObj } from "../utils/data";

const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [ratecardCategory, setRatecardCategory] = useState("team");
  const [manageRatecardCategory, setManageRatecardCategory] =
    useState("default");
  const [showRatecardCategoryModal, setShowRatecardCategoryModal] =
    useState<boolean>(false);
  const [showManageRatecardsModal, setShowManageRatecardsModal] =
    useState<boolean>(false);
  const [showRatecardsManageModal, setShowRatecardsManageModal] =
    useState<boolean>(false);
  const context: AppFeatureObjectContext | null = useContextTheme();

  const [newRatecards, setNewRatecards] = useState<NewRatecard[]>([]);

  const [deleteRatecards, setDeleteRatecards] = useState<StoredRatecard[]>([]);

  const [clientDetails, setClientDetails] = useState<ClientDetails>(clientDetailsObj);

  // const { logs, setLogs } = useLogs(context);
  const mondayData = useMondayData();

  const {
    ratecardCategories,
    setRatecardCategories,
    ratecardCategoriesLoading,
    ratecardCategoriesError,
  } = useRatecardCategories();

  const { storedRatecards, setStoredRatecards } = useStoredRatecards();

  return (
    <ThemeContext.Provider
      value={{
        context,
        mondayData,
        ratecardCategory,
        setRatecardCategory,
        showRatecardCategoryModal,
        setShowRatecardCategoryModal,
        ratecardCategories,
        setRatecardCategories,
        ratecardCategoriesLoading,
        ratecardCategoriesError,
        showRatecardsManageModal,
        setShowRatecardsManageModal,
        newRatecards,
        setNewRatecards,
        storedRatecards,
        setStoredRatecards,
        deleteRatecards,
        setDeleteRatecards,
        showManageRatecardsModal,
        setShowManageRatecardsModal,
        manageRatecardCategory,
        setManageRatecardCategory,
        clientDetails, setClientDetails
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
