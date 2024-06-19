import React from "react";
import { useEntries } from "../../context/entries-context";
import { Divider } from "monday-ui-react-core";

export default function TableRow() {
  const { datesArr } = useEntries();
  return (
    <tr className="week-table__header-row">
      <td
        className="week-table__header-column"
        style={{
          width: "40%",
          justifyContent: "flex-start",
          borderBottom: "1px solid var(--grey-background-color)",
        }}
      >
        <div className="week-table__header-cont">
          <h1 className="week-table__header">Item 1</h1>
        </div>
      </td>

      {datesArr &&
        datesArr.map((date, i) => {
          return (
            <td className="week-table__header-column" key={date}>
              <div className="week-table__time-cont">
                <p className="week-table__text-time">10h 30m</p>
                <p className="week-table__text-items">1 Item</p>
              </div>
            </td>
          );
        })}
      <td
        className="week-table__header-column"
        style={{
          width: "6.5%",
        }}
      >
        <div className="week-table__total-cont">
          <p className="week-table__text-total">10h 30m</p>
        </div>
      </td>
    </tr>
  );
}
