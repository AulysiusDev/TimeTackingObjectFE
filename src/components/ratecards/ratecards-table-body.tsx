import React from "react";
import "../../styles/ratecards/ratecards-table-body.scss";
import RatecardsTableRow from "./ratecards-table-row";
import { usePeople } from "../../context/people-context";
import { teams } from "../../utils/data";
import { useTheme } from "../../context/theme-context";

const RatecardsTableBody: React.FC = () => {
  const { people, team } = usePeople();
  const { ratecardCategories } = useTheme();
  return (
    <tbody className="ratecards-table-body__container">
      {people
        .filter((person) => {
          return (
            ratecardCategories.team[team].toLowerCase() === "all" ||
            person.team === ratecardCategories.team[team]
          );
        })
        .map((peep, i) => {
          return <RatecardsTableRow person={peep} key={i} />;
        })}
    </tbody>
  );
};
export default RatecardsTableBody;
