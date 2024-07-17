import React from "react";
import "../../styles/entries/status.scss";
import { Button } from "monday-ui-react-core";

export default function Status() {
  return (
    <section className="status__container">
      <article className="status__text-cont">
        <h1 className="status__status-text">
          Status: <span className="status__status-status">Open</span>
        </h1>
      </article>
      <article className="status__text-cont">
        <Button size={Button.sizes.MEDIUM} kind={Button.kinds.SECONDARY}>
          Submit timesheet
        </Button>
      </article>
    </section>
  );
}
