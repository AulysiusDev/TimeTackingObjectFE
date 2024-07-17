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
        <h1 className="approval-requests__title">{person?.name}</h1>
        <h2
          className="approval-requests__requests"
          onClick={() => setExpand(!expand)}
        >
          {person?.reqs?.length} requests{" "}
          {!expand ? <DropdownChevronDown /> : <DropdownChevronUp />}
        </h2>
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
