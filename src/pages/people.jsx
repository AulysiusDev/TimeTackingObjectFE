import React from "react";
import "../styles/people/people.scss";
import { Divider } from "monday-ui-react-core";
import Teams from "../components/people/teams";
import PeopleComp from "../components/people/people-comp";

export default function People() {
  return (
    <div className="people__container">
      <section className="people__content-cont">
        <Teams />
        <Divider
          direction={Divider.directions.VERTICAL}
          className="people__divider"
        />
        <PeopleComp />
      </section>
    </div>
  );
}
