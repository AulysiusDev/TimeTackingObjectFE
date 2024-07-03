import React, { createContext, useState, useEffect, useContext } from "react";
import mondaySdk from "monday-sdk-js";

const PeopleContext = createContext(null);
const monday = mondaySdk();
monday.setToken(process.env.MONDAY_API_TOKEN);

export default function PeopleContextProvider({ children }) {
  const [team, setTeam] = useState(0);
  return (
    <PeopleContext.Provider value={{ team, setTeam }}>
      {children}
    </PeopleContext.Provider>
  );
}

export function usePeople() {
  const context = useContext(PeopleContext);
  if (context === null) {
    throw Error("usePeople must be used within PeopleContextProvider");
  }
  return context;
}
