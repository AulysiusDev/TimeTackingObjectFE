import React, { useState } from "react";
import "../../styles/timesheets/user.scss";
import { Divider } from "monday-ui-react-core";
import {
  DropdownChevronDown,
  DropdownChevronUp,
} from "monday-ui-react-core/icons";
import PendingApprovedRejected from "./pending-approved-rejected";

export default function User({ person }) {
  const [expand, setExpand] = useState(false);
  return (
    <section className="user__container">
      <article
        className="user__content-cont"
        onClick={() => setExpand(!expand)}
      >
        <div className="user__title-cont">
          <h1 className="timesheets__name">{person?.name}</h1>
          <h2 className="user__team">{person?.team}</h2>
        </div>
        {expand ? (
          <DropdownChevronUp className="timesheets__icon" />
        ) : (
          <DropdownChevronDown className="timesheets__icon" />
        )}
        <div className="user__totals-cont">
          <span className="user__total">1</span>
          <span className="user__total">27</span>
          <span className="user__total">2</span>
        </div>
      </article>
      <Divider />
      {expand ? <PendingApprovedRejected person={person} /> : null}
    </section>
  );
}
