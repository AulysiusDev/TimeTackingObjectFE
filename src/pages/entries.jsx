import React from "react";
import "../styles/entries.scss";
import Filters from "../components/common/filters";

export default function Entries() {
  return (
    <div className="entries__container">
      <Filters />
    </div>
  );
}
