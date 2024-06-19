import React from "react";
import "../../styles/total-hours.scss";
import HoursCount from "./hours-count";

export default function TotalHours() {
  return (
    <section className="total-hours__container">
      <HoursCount title={"Total hours"}>1h 1m</HoursCount>
      <HoursCount title={"Billable hours"}>1h 1m</HoursCount>
    </section>
  );
}
