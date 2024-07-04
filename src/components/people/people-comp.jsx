import React from "react";
import "../../styles/people/people-comp.scss";
import PeopleTableHead from "./people-table-head";

export default function PeopleComp() {
  return (
    <article className="people-comp__container">
      <table>
        <PeopleTableHead />
      </table>
    </article>
  );
}
