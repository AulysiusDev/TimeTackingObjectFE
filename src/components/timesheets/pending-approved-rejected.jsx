import React, { useState } from "react";
import "../../styles/timesheets/pending-approved-rejected.scss";
import { Divider } from "monday-ui-react-core";
import { Collapse, Expand } from "monday-ui-react-core/icons";

const sections = [
  {
    title: "pending",
  },
  {
    title: "approved",
  },
  {
    title: "rejected",
  },
];

export default function PendingApprovedRejected({ person }) {
  const [expand, setExpand] = useState([]);
  return (
    <section className="par__container">
      {sections.map((sect) => (
        <>
          <article
            className="par__section-cont"
            key={sect.title}
            style={expand.includes(sect) ? { alignItems: "flex-start" } : {}}
          >
            <div
              className="par__title-cont"
              onClick={() =>
                expand.includes(sect)
                  ? setExpand(expand.filter((el) => el !== sect))
                  : setExpand([...expand, sect])
              }
            >
              <h2 className="par__title">{sect?.title}</h2>
              {person[sect?.title].length <= 8 ? null : !expand.includes(
                  sect
                ) ? (
                <Expand className="par__icon" />
              ) : (
                <Collapse className="par__icon" />
              )}
            </div>
            <div className="par__content-cont">
              {expand.includes(sect)
                ? person[sect?.title].map((date) => (
                    <p className="par__date">{date}</p>
                  ))
                : person[sect?.title]
                    .slice(0, 8)
                    .map((date) => <p className="par__date">{date}</p>)}
              {person[sect?.title].length > 8 && !expand ? (
                <span>...</span>
              ) : null}
            </div>
          </article>
        </>
      ))}
      <Divider />
    </section>
  );
}
