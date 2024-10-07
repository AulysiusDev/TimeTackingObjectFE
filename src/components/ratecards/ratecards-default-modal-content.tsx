import React, { useCallback, useState } from "react";
import "../../styles/ratecards/ratecards-manage-modal.scss";
import NewRatecardInputRow from "./new-ratecard-input-row";
import NewRatecardRow from "./new-ratecard-row";
import { useTheme } from "../../context/theme-context";
import { NewRatecard, StoredRatecard } from "../../types";
import { Button } from "monday-ui-react-core";
import StoredRatecardRow from "./stored-ratecard-row";
import { columns } from "../../utils/data";

const RatecardsDefaultModalContent: React.FC = () => {
  const {
    newRatecards,
    storedRatecards,
    setRatecardCategory,
    setShowRatecardCategoryModal,
  } = useTheme();

  const handleShowModal = useCallback(() => {
    setRatecardCategory("role");
    setShowRatecardCategoryModal(true);
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
                {columns.map((column: string) => (
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
              {storedRatecards.map((ratecard: StoredRatecard) => (
                <React.Fragment key={ratecard.id}>
                  <StoredRatecardRow ratecard={ratecard} />
                </React.Fragment>
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

export default RatecardsDefaultModalContent;
