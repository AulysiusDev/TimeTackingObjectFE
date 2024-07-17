import React, { useState } from "react";
import "../../styles/timesheets/pending-approved-rejected.scss";
import { Divider } from "monday-ui-react-core";
import {
  DropdownChevronDown,
  DropdownChevronUp,
} from "monday-ui-react-core/icons";

const sections = [
  {
    title: "Pending",
  },
  {
    title: "Approved",
  },
  {
    title: "Rejected",
  },
];

export default function PendingApprovedRejected() {
  const [expand, setExpand] = useState([]);
  return (
    <div className="par__container">
      {sections.map((sect) => (
        <>
          <article
            className="par__section-cont"
            onClick={() =>
              expand.includes(sect)
                ? setExpand(expand.filter((el) => el !== sect))
                : setExpand([...expand, sect])
            }
          >
            <h2 className="par__title">
              <span>{sect?.title}</span>
              {!expand.includes(sect) ? (
                <DropdownChevronDown className="timesheets__icon" />
              ) : (
                <DropdownChevronUp className="timesheets__icon" />
              )}
            </h2>
            {expand.includes(sect) ? (
              <div className="par__content-cont">
                <p className="par__date">15/07/24</p>
              </div>
            ) : null}
          </article>
        </>
      ))}
      <Divider />
    </div>
  );
}
