import React, { createContext, useState, useEffect, useContext } from "react";
import { peopleList, teams } from "../utils/data.js";
import { sortPeople } from "../utils/helpers.js";

const PeopleContext = createContext(null);

export default function PeopleContextProvider({ children }) {
  const [team, setTeam] = useState(0);
  const [nonUserGroup, setNonUserGroup] = useState(null);
  const [showRatecardsModal, setShowRatecardsModal] = useState(false);
  const [showAddRatecardsModal, setShowAddRatecardsModal] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const sortedPeople = sortPeople(teams, peopleList);
    setPeople(sortedPeople);
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        team,
        setTeam,
        showAddRatecardsModal,
        setShowAddRatecardsModal,
        showRatecardsModal,
        setShowRatecardsModal,
        people,
        setPeople,
        setNonUserGroup,
        nonUserGroup,
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
