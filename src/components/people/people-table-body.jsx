import React from "react";
import "../../styles/people/people-table-body.scss";
import PeopleTableRow from "./people-table-row";

export default function PeopleTableBody() {
  return (
    <tbody className="people-table-body__container">
      <PeopleTableRow />
      <PeopleTableRow />
      <PeopleTableRow />
    </tbody>
  );
}
