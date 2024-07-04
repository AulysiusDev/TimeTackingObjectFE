import React from "react";
import "../styles/entries/entries.scss";
import Filters from "../components/common/filters";
import TotalHours from "../components/common/total-hours";
import EntriesDisplay from "../components/entries/entries-display";

export default function Entries() {
  return (
    <div className="entries__container">
      <Filters />
      <TotalHours />
      <EntriesDisplay />
    </div>
  );
}
