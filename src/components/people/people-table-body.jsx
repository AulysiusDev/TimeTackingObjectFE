import React from "react";
import "../../styles/people/people-table-body.scss";
import PeopleTableRow from "./people-table-row";
import { usePeople } from "../../context/people-context";
import { teams } from "../../utils/data";

export default function PeopleTableBody() {
  const { people, team } = usePeople();
  return (
    <tbody className="people-table-body__container">
      {people
        .filter((person) => {
          return (
            teams[team].toLowerCase() === "all" || person.team === teams[team]
          );
        })
        .map((peep) => {
          return <PeopleTableRow person={peep} />;
        })}
    </tbody>
  );
}
