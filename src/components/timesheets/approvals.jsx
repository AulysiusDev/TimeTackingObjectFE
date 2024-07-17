import React from "react";
import "../../styles/timesheets/approvals.scss";
import { Button, Divider } from "monday-ui-react-core";
import ApprovalRequests from "./approval-requests";

// We will store in an object called "Approvals", where each key is a userID and each value is an array of start dates of timesheets to be approved. If array is empty, won't put it here.
// If approved, date will be removed from the array.
// If the user makes a change to a log, all logs in that time period will be turned to not yet submitted (status 0), and the week will need to get approved again.

const approvalsArr = [
  {
    name: "Steven Jacobs",
    reqs: ["15/07/24", "08/07/24", "08/07/24"],
  },
  {
    name: "Azif Hidayath",
    reqs: ["15/07/24", "08/07/24", "08/07/24"],
  },
  {
    name: "Nicolas Schnitzel",
    reqs: ["15/07/24", "08/07/24", "08/07/24"],
  },
];

export default function Approvals() {
  return (
    <section className="approvals__container">
      <div className="approvals__top-cont">
        <h2 className="timesheets__subheader">Approvals</h2>
        <article className="approvals__buttons-cont">
          <Button color={Button.colors.POSITIVE}>Approve all</Button>
          <Button color={Button.colors.NEGATIVE}>Reject all</Button>
        </article>
      </div>
      <article className="approvals__content-cont">
        {approvalsArr.map((person, i) => (
          <>
            <ApprovalRequests key={person.name} person={person} />
            <Divider />
          </>
        ))}
      </article>
    </section>
  );
}
