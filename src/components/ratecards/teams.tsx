import React, { useCallback, useState } from "react";
import "../../styles/ratecards/teams.scss";
import PageTitle from "../common/page-title";
import { Button, Divider } from "monday-ui-react-core";
import { Collapse, Menu, MoreActions } from "monday-ui-react-core/icons";
import { useTheme } from "../../context/theme-context";
import { RatecardCategories } from "../../types";

const Teams: React.FC = () => {
  const {
    setRatecardCategory,
    setShowRatecardCategoryModal,
    ratecardCategories,
    setRatecardCategories,
  } = useTheme();

  const [showMore, setShowMore] = useState({
    team: 8,
    client: 8,
  });
console.log({ratecardCategories})
  const handleClickAdd = useCallback((category: string) => {
    setRatecardCategory(category);
    setShowRatecardCategoryModal(true);
  }, []);

  const handleSelect = useCallback((value: string, category: string) => {
    console.log({value})
    console.log({category})


    setRatecardCategories((prev: RatecardCategories) => {
      // const newCategory = {
      //   ...prev[category],
      //   value: [
      //     ...
      //   ]
      //     [value]:!prev[category][value]?.[value],
        
      // };
      const newCategory = {
        ...prev[category], // version
        value: {
          ...prev[category].value,
          [value] : !prev[category].value[value]
        }
      };
      console.log({newCategory})
      const otherCategory = category === "team" ? "client" : "team";

      const shouldReset = Object.values(prev[otherCategory].value).some(
        (selected) => selected
      );
      if (shouldReset) {
        console.log({
          ...prev,
          [category]: newCategory,
          [otherCategory]: {
            ...prev[otherCategory],
            value: Object.keys(prev[otherCategory].value).reduce(
              (acc, key) => {
                acc[key] = false;
                return acc;
              },
              {}
            ),
          }
        })
        console.log({
          ...prev,
          [category]: newCategory,
          [otherCategory]: {
            ...prev[otherCategory],
            value: Object.keys(prev[otherCategory].value).reduce(
              (acc, key) => {
                acc[key] = false;
                return acc;
              },
              {}
            ),
          }
        })
        return {
          ...prev,
          [category]: newCategory,
          [otherCategory]: {
            ...prev[otherCategory],
            value: Object.keys(prev[otherCategory].value).reduce(
              (acc, key) => {
                acc[key] = false;
                return acc;
              },
              {}
            ),
          }
        };
      }
      return {
        ...prev,
        [category]: 
         newCategory
      };
    });
  }, []);

  const handleShowMore = useCallback(
    (category: string) => {
      setShowMore((prev) => ({
        ...prev,
        [category]:
           prev[category] === 8
              ? Object.keys(ratecardCategories[category].value).length
              : 8,
      }));
    },
    [ratecardCategories]
  );

  const handleClickAll = useCallback(
    (objKey: string) => {
      const newObject = Object.keys(ratecardCategories[objKey].value).reduce(
        (acc, key) => {
          acc[key] = true;
          return acc;
        },
        {}
      );
      let otherKey = "team";
      if (objKey === "team") {
        otherKey = "client";
      }
      const newOtherObject = Object.keys(ratecardCategories[otherKey].value).reduce(
        (acc, key) => {
          acc[key] = false;
          return acc;
        },
        {}
      );

      setRatecardCategories((prev: RatecardCategories) => ({
        ...prev,
        [objKey]: {
          ...prev[objKey],
          value: newObject
        },
        [otherKey]: {
          ...prev[otherKey],
          value: newOtherObject
        },
      }));
    },
    [ratecardCategories]
  );

  return (
    <div className="teams__section-wrapper">
      <section className="teams__container">
        <article className="teams__type-cont page-padding">
          <div className="teams__title-cont">
            <span onClick={() => handleClickAll("team")}>
              <PageTitle>Users</PageTitle>
            </span>
            <Menu
              className="teams__add-icon clickable"
              onClick={() => handleClickAdd("team")}
            />
          </div>
          <ul className="teams__list">
            {Object.entries(ratecardCategories.team.value)
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
          {Object.keys(ratecardCategories.team.value).length > 8 ? (
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
            <span onClick={() => handleClickAll("client")}>
              <PageTitle>Clients</PageTitle>
            </span>
            <Menu
              className="teams__add-icon"
              clickable
              onClick={() => handleClickAdd("client")}
            />
          </div>
          <ul className="teams__list">
            {Object.entries(ratecardCategories.client.value)
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
          {Object.keys(ratecardCategories.client.value).length > 8 ? (
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
