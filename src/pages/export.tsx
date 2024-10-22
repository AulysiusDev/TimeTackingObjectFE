import React, { useState } from "react";
import "../styles/export/export.scss";
import ExportFilters from "../components/export/export-filters";
import TotalHours from "../components/common/total-hours";
import ExportTable from "../components/export/export-table";

const Export: React.FC = () => {
  const [generated, setGenerated] = useState<boolean>(false);

  return (
    <section className="export__container">
      <div className="export__side-cont">
      <ExportFilters generated={generated} setGenerated={setGenerated} />
      </div>
    <div className="export__content-cont">
    <div className="export__hours-cont">
            <TotalHours />
      </div>
          <ExportTable />
    </div>
    </section>
  );
};
export default Export;
