import React from "react";
import "../../styles/timesheets/approval-request.scss";
import { Button, Icon, Link } from "monday-ui-react-core";
import { Check, CloseSmall } from "monday-ui-react-core/icons";

export default function ApprovalRequest({ date }) {
  return (
    <article className="approval-request__container">
      <Link
        text={date}
        href="/"
        target={Link.targets.SELF}
        className="approval-request__title"
        // OnClick set the states to show that timesheet on the entries page
      >
        View
      </Link>
      <div className="approval-request__buttons-cont">
        <Check
          color="var(--positive-color)"
          className="approval__request-icon"
        />
        <CloseSmall
          color="var(--negative-color)"
          className="approval__request-icon"
        />
      </div>
    </article>
  );
}
