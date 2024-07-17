import React from "react";
import "../../styles/people/people-comp.scss";
import PeopleTableHead from "./people-table-head";
import PeopleTableBody from "./people-table-body";
import { Button } from "monday-ui-react-core";
import { Add } from "monday-ui-react-core/icons";
import { usePeople } from "../../context/people-context.jsx";
import PeopleAddModal from "./people-add-modal.jsx";
import PageTitle from "../common/page-title.jsx";
import PeopleFilters from "./people-filters.jsx";

export default function PeopleComp() {
  const { setShowAddPeopleModal, team } = usePeople();
  return (
    <section className="people-comp__container">
      <div className="people-comp__top-cont page-padding">
        <PeopleAddModal />
        <div className="people-comp__top-wrapper">
          {/* <PageTitle styles={{ alignSelf: "flex-start" }}>People</PageTitle> */}
          <PeopleFilters />
          <Button
            leftIcon={Add}
            className="people-comp__button"
            size={Button.sizes.MEDIUM}
            onClick={() => setShowAddPeopleModal(true)}
          >
            New
          </Button>
        </div>
        <table style={{ width: "97.5%" }}>
          <PeopleTableHead />
        </table>
      </div>
      <section className="people-comp__table-wrapper">
        {/* <h1 className="people-comp__team-title">{teams[team]}</h1> */}
        <table>
          <PeopleTableBody />
        </table>
      </section>
    </section>
  );
}
