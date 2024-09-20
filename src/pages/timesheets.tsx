import React from "react";
import "../styles/timesheets/timesheets.scss";
import PageTitle from "../components/common/page-title";
import Approvals from "../components/timesheets/approvals";
import UserTimesheets from "../components/timesheets/user-timesheets";

const Timesheets: React.FC = () => {
  return (
    <section className="timesheets__container page-padding">
      <PageTitle styles={{ alignSelf: "flex-start" }}>Timesheets</PageTitle>
      <Approvals />
      <UserTimesheets />
    </section>
  );
};
export default Timesheets;
