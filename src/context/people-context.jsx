import React, { createContext, useState, useEffect, useContext } from "react";
import mondaySdk from "monday-sdk-js";
import { peopleList, teams } from "../utils/data.js";
import { sortPeople } from "../utils/helpers.js";

const PeopleContext = createContext(null);
const monday = mondaySdk();
monday.setToken(process.env.MONDAY_API_TOKEN);

export default function PeopleContextProvider({ children }) {
  const [team, setTeam] = useState(0);
  const [showPeopleModal, setShowPeopleModal] = useState(false);
  const [showAddPeopleModal, setShowAddPeopleModal] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const sortedPeople = sortPeople(teams, peopleList);
    console.log({ sortedPeople });
    setPeople(sortedPeople);
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        team,
        setTeam,
        showAddPeopleModal,
        setShowAddPeopleModal,
        showPeopleModal,
        setShowPeopleModal,
        people,
        setPeople,
      }}
    >
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
