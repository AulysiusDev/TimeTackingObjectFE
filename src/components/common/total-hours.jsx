import React from "react";
import "../../styles/common/total-hours.scss";
import HoursCount from "./hours-count";
import InputContainer from "../common/input-container.jsx";
import { ButtonGroup } from "monday-ui-react-core";
import { totalHoursOptions } from "../../utils/data.js";
import PageTitle from "./page-title.jsx";

export default function TotalHours() {
  return (
    <section className="total-hours__container">
      <PageTitle styles={{ justifySelf: "flex-start", width: "100%" }}>
        Time entries
      </PageTitle>
      <article className="total-hours__filters-cont">
        <InputContainer>
          <ButtonGroup options={totalHoursOptions} fullWidth value={0} />
        </InputContainer>
      </article>
      <article className="total-hours__hours-cont">
        <HoursCount title={"Total hours"}>1h 1m</HoursCount>
        <HoursCount title={"Billable hours"}>1h 1m</HoursCount>
      </article>
    </section>
  );
}
