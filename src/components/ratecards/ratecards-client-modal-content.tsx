import React, { useCallback, useMemo } from "react";
import "../../styles/ratecards/ratecards-client-modal-content.scss";
import "../../styles/ratecards/ratecards-manage-modal.scss";
import { useTheme } from "../../context/theme-context";
import { addColumns } from "../../utils/data";
import StoredRatecardInputRow from "./stored-ratecard-input-row";
import { ClientDetails, StoredRatecard } from "../../types";
import { Dropdown } from "monday-ui-react-core";
import { processDropdownOptions } from "../../utils/helpers";
import ClientDetailsTable from "./client-details-table";
import { Edit, Check, CloseSmall } from "monday-ui-react-core/icons";

const RatecardsClientModalContent: React.FC = () => {
  const { storedRatecards, ratecardCategories, clientDetails, setClientDetails } = useTheme();

  const processedClientOptions = useMemo(() => {
    return processDropdownOptions(Object.keys(ratecardCategories.client))
  },[ratecardCategories.client])

  const handleConfirm = useCallback((confirm:boolean) => {
    setClientDetails((prev) => ({...prev, showEdit: false}))
  },[])

  const handleDropdownSelect = useCallback((e) => {
    setClientDetails((prev:ClientDetails) => ({
      ...prev,
      selected: e
    }))
  },[])
console.log({clientDetails})
  return (
    <section className="ratecards-client-modal-content__container">
      <article className="ratecards-client-modal-content__client-ratecard-cont">
        <div className="ratecards-client-modal-content__client-dropdown-wrapper">
          <Dropdown
            className="ratecards-client-modal-content__client-dropdown"
            size={Dropdown.sizes.XS}
            searchable
            options={processedClientOptions}
            menuPosition={Dropdown.menuPositions.FIXED}
            onChange={handleDropdownSelect}
          />
          { !clientDetails.selected ? 
          null :
            clientDetails.showEdit ? 
            <>
              <Check color="var(--positive-color)" className="icon" onClick={() => handleConfirm(true)}/>
              <CloseSmall color="var(--negative-color)" className="icon" onClick={() => handleConfirm(false)}/>
            </>
            :
          <Edit className="icon" onClick={() => setClientDetails((prev:ClientDetails) => ({...prev, showEdit: !prev.showEdit}))}/>
          }
        </div>
        <ClientDetailsTable/>
      </article>
      <div className="ratecards-client-modal-content__ratecards-cont">
        <article className="ratecards-manage-modal-content__ratecards_cont">
          <h2>Default ratecards</h2>
          <div className="ratecards-manage-modal-content__table-cont">
            <table>
              <thead>
                <tr>
                  {addColumns.map((column: string) => (
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
