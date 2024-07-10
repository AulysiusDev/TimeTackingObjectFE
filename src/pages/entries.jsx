import React from "react";
import "../styles/entries/entries.scss";
import Filters from "../components/common/filters";
import TotalHours from "../components/common/total-hours";
import EntriesDisplay from "../components/entries/entries-display";
import PageTitle from "../components/common/page-title";

export default function Entries() {
  return (
    <section className="entries__container">
      <div className="entries__top-cont">
        <PageTitle
          styles={{
            justifySelf: "flex-start",
            width: "20%",
            marginTop: "15px",
          }}
        >
          Time entries
        </PageTitle>
        <Filters />
      </div>
      <TotalHours />
      <EntriesDisplay />
    </section>
  );
}
