import React from "react";
import "../styles/timesheets/timesheets.scss";
import PageTitle from "../components/common/page-title.jsx";
import Approvals from "../components/timesheets/approvals.jsx";

export default function Timesheets() {
  return (
    <section className="timesheets__container page-padding">
      <PageTitle styles={{ alignSelf: "flex-start" }}>Timesheets</PageTitle>
      <Approvals />
    </section>
  );
}
