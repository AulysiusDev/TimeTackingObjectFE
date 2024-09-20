import React, { useCallback } from "react";
import "../../styles/ratecards/teams.scss";
import { usePeople } from "../../context/people-context";
import PageTitle from "../common/page-title";
import { Divider } from "monday-ui-react-core";
import { Menu } from "monday-ui-react-core/icons";
import { teams, clients } from "../../utils/data";
import { useTheme } from "../../context/theme-context";

const Teams: React.FC = () => {
  const { team, setTeam, setClient, client } = usePeople();
  const {
    setAddRatecardCategory,
    setShowAddRatecardCategoryModal,
    ratecardCategories,
  } = useTheme();

  const handleClickAdd = useCallback((category: string) => {
    setAddRatecardCategory(category);
    setShowAddRatecardCategoryModal(true);
  }, []);
  return (
    <div className="teams__section-wrapper">
      <section className="teams__container">
        <article className="teams__type-cont page-padding">
          <div className="teams__title-cont">
            <PageTitle>Users</PageTitle>
            <Menu
              className="teams__add-icon clickable"
              clickable
              onClick={() => handleClickAdd("team")}
            />
          </div>
          <ul className="teams__list">
            {ratecardCategories.team.map((department: string, i: number) => (
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
        <article className="teams__type-cont page-padding">
          <div className="teams__title-cont">
            <PageTitle>Clients</PageTitle>
            <Menu
              className="teams__add-icon"
              clickable
              onClick={() => handleClickAdd("client")}
            />
          </div>
          <ul className="teams__list">
            {ratecardCategories.client.map((clients: string, i: number) => (
              <li
                className="clickable"
                key={`${clients}-xx`}
                style={{ color: team === i ? "var(--primary-color)" : "" }}
                onClick={() => setTeam(i)}
              >
                {clients}
              </li>
            ))}
          </ul>
        </article>
        <Divider
          direction={Divider.directions.VERTICAL}
          className="teams__divider"
        />
      </section>
    </div>
  );
};
export default Teams;
