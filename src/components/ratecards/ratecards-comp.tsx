import React, { useCallback } from "react";
import "../../styles/ratecards/ratecards-comp.scss";
import { Button } from "monday-ui-react-core";
import { Add } from "monday-ui-react-core/icons";
import RatecardsFilters from "./ratecards-filters";
import RatecardsTableBody from "./ratecards-table-body";
import RatecardsTableHead from "./ratecards-table-head";
import { useTheme } from "../../context/theme-context";

const RatecardsComp: React.FC = () => {
  const { setShowRatecardsManageModal, setManageRatecardCategory } = useTheme();

  const handleShowManageRatecardsModal = useCallback((type: string) => {
    setManageRatecardCategory(type);
    setShowRatecardsManageModal(true);
  }, []);
  return (
    <section className="ratecards-comp__container">
      <div className="ratecards-comp__top-cont page-padding">
        <div className="ratecards-comp__top-wrapper">
          {/* <PageTitle styles={{ alignSelf: "flex-start" }}>Ratecards</PageTitle> */}
          {/* <RatecardsFilters /> */}
          <Button
            className="ratecards-comp__button"
            size={Button.sizes.XS}
            kind={Button.kinds.TERTIARY}
            onClick={() => handleShowManageRatecardsModal("default")}
          >
            Default ratecards
          </Button>
          <Button
            className="ratecards-comp__button"
            size={Button.sizes.XS}
            kind={Button.kinds.TERTIARY}
            onClick={() => handleShowManageRatecardsModal("client")}
          >
            Client ratecards
          </Button>
          <Button
            className="ratecards-comp__button"
            size={Button.sizes.XS}
            kind={Button.kinds.TERTIARY}
            onClick={() => handleShowManageRatecardsModal("user")}
          >
            User ratecards
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
