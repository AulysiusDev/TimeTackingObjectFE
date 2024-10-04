import React, { useCallback, useState } from "react";
import "../../styles/ratecards/ratecards-manage-modal.scss";
import NewRatecardInputRow from "./new-ratecard-input-row";
import NewRatecardRow from "./new-ratecard-row";
import { useTheme } from "../../context/theme-context";
import { NewRatecard, StoredRatecard } from "../../types";
import { Button } from "monday-ui-react-core";
import StoredRatecardRow from "./stored-ratecard-row";

const columns = [
  "Role",
  "Rate",
  "Department",
  "Currency",
  "Start time",
  "End time",
  "Days",
];

const RatecardsManageModalContent: React.FC = () => {
  const {
    newRatecards,
    setNewRatecards,
    storedRatecards,
    setStoredRatecards,
    addRatecardCategory,
    setAddRatecardCategory,
    setShowAddRatecardCategoryModal,
  } = useTheme();

  const handleShowModal = useCallback(() => {
    setAddRatecardCategory("role");
    setShowAddRatecardCategoryModal(true);
  }, []);
  if (!storedRatecards) {
    return null;
  }

  return (
    <section className="ratecards-manage-modal-content__container">
      <article className="ratecards-manage-modal-content__ratecards_cont">
        <h2>Default ratecards</h2>
        <div className="ratecards-manage-modal-content__table-cont">
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    className="ratecards-manage-modal-content__head-cont"
                    key={column}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {storedRatecards.map((ratecard: StoredRatecard, i) => (
                <StoredRatecardRow ratecard={ratecard} key={ratecard.id} />
              ))}
            </tbody>
          </table>
        </div>
      </article>
      {newRatecards.length ? (
        <article className="ratecards-manage-modal-content__new-ratecards-cont">
          <h2>New ratecards</h2>
          {newRatecards.map((ratecard: NewRatecard, i: number) => (
            <React.Fragment key={i}>
              <NewRatecardRow ratecard={ratecard} index={i} />
            </React.Fragment>
          ))}
        </article>
      ) : null}

      <article className="ratecards-manage-modal-content__new-ratecard-cont">
        <h2>Add new ratecard</h2>
        <NewRatecardInputRow />
      </article>
      <article className="ratecards-manage-modal-content__roles-cont">
        <Button
          kind={Button.kinds.SECONDARY}
          size={Button.sizes.XS}
          onClick={handleShowModal}
        >
          Manage roles
        </Button>
      </article>
    </section>
  );
};

export default RatecardsManageModalContent;
