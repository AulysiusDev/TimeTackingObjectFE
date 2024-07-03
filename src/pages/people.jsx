import React from "react";
import "../styles/people.scss";
import { Divider } from "monday-ui-react-core";
import { usePeople } from "../context/people-context";

const data = ["All", "Finance", "Marketing", "Sales", "Operations", "HR", "IT"];

export default function People() {
  const { team, setTeam } = usePeople();
  console.log({ team });
  return (
    <div className="people__container">
      <article className="people__top-cont"></article>
      <section className="people__content-cont">
        <article className="people__teams-cont">
          <h1 className="people__title">Teams</h1>
          <ul className="people__teams-list">
            {data.map((department, i) => (
              <li
                className="clickable"
                key={department}
                style={{ color: team === i ? "var(--primary-color)" : "" }}
                onClick={() => setTeam(i)}
              >
                {department}
              </li>
            ))}
          </ul>
        </article>
        <Divider
          direction={Divider.directions.VERTICAL}
          className="people__divider"
        />
        <article className="people__people-cont"></article>
      </section>
    </div>
  );
}
