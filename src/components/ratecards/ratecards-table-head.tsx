import React from "react";
import "../../styles/ratecards/ratecards-table-head.scss";

const columns = ["User", "Team", "Hours", "Days", "Rate", "Currency"];

const PeopleTableHead: React.FC = () => {
  return (
    <thead className="ratecards-table-head__container">
      <tr className="ratecards-table-head__row">
        {columns.map((column) => (
          <th
            className="ratecards-table-head__field ratecards-comp__head-width"
            key={column}
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default PeopleTableHead;
