import React from "react";
import "../../styles/people/people-table-head.scss";

const columns = ["User", "Team", "Hours", "Days", "Rate", "Currency"];

export default function PeopleTableHead() {
  return (
    <thead className="people-table-head__container">
      <tr className="people-table-head__row">
        {columns.map((column) => (
          <td
            className="people-table-head__field people-comp__field-width"
            key={column}
          >
            {column}
          </td>
        ))}
      </tr>
    </thead>
  );
}
