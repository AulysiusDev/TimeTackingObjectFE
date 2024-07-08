import React from "react";
import "../../styles/people/teams.scss";
import { usePeople } from "../../context/people-context";
import PageTitle from "../common/page-title";

const data = ["All", "Finance", "Marketing", "Sales", "Operations", "HR", "IT"];

export default function Teams() {
  const { team, setTeam } = usePeople();
  return (
    <article className="teams__container">
      <PageTitle>Teams</PageTitle>
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
