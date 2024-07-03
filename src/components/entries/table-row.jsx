import React from "react";
import { useEntries } from "../../context/entries-context";
import { Checkbox, Divider } from "monday-ui-react-core";

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
        <div className="week-table__header-cont clickable">
          <Checkbox onChange={(e) => console.log(e.target.checked)} />
          <h1 className="week-table__header">Item 1</h1>
          <h2 className="week-table__category">
            <span
              className="week-table__category-text"
              style={{ color: "var(--shareable-color)" }}
            >
              NB
            </span>{" "}
            <span
              className="week-table__category-text"
              style={{ color: "var(--warning-color-hover)" }}
            >
              B
            </span>
          </h2>
        </div>
      </td>

      {datesArr &&
        datesArr.map((date, i) => {
          return (
            <td className="week-table__header-column" key={date}>
              <div className="week-table__time-cont clickable">
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
