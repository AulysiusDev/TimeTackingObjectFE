import React from "react";
import "../../styles/people/teams.scss";
import { usePeople } from "../../context/people-context";

const data = ["All", "Finance", "Marketing", "Sales", "Operations", "HR", "IT"];

export default function Teams() {
  const { team, setTeam } = usePeople();
  return (
    <article className="teams__container">
      <h1 className="people__title">Teams</h1>
      <ul className="teams__list">
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
  );
}
