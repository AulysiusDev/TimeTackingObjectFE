import React from "react";
import "../../styles/ratecards/ratecards-table-body.scss";
import "../../styles/ratecards/ratecards-comp.scss";
import PeopleTableModal from "./ratecards-table-modal";
import { days } from "../../utils/data";
import { usePeople } from "../../context/people-context";
import { isWeekdays } from "../../utils/helpers";
import RatecardsTableModal from "./ratecards-table-modal";

const RatecardsTableRow: React.FC = ({ person }: any) => {
  const { setShowRatecardsModal } = usePeople();
  return (
    <>
      <tr
        className="ratecards-table-body__row"
        onClick={() => setShowRatecardsModal(true)}
      >
        <td className="ratecards-table-body__field ratecards-comp__body-width">
          <div className="ratecards-table-body__user-field">
            <span style={{ fontWeight: "600" }}>{person.name}</span>
            <span
              style={{
                color: "var(--secondary-text-color)",
                fontStyle: "italic",
              }}
            >
              {person.role}
            </span>
          </div>
        </td>
        <td
          className="ratecards-table-body__field ratecards-comp__body-width"
          style={{ fontWeight: "600" }}
        >
          {person.team}
        </td>
        <td className="ratecards-table-body__field ratecards-comp__body-width">
          {person.startTime} - {person.endTime}
        </td>
        <td className="ratecards-table-body__field ratecards-comp__body-width">
          {isWeekdays(person.days)
            ? "Monday - Friday"
            : person.days.map((day) => days[day]).join(", ")}
        </td>
        <td
          className="ratecards-table-body__field ratecards-comp__body-width"
          style={{ fontWeight: "600" }}
        >
          {person.rate}
        </td>
        <td className="ratecards-table-body__field ratecards-comp__body-width">
          {person.currency}
        </td>
      </tr>
      <RatecardsTableModal
        //@ts-ignore
        person={person}
      />
    </>
  );
};
export default RatecardsTableRow;
