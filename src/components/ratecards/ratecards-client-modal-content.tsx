import React from "react";
import "../../styles/ratecards/ratecards-client-modal-content.scss";
import "../../styles/ratecards/ratecards-manage-modal.scss";
import { useTheme } from "../../context/theme-context";
import { columns } from "../../utils/data";
import StoredRatecardInputRow from "./stored-ratecard-input-row";
import { StoredRatecard } from "../../types";

const RatecardsClientModalContent: React.FC = () => {
  const { storedRatecards } = useTheme();
  console.log({ storedRatecards });
  return (
    <section className="ratecards-client-modal-content__container">
      <div className="ratecards-client-modal-content__ratecards-cont">
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
                    <StoredRatecardInputRow ratecard={ratecard} />
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  );
};

export default RatecardsClientModalContent;
