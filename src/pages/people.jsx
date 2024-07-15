import React from "react";
import "../styles/people/people.scss";
import Teams from "../components/people/teams";
import PeopleComp from "../components/people/people-comp";

export default function People() {
  return (
    <div className="people__container">
      <section className="people__content-cont">
        <Teams />
        <PeopleComp />
      </section>
    </div>
  );
}
