import React from "react";
import "../../styles/timesheets/user-timesheets.scss";
import User from "./user";

const data = [
  {
    name: "Steven Jacobs",
    pending: ["15/07/24"],
    approved: ["15/07/24", "08/07/24", "08/07/24"],
    rejected: ["15/07/24", "08/07/24", "08/07/24"],
  },
  {
    name: "Azif Hidayath",
    pending: ["15/07/24"],
    approved: ["15/07/24", "08/07/24", "08/07/24"],
    rejected: ["15/07/24", "08/07/24", "08/07/24"],
  },
  {
    name: "Nicolas Schnitzel",
    pending: ["15/07/24"],
    approved: ["15/07/24", "08/07/24", "08/07/24"],
    rejected: ["15/07/24", "08/07/24", "08/07/24"],
  },
];

export default function UserTimesheets() {
  return (
    <div className="user-timesheets__container">
      <h1 className="timesheets__subheader">Timesheets</h1>
      <section className="user-timesheets__content-cont">
        {data.map((person) => (
          <User person={person} />
        ))}
      </section>
    </div>
  );
}
