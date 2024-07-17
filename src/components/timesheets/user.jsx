import React, { useState } from "react";
import "../../styles/timesheets/user.scss";
import { Divider } from "monday-ui-react-core";
import {
  DropdownChevronDown,
  DropdownChevronUp,
} from "monday-ui-react-core/icons";
import PendingApprovedRejected from "./pending-approved-rejected";

export default function User() {
  const [expand, setExpand] = useState(false);
  return (
    <section className="user__container">
      <article
        className="user__content-cont"
        onClick={() => setExpand(!expand)}
      >
        <h1 className="timesheets__name">
          Steven Jacobs
          {expand ? (
            <DropdownChevronUp className="timesheets__icon" />
          ) : (
            <DropdownChevronDown className="timesheets__icon" />
          )}
        </h1>
        <h2 className="user__team">Marketing</h2>
      </article>
      <Divider />
      {expand ? <PendingApprovedRejected /> : null}
    </section>
  );
}
