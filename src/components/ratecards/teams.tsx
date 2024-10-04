import React, { useCallback, useState } from "react";
import "../../styles/ratecards/teams.scss";
import { usePeople } from "../../context/people-context";
import PageTitle from "../common/page-title";
import { Button, Divider, IconButton } from "monday-ui-react-core";
import { Collapse, Menu, MoreActions } from "monday-ui-react-core/icons";
import { useTheme } from "../../context/theme-context";
import { RatecardCategories, RatecardCategory } from "../../types";

const Teams: React.FC = () => {
  const { team, setTeam, setClient, client } = usePeople();
  const {
    setAddRatecardCategory,
    setShowAddRatecardCategoryModal,
    ratecardCategories,
    setRatecardCategories,
  } = useTheme();

  const [showMore, setShowMore] = useState({
    team: 8,
    client: 8,
  });

  const handleClickAdd = useCallback((category: string) => {
    setAddRatecardCategory(category);
    setShowAddRatecardCategoryModal(true);
  }, []);

  const handleSelect = useCallback((value: string, category: string) => {
    setRatecardCategories((prev: RatecardCategories) => {
      const newCategory = {
        ...prev[category],
        [value]: !prev[category]?.[value],
      };

      const otherCategory = category === "team" ? "client" : "team";

      const shouldReset = Object.values(prev[otherCategory]).some(
        (selected) => selected
      );
      if (shouldReset) {
        return {
          ...prev,
          [category]: newCategory,
          [otherCategory]: Object.keys(prev[otherCategory]).reduce(
            (acc, key) => {
              acc[key] = false;
              return acc;
            },
            {}
          ),
        };
      }
      return {
        ...prev,
        [category]: newCategory,
      };
    });
  }, []);

  const handleShowMore = useCallback((category: string) => {
    setShowMore((prev) => ({
      ...prev,
      [category]:
        prev[category] === 8
          ? Object.keys(ratecardCategories[category]).length
          : 8,
    }));
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
            {Object.entries(ratecardCategories.team)
              .slice(0, showMore.team)
              .map(([department, selected]) => (
                <li
                  className="clickable"
                  key={department}
                  style={{ color: selected ? "var(--primary-color)" : "" }}
                  onClick={() => handleSelect(department, "team")}
                >
                  {department}
                </li>
              ))}
          </ul>
          {Object.keys(ratecardCategories.team).length > 8 ? (
            <div className="teams__showMore-cont">
              <Button
                onClick={() => handleShowMore("team")}
                size={Button.sizes.XXS}
                kind={Button.kinds.TERTIARY}
                rightIcon={showMore.team === 8 ? MoreActions : Collapse}
              >
                Show more
              </Button>
            </div>
          ) : null}
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
            {Object.entries(ratecardCategories.client)
              .slice(0, showMore.client)
              .map(([name, selected]) => (
                <li
                  className="clickable"
                  key={name}
                  style={{ color: selected ? "var(--primary-color)" : "" }}
                  onClick={() => handleSelect(name, "client")}
                >
                  {name}
                </li>
              ))}
          </ul>
          {Object.keys(ratecardCategories.client).length > 8 ? (
            <div className="teams__showMore-cont">
              <Button
                onClick={() => handleShowMore("client")}
                size={Button.sizes.XXS}
                kind={Button.kinds.TERTIARY}
                rightIcon={showMore.client === 8 ? MoreActions : Collapse}
              >
                Show more
              </Button>
            </div>
          ) : null}
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
