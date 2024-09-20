import React from "react";
import "../styles/entries/entries.scss";
import Filters from "../components/common/filters";
import TotalHours from "../components/common/total-hours";
import PageTitle from "../components/common/page-title";
import WeekTable from "../components/entries/week-table";
import Status from "../components/entries/status";
import { useTheme } from "../context/theme-context";
import { ThemeContext } from "../types";

const Entries: React.FC = () => {
  const { context } = useTheme() as ThemeContext;

  return (
    <section className="entries__container">
      <div className="entries__top-cont">
        <PageTitle
          styles={{
            justifySelf: "flex-start",
            width: "20%",
          }}
        >
          Time entries
        </PageTitle>
        <Filters />
      </div>
      <section className="entries__middle-cont">
        <Status />
        <TotalHours />
      </section>
      <WeekTable />
    </section>
  );
};

export default Entries;
