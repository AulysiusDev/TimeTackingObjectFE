import React from "react";
import "../../styles/people/people-comp.scss";
import PeopleTableHead from "./people-table-head";
import PeopleTableBody from "./people-table-body";
import { Button } from "monday-ui-react-core";
import { Add } from "monday-ui-react-core/icons";
import { usePeople } from "../../context/people-context.jsx";
import PeopleAddModal from "./people-add-modal.jsx";
import PageTitle from "../common/page-title.jsx";

export default function PeopleComp() {
  const { setShowAddPeopleModal } = usePeople();
  return (
    <section className="people-comp__container">
      <PeopleAddModal />
      <Button
        leftIcon={Add}
        className="people-comp__button"
        size={Button.sizes.LARGE}
        onClick={() => setShowAddPeopleModal(true)}
      >
        New
      </Button>
      <PageTitle styles={{ alignSelf: "flex-start" }}>People</PageTitle>
      <article className="people-comp__table-wrapper">
        <table>
          <PeopleTableHead />
          <PeopleTableBody />
        </table>
      </article>
    </section>
  );
}
