import React, { createContext, useState, useEffect, useContext } from "react";

const PeopleContext = createContext(null);

export default function PeopleContextProvider({ children }) {
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(null);
  const [showRatecardsModal, setShowRatecardsModal] = useState(false);
  const [showAddRatecardsModal, setShowAddRatecardsModal] = useState(false);
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   const sortedPeople = sortPeople(teams, peopleList);
  //   setPeople(sortedPeople);
  // }, []);

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
        setClients,
        clients,
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
