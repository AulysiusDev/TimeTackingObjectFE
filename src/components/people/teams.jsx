import React, { useEffect } from "react";
import "../../styles/people/teams.scss";
import { usePeople } from "../../context/people-context";
import PageTitle from "../common/page-title";
import { Divider } from "monday-ui-react-core";
import { teams } from "../../utils/data";

export default function Teams() {
  const { team, setTeam } = usePeople();

  return (
    <article className="teams__container">
      <PageTitle styles={{ position: "fixed" }}>Teams</PageTitle>
      <ul className="teams__list">
        {teams.map((department, i) => (
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
      <Divider
        direction={Divider.directions.VERTICAL}
        className="teams__divider"
      />
    </article>
  );
}
