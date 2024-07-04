import React from "react";
import "../../styles/entries/week-table.scss";
import TableHeader from "./table-header";
import TableBody from "./table-body";

export default function WeekTable() {
  return (
    <div className="week-table__container">
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
