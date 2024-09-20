import React from "react";
import "../styles/ratecards/ratecards.scss";
import Teams from "../components/ratecards/teams";
import RatecardsComp from "../components/ratecards/ratecards-comp";

const People: React.FC = () => {
  return (
    <div className="ratecards__container">
      <section className="ratecards__content-cont">
        <Teams />
        <RatecardsComp />
      </section>
    </div>
  );
};
export default People;
