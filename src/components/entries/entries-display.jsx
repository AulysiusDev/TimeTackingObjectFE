import React from "react";
import "../../styles/entries/entries-display.scss";
import WeekTable from "./week-table";

export default function EntriesDisplay() {
  return (
    <div className="entries-display__container">
      <WeekTable />
    </div>
  );
}
