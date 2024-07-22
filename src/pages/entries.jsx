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
import { isEqual } from "date-fns";

const monday = mondaySdk();

export default function Entries() {
  const { theme, setTheme, context, setContext } = useTheme();
  console.log("Component rendered");
  function changeTheme(theme) {
    if (theme === "dark") {
      document.querySelector("body").setAttribute("data-theme", "dark");
      setTheme("dark");
    } else if (theme === "black") {
      document.querySelector("body").setAttribute("data-theme", "black");
      setTheme("black");
    } else if (theme === "light" || !theme) {
      document.querySelector("body").setAttribute("data-theme", "light");
      setTheme("light");
    }
  }

  async function fetchContextAndEntries() {
    monday.listen("context", async (res) => {
      console.log({ res });
      setContext((previousContext) =>
        isEqual(previousContext, res.data) ? previousContext : res.data
      );
      changeTheme(res.data.theme);
      const logs = await fetchUserLogs(res.data.user?.id);
    });
  }

  useEffect(() => {
    fetchContextAndEntries();
  }, []);

  return (
    <section className="entries__container">
      <div className="entries__top-cont">
        <PageTitle
          styles={{
            justifySelf: "flex-start",
            width: "20%",
            // marginTop: "20px",
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
