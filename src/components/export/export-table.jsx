import React from "react";
import "../../styles/export/export-table.scss";
import { Checkbox } from "monday-ui-react-core";
import ExportTableRow from "./export-table-row";
import NegativeCheckbox from "../common/negative-checkbox";

const columns = [
  "id",
  "user id",
  "name",
  "item id",
  "item name",
  "date",
  "total hours",
  "billable hours",
  "note",
  "created at",
  "rate/h",
  "currency",
];

const logs = [
  {
    id: 105,
    userId: 223231,
    name: "Steven Jacobs",
    itemId: 863438,
    itemName: "Generic task name",
    startDate: "2024-06-13 15:22:48.214",
    totalHours: "3.36",
    billableHours: "3.36",
    note: "Automated time entry log",
    createdAt: "2024-06-13 15:22:54.633975",
    ratePerHour: 150,
    currency: "GBP",
  },
  {
    id: 106,
    userId: 223232,
    name: "Steven Jacobs",
    itemId: 863439,
    itemName: "Generic task name",
    startDate: "2024-06-14 09:15:32.123",
    totalHours: "4.25",
    billableHours: "4.25",
    note: "Manual entry log",
    createdAt: "2024-06-14 09:16:00.543123",
    ratePerHour: 155,
    currency: "GBP",
  },
  {
    id: 107,
    userId: 223233,
    name: "Steven Jacobs",
    itemId: 863440,
    itemName: "Generic task name",
    startDate: "2024-06-15 10:10:10.111",
    totalHours: "2.5",
    billableHours: "2.5",
    note: "Automated time entry log",
    createdAt: "2024-06-15 10:11:10.222345",
    ratePerHour: 160,
    currency: "GBP",
  },
  {
    id: 108,
    userId: 223234,
    name: "Steven Jacobs",
    itemId: 863441,
    itemName: "Generic task name",
    startDate: "2024-06-16 11:45:22.333",
    totalHours: "3.0",
    billableHours: "3.0",
    note: "Manual entry log",
    createdAt: "2024-06-16 11:46:30.987654",
    ratePerHour: 150,
    currency: "GBP",
  },
  {
    id: 109,
    userId: 223235,
    name: "Steven Jacobs",
    itemId: 863442,
    itemName: "Generic task name",
    startDate: "2024-06-17 08:05:50.444",
    totalHours: "6.0",
    billableHours: "6.0",
    note: "Automated time entry log",
    createdAt: "2024-06-17 08:06:10.123876",
    ratePerHour: 165,
    currency: "GBP",
  },
  {
    id: 110,
    userId: 223236,
    name: "Steven Jacobs",
    itemId: 863443,
    itemName: "Generic task name",
    startDate: "2024-06-18 14:32:14.555",
    totalHours: "7.2",
    billableHours: "7.2",
    note: "Manual entry log",
    createdAt: "2024-06-18 14:33:20.345678",
    ratePerHour: 170,
    currency: "GBP",
  },
  {
    id: 111,
    userId: 223237,
    name: "Steven Jacobs",
    itemId: 863444,
    itemName: "Generic task name",
    startDate: "2024-06-19 09:20:30.666",
    totalHours: "5.0",
    billableHours: "5.0",
    note: "Automated time entry log",
    createdAt: "2024-06-19 09:21:15.456789",
    ratePerHour: 150,
    currency: "GBP",
  },
  {
    id: 112,
    userId: 223238,
    name: "Steven Jacobs",
    itemId: 863445,
    itemName: "Generic task name",
    startDate: "2024-06-20 13:15:40.777",
    totalHours: "4.5",
    billableHours: "4.5",
    note: "Manual entry log",
    createdAt: "2024-06-20 13:16:25.567890",
    ratePerHour: 155,
    currency: "GBP",
  },
  {
    id: 113,
    userId: 223239,
    name: "Steven Jacobs",
    itemId: 863446,
    itemName: "Generic task name",
    startDate: "2024-06-21 16:50:22.888",
    totalHours: "6.8",
    billableHours: "6.8",
    note: "Automated time entry log",
    createdAt: "2024-06-21 16:51:10.678901",
    ratePerHour: 160,
    currency: "GBP",
  },
  {
    id: 114,
    userId: 223240,
    name: "Steven Jacobs",
    itemId: 863447,
    itemName: "Generic task name",
    startDate: "2024-06-22 07:30:10.999",
    totalHours: "5.75",
    billableHours: "5.75",
    note: "Manual entry log",
    createdAt: "2024-06-22 07:31:00.789012",
    ratePerHour: 150,
    currency: "GBP",
  },
];

export default function ExportTable() {
  return (
    // <section className="export__generated-cont">
    //   <div className="export__filters-cont"></div>
    <article className="export-table__container">
      <table>
        <thead>
          <tr>
            {columns.map((column, i) => {
              return (
                <th key={column}>
                  {column}{" "}
                  <span className="export-table__checkbox-cont-top">
                    <NegativeCheckbox />
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <ExportTableRow log={log} />
          ))}
        </tbody>
      </table>
    </article>
    // </section>
  );
}
