import React, { useCallback, useMemo, useState } from "react";
import "../../styles/export/export-filters.scss";
import { Button, ButtonGroup, Checkbox, DatePicker, Dialog, DialogContentContainer, Divider, Dropdown } from "monday-ui-react-core";
import { totalHoursOptions } from "../../utils/data";
import { useTheme } from "../../context/theme-context";
import { RangeDate } from "monday-ui-react-core/dist/types/components/DatePicker/types.d.ts";
import { processDropdownOptions } from "../../utils/helpers";

const ExportFilters: React.FC = () =>  {
  const [dates, setDates] = useState({startDate: null, endDate: null});
  const { mondayData, ratecardCategories } = useTheme();
console.log({ratecardCategories})
  const memorizedUserOptions = useMemo(() => {
    return mondayData.users;
  }, [mondayData.users]);
console.log({memorizedUserOptions})
  const dateString = useMemo(() => {
    if(!dates.startDate && !dates.endDate){
      return "Select date range"
    }
    return `${dates.startDate ? new Date(dates.startDate).toLocaleDateString() : ""} - ${dates.endDate ? new Date(dates.endDate).toLocaleDateString() : ""}`
  },[dates])

  const memorizedTeamsOptions = useMemo(() => {
    return processDropdownOptions(Object.keys(ratecardCategories.team.value))
  },[ratecardCategories])

  return (
    <section className="export-filters__container">
      <div className="export-filters__dropdowns-cont">
        {/* @ts-ignore */}
        <Dialog showTrigger={["click"]} hideTrigger={["clickoutside"]}  position="right" content={<DialogContentContainer  className="export-filters__dialog-content-cont">
        <DatePicker className="export-filters__date-picker" range onPickDate={(e: RangeDate) => setDates(e)} data-testid="date-picker" endDate={dates.endDate} date={dates.startDate}/>
          </DialogContentContainer>} >
      <Button kind={Button.kinds.SECONDARY} className="export-filters__date-button">{dateString}</Button>
        </Dialog>
        <ButtonGroup options={totalHoursOptions} value={0} size={ButtonGroup.sizes.XS} className="export-filters__button-group"/>
        <Dropdown
          className="export-filters__dropdown"
          placeholder="Filter users"
          size={Dropdown.sizes.XS}
          options={memorizedUserOptions}
          multi
          multiline
        />
        <Dropdown
          className="export-filters__dropdown"
          placeholder="Filter teams"
          size={Dropdown.sizes.XS}
          options={memorizedTeamsOptions}
          multi
          multiline
        />
        <Dropdown
          className="export-filters__dropdown"
          placeholder="Filter workspace"
          size={Dropdown.sizes.XS}
        />
          <Dropdown
            className="export-filters__dropdown"
            placeholder="Filter boards"
            size={Dropdown.sizes.XS}
            multi
            multiline
          />
          <Dropdown
            className="export-filters__dropdown"
            placeholder="Filter items"
            size={Dropdown.sizes.XS}
          />
        <div className="export-filters__checkbox-cont">
        <label>Formats</label>
          <Checkbox label={".csv"} checked={true}/>
          <Checkbox label={".xlxs"} />
        </div>
        <article className="export-filters__button-cont">
        <Button
          size={Button.sizes.SMALL}
        >
          {false ? "Re-Generate" : "Generate"}
        </Button>
        <Button
          kind={Button.kinds.SECONDARY}
          size={Button.sizes.SMALL}
        >
          Export
        </Button>
      </article>
      </div>
      {/* <div className="export-filters__options-cont">

      </div> */}
      <Divider direction={Divider.directions.VERTICAL} className="export-filters__divider"/>
    </section>
  );
}
export default ExportFilters