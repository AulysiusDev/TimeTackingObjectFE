import React, { useState } from "react";
import "../styles/export/export.scss";
import PageTitle from "../components/common/page-title";
import ExportFilters from "../components/export/export-filters";
import TotalHours from "../components/common/total-hours";
import { Button } from "monday-ui-react-core";

export default function Export() {
  const [generated, setGenerated] = useState(false);
  return (
    <section className="export__container">
      <article className="export__top-cont">
        <PageTitle styles={{ width: "11%", marginTop: "10px" }}>
          Export
        </PageTitle>
        <ExportFilters />
      </article>
      <article className="export__button-cont">
        <Button
          onClick={() => setGenerated(!generated)}
          size={Button.sizes.LARGE}
        >
          {generated ? "Re-Generate" : "Generate"}
        </Button>
        <Button
          onClick={() => setGenerated(!generated)}
          disabled={!generated}
          kind={Button.kinds.SECONDARY}
          size={Button.sizes.LARGE}
        >
          Export
        </Button>
      </article>
      {generated ? (
        <section className="export__hours-cont">
          <PageTitle styles={{ width: "100%" }}>Selected logs</PageTitle>
          <TotalHours />
        </section>
      ) : null}
    </section>
  );
}
