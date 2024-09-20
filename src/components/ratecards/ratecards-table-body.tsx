import React from "react";
import "../../styles/ratecards/ratecards-table-body.scss";
import RatecardsTableRow from "./ratecards-table-row";
import { usePeople } from "../../context/people-context";
import { teams } from "../../utils/data";

const RatecardsTableBody: React.FC = () => {
  const { people, team } = usePeople();
  return (
    <tbody className="ratecards-table-body__container">
      {people
        .filter((person) => {
          return (
            teams[team].toLowerCase() === "all" || person.team === teams[team]
          );
        })
        .map((peep, i) => {
          return <RatecardsTableRow person={peep} key={i} />;
        })}
    </tbody>
  );
};
export default RatecardsTableBody;
