import React from "react";
import "../../styles/ratecards/teams.scss";
import { usePeople } from "../../context/people-context";
import PageTitle from "../common/page-title";
import { Divider } from "monday-ui-react-core";
import { teams, nonUserGroups } from "../../utils/data";

const Teams: React.FC = () => {
  const { team, setTeam, setNonUserGroup, nonUserGroup } = usePeople();

  return (
    <section className="teams__container">
      <article className="teams__type-cont page-padding">
        <PageTitle styles={{ position: "fixed" }}>Users</PageTitle>
        <ul className="teams__list">
          {teams.map((department: string, i: number) => (
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
      <article className="teams__type-cont page-padding">
        <PageTitle styles={{ position: "fixed" }}>Non-users</PageTitle>
        <ul className="teams__list">
          {nonUserGroups.map((nonUserGroup: string, i: number) => (
            <li
              className="clickable"
              key={`${nonUserGroup}-xx`}
              style={{ color: team === i ? "var(--primary-color)" : "" }}
              onClick={() => setTeam(i)}
            >
              {nonUserGroup}
            </li>
          ))}
        </ul>
        <Divider
          direction={Divider.directions.VERTICAL}
          className="teams__divider"
        />
      </article>
    </section>
  );
};
export default Teams;
