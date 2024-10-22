import React from "react";
import "../../styles/common/total-hours.scss";
import HoursCount from "./hours-count.jsx";

export default function TotalHours() {
  return (
    <section className="total-hours__container">
        <HoursCount title={"Non-billable"}>1h 1m</HoursCount>
        <HoursCount title={"Billable"}>1h 1m</HoursCount>
        <HoursCount title={"Total"}>1h 1m</HoursCount>
    </section>
  );
}
