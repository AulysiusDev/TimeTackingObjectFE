import React, { useEffect } from "react";
import "../styles/entries/entries.scss";
import Filters from "../components/common/filters";
import TotalHours from "../components/common/total-hours";
import PageTitle from "../components/common/page-title";
import WeekTable from "../components/entries/week-table";
import Status from "../components/entries/status";
import { fetchUserLogs } from "../utils/utils";
import { useTheme } from "../context/theme-context";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

export default function Entries() {
  const { context } = useTheme();

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
}
