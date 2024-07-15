import React from "react";
import "../../styles/export/export-table.scss";
import ExportTableRow from "./export-table-row";
import NegativeCheckbox from "../common/negative-checkbox";
import { useExport } from "../../context/export-context";

const columns = [
  "id",
  "user id",
  "name",
  "item id",
  "item name",
  "date",
  "created at",
  "t hours",
  "b hours",
  "rate",
  "currency",
  "note",
];

const logs = [
  {
    id: 105,
    userId: 223231,
    name: "Steven Jacobs",
    itemId: 863438,
    itemName: "Generic task name",
    startDate: "2024-06-13 15:22:48.214",
    createdAt: "2024-06-13 15:22:54.633975",
    totalHours: "3.36",
    billableHours: "3.36",
    ratePerHour: 150,
    currency: "GBP",
    note: "Automated time entry log",
  },
  {
    id: 106,
    userId: 223232,
    name: "Steven Jacobs",
    itemId: 863439,
    itemName: "Generic task name",
    startDate: "2024-06-14 09:15:32.123",
    createdAt: "2024-06-14 09:16:00.543123",
    totalHours: "4.25",
    billableHours: "4.25",
    ratePerHour: 155,
    currency: "GBP",
    note: "Manual entry log",
  },
  {
    id: 107,
    userId: 223233,
    name: "Steven Jacobs",
    itemId: 863440,
    itemName: "Generic task name",
    startDate: "2024-06-15 10:10:10.111",
    createdAt: "2024-06-15 10:11:10.222345",
    totalHours: "2.5",
    billableHours: "2.5",
    ratePerHour: 160,
    currency: "GBP",
    note: "Automated time entry log",
  },
  {
    id: 108,
    userId: 223234,
    name: "Steven Jacobs",
    itemId: 863441,
    itemName: "Generic task name",
    startDate: "2024-06-16 11:45:22.333",
    createdAt: "2024-06-16 11:46:30.987654",
    totalHours: "3.0",
    billableHours: "3.0",
    ratePerHour: 150,
    currency: "GBP",
    note: "Manual entry log",
  },
  {
    id: 109,
    userId: 223235,
    name: "Steven Jacobs",
    itemId: 863442,
    itemName: "Generic task name",
    startDate: "2024-06-17 08:05:50.444",
    createdAt: "2024-06-17 08:06:10.123876",
    totalHours: "6.0",
    billableHours: "6.0",
    ratePerHour: 165,
    currency: "GBP",
    note: "Automated time entry log",
  },
  {
    id: 110,
    userId: 223236,
    name: "Steven Jacobs",
    itemId: 863443,
    itemName: "Generic task name",
    startDate: "2024-06-18 14:32:14.555",
    createdAt: "2024-06-18 14:33:20.345678",
    totalHours: "7.2",
    billableHours: "7.2",
    ratePerHour: 170,
    currency: "GBP",
    note: "Manual entry log",
  },
  {
    id: 111,
    userId: 223237,
    name: "Steven Jacobs",
    itemId: 863444,
    itemName: "Generic task name",
    startDate: "2024-06-19 09:20:30.666",
    createdAt: "2024-06-19 09:21:15.456789",
    totalHours: "5.0",
    billableHours: "5.0",
    ratePerHour: 150,
    currency: "GBP",
    note: "Automated time entry log",
  },
  {
    id: 112,
    userId: 223238,
    name: "Steven Jacobs",
    itemId: 863445,
    itemName: "Generic task name",
    startDate: "2024-06-20 13:15:40.777",
    createdAt: "2024-06-20 13:16:25.567890",
    totalHours: "4.5",
    billableHours: "4.5",
    ratePerHour: 155,
    currency: "GBP",
    note: "Manual entry log",
  },
  {
    id: 113,
    userId: 223239,
    name: "Steven Jacobs",
    itemId: 863446,
    itemName: "Generic task name",
    startDate: "2024-06-21 16:50:22.888",
    createdAt: "2024-06-21 16:51:10.678901",
    totalHours: "6.8",
    billableHours: "6.8",
    ratePerHour: 160,
    currency: "GBP",
    note: "Automated time entry log",
  },
  {
    id: 114,
    userId: 223240,
    name: "Steven Jacobs",
    itemId: 863447,
    itemName: "Generic task name",
    startDate: "2024-06-22 07:30:10.999",
    createdAt: "2024-06-22 07:31:00.789012",
    totalHours: "5.75",
    billableHours: "5.75",
    ratePerHour: 150,
    currency: "GBP",
    note: "Manual entry log",
  },
];

export default function ExportTable() {
  const { exportFormat, setExportFormat } = useExport();
  return (
    <article className="export-table__container">
      <table>
        <thead>
          <tr>
            {columns.map((column, i) => {
              const negative = exportFormat?.columns.includes(i);
              return (
                <th
                  key={column}
                  style={{
                    backgroundColor: negative
                      ? "var(--negative-color-selected)"
                      : "",
                    transition: "all 0.15s ease-in-out",
                    color: negative ? "var(--secondary-text-color)" : "",
                  }}
                >
                  <div className="export-table__header-cont">{column}</div>
                  <span className="export-table__checkbox-cont-top">
                    <NegativeCheckbox
                      defaultValue={false}
                      onChange={() => {
                        const newValue = negative
                          ? exportFormat?.columns.filter((val) => val !== i)
                          : [...exportFormat?.columns, i];
                        setExportFormat((prev) => ({
                          ...prev,
                          columns: newValue,
                        }));
                      }}
                    />
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <ExportTableRow log={log} index={index} />
          ))}
        </tbody>
      </table>
    </article>
    // </section>
  );
}
