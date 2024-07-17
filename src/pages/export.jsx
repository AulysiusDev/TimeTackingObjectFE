import React, { useState } from "react";
import "../styles/export/export.scss";
import PageTitle from "../components/common/page-title";
import ExportFilters from "../components/export/export-filters";
import TotalHours from "../components/common/total-hours";
import { Button } from "monday-ui-react-core";
import ExportTable from "../components/export/export-table";

export default function Export() {
  const [generated, setGenerated] = useState(false);

  return (
    <section className="export__container">
      <article className="export__top-cont">
        <PageTitle>Export</PageTitle>
      </article>
      <ExportFilters generated={generated} setGenerated={setGenerated} />

      {generated ? (
        <section className="export__bottom-cont">
          <div className="export__hours-cont">
            <PageTitle styles={{ width: "100%" }}>Selected logs</PageTitle>
            <TotalHours />
          </div>
          <ExportTable />
        </section>
      ) : null}
    </section>
  );
}
