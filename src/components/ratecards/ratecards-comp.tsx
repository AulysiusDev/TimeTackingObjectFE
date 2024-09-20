import React from "react";
import "../../styles/ratecards/ratecards-comp.scss";
import { Button } from "monday-ui-react-core";
import { Add } from "monday-ui-react-core/icons";
import { usePeople } from "../../context/people-context.jsx";
import RatecardsFilters from "./ratecards-filters";
import RatecardsTableBody from "./ratecards-table-body";
import RatecardsTableHead from "./ratecards-table-head";
import RatecardsAddModal from "./ratecards-add-modal";

const RatecardsComp: React.FC = () => {
  const { setShowAddRatecardsModal } = usePeople();
  return (
    <section className="ratecards-comp__container">
      <div className="ratecards-comp__top-cont page-padding">
        <RatecardsAddModal />
        <div className="ratecards-comp__top-wrapper">
          {/* <PageTitle styles={{ alignSelf: "flex-start" }}>Ratecards</PageTitle> */}
          <RatecardsFilters />
          <Button
            leftIcon={Add}
            className="ratecards-comp__button"
            size={Button.sizes.MEDIUM}
            onClick={() => setShowAddRatecardsModal(true)}
          >
            New
          </Button>
        </div>
        <table style={{ width: "97.5%" }}>
          <RatecardsTableHead />
        </table>
      </div>
      <section className="ratecards-comp__table-wrapper">
        {/* <h1 className="people-comp__team-title">{teams[team]}</h1> */}
        <table>
          <RatecardsTableBody />
        </table>
      </section>
    </section>
  );
};
export default RatecardsComp;
