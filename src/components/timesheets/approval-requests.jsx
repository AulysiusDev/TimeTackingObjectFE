import React, { useState } from "react";
import "../../styles/timesheets/approval-requests.scss";
import { Button } from "monday-ui-react-core";
import {
  DropdownChevronDown,
  DropdownChevronUp,
} from "monday-ui-react-core/icons";
import ApprovalRequest from "./approval-request";

export default function ApprovalRequests({ person }) {
  const [expand, setExpand] = useState(false);
  return (
    <section className="approval-requests__container">
      <section className="approval-requests__top-cont">
        <h1 className="timesheets__name">{person?.name}</h1>
        <div className="timesheets__middle-cont">
          <h2
            className="approval-requests__requests"
            onClick={() => setExpand(!expand)}
          >
            {person?.reqs?.length} requests{" "}
          </h2>
          {!expand ? (
            <DropdownChevronDown className="timesheets__icon" />
          ) : (
            <DropdownChevronUp className="timesheets__icon" />
          )}
        </div>
        <Button>Approve all {person.reqs.length} requests</Button>
      </section>
      {expand ? (
        <section className="approval-requests__requests-cont">
          {person.reqs.map((date) => (
            <ApprovalRequest date={date} />
          ))}
        </section>
      ) : null}
    </section>
  );
}
