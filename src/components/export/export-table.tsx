import React from "react";
import "../../styles/export/export-table.scss";
import ExportTableRow from "./export-table-row";
import NegativeCheckbox from "../common/negative-checkbox";
import { useExport } from "../../context/export-context";
import useColumns from "../../hooks/column-hook";
import {Resizable} from "react-resizable"

const initialColumns = [
  {
    name: "id",
    displayName: "ID",
    width: 30
  },
  {
    name: "username",
    displayName: "Username",
    width: 100
  },
  {
    name: "userId",
    displayName: "User ID",
    width: 60
  },
  {
    name: "itemId",
    displayName: "Item ID",
    width: 60
  },
  {
    name: "itemName",
    displayName: "Item name",
    width: 100
  },
  {
    name: "boardId",
    displayName: "Board ID",
    width: 60
  },
  {
    name: "groupId",
    displayName: "Group ID",
    width: 60
  },
  {
    name: "workspaceId",
    displayName: "Workspace ID",
    width: 60
  },
  {
    name: "date",
    displayName: "date",
    width: 60
  },
  {
    name: "total",
    displayName: "total",
    width: 40
  },
  {
    name: "billable",
    displayName: "billable",
    width: 40
  },
  {
    name: "rate",
    displayName: "rate",
    width: 40
  },
  {
    name: "currency",
    displayName: "currency",
    width: 40
  },
  {
    name: "note",
    displayName: "note",
    width: 40
  },
  {
    name: "createdAt",
    displayName: "Created At",
    width: 60
  },
  {
    name: "updatedAt",
    displayName: "Updated at",
    width: 60
  },
]

const logs = [
  {
    id: 1,
    username: "johndoe",
    userId: "user123",
    itemId: "item456",
    itemName: "Sample Item A",
    boardId: "board789",
    groupId: "group001",
    workspaceId: "workspace001",
    startDate: "2024-10-01T00:00:00Z",
    total: 150.75,
    billable: 120, // less than total
    rate: 50.25,
    currency: "USD",
    note: "Completed work on task A",
    createdAt: "2024-09-30T10:15:30Z",
    updatedAt: "2024-10-01T12:45:00Z"
  },
  {
    id: 2,
    username: "janesmith",
    userId: "user124",
    itemId: "item457",
    itemName: "Sample Item B",
    boardId: "board790",
    groupId: "group002",
    workspaceId: "workspace002",
    startDate: "2024-10-02T00:00:00Z",
    total: 200.00,
    billable: 180, // less than total
    rate: 65.00,
    currency: "USD",
    note: "Worked on feature X",
    createdAt: "2024-10-01T09:00:00Z",
    updatedAt: "2024-10-02T11:00:00Z"
  },
  {
    id: 3,
    username: "bobjohnson",
    userId: "user125",
    itemId: "item458",
    itemName: "Sample Item C",
    boardId: "board791",
    groupId: "group003",
    workspaceId: "workspace003",
    startDate: "2024-10-03T00:00:00Z",
    total: 175.50,
    billable: 160, // less than total
    rate: 60.50,
    currency: "USD",
    note: "Internal team meeting",
    createdAt: "2024-10-02T08:45:00Z",
    updatedAt: "2024-10-03T10:15:00Z"
  },
  {
    id: 4,
    username: "lisawilliams",
    userId: "user126",
    itemId: "item459",
    itemName: "Sample Item D",
    boardId: "board792",
    groupId: "group004",
    workspaceId: "workspace004",
    startDate: "2024-10-04T00:00:00Z",
    total: 225.00,
    billable: 210, // less than total
    rate: 75.00,
    currency: "USD",
    note: "Client project consultation",
    createdAt: "2024-10-03T10:30:00Z",
    updatedAt: "2024-10-04T12:00:00Z"
  },
  {
    id: 5,
    username: "charleslee",
    userId: "user127",
    itemId: "item460",
    itemName: "Sample Item E",
    boardId: "board793",
    groupId: "group005",
    workspaceId: "workspace005",
    startDate: "2024-10-05T00:00:00Z",
    total: 120.00,
    billable: 100, // less than total
    rate: 40.00,
    currency: "USD",
    note: "Code review session",
    createdAt: "2024-10-04T14:00:00Z",
    updatedAt: "2024-10-05T16:30:00Z"
  },
  {
    id: 6,
    username: "emilytaylor",
    userId: "user128",
    itemId: "item461",
    itemName: "Sample Item F",
    boardId: "board794",
    groupId: "group006",
    workspaceId: "workspace006",
    startDate: "2024-10-06T00:00:00Z",
    total: 300.00,
    billable: 280, // less than total
    rate: 100.00,
    currency: "USD",
    note: "Development on project Y",
    createdAt: "2024-10-05T15:30:00Z",
    updatedAt: "2024-10-06T17:45:00Z"
  },
  {
    id: 7,
    username: "davidbrown",
    userId: "user129",
    itemId: "item462",
    itemName: "Sample Item G",
    boardId: "board795",
    groupId: "group007",
    workspaceId: "workspace007",
    startDate: "2024-10-07T00:00:00Z",
    total: 180.00,
    billable: 150, // less than total
    rate: 60.00,
    currency: "USD",
    note: "Training session",
    createdAt: "2024-10-06T10:00:00Z",
    updatedAt: "2024-10-07T12:30:00Z"
  },
  {
    id: 8,
    username: "sarahmiller",
    userId: "user130",
    itemId: "item463",
    itemName: "Sample Item H",
    boardId: "board796",
    groupId: "group008",
    workspaceId: "workspace008",
    startDate: "2024-10-08T00:00:00Z",
    total: 250.00,
    billable: 230, // less than total
    rate: 85.00,
    currency: "USD",
    note: "Design work for client Z",
    createdAt: "2024-10-07T12:15:00Z",
    updatedAt: "2024-10-08T14:45:00Z"
  },
  {
    id: 9,
    username: "michaelclark",
    userId: "user131",
    itemId: "item464",
    itemName: "Sample Item I",
    boardId: "board797",
    groupId: "group009",
    workspaceId: "workspace009",
    startDate: "2024-10-09T00:00:00Z",
    total: 100.00,
    billable: 80, // less than total
    rate: 50.00,
    currency: "USD",
    note: "Bug fixing and patching",
    createdAt: "2024-10-08T11:00:00Z",
    updatedAt: "2024-10-09T13:00:00Z"
  },
  {
    id: 10,
    username: "oliviagarcia",
    userId: "user132",
    itemId: "item465",
    itemName: "Sample Item J",
    boardId: "board798",
    groupId: "group010",
    workspaceId: "workspace010",
    startDate: "2024-10-10T00:00:00Z",
    total: 275.00,
    billable: 250, // less than total
    rate: 95.00,
    currency: "USD",
    note: "Final review meeting",
    createdAt: "2024-10-09T13:30:00Z",
    updatedAt: "2024-10-10T15:45:00Z"
  }
];




export default function ExportTable() {
  const { exportFormat, setExportFormat } = useExport();

  const {columns, handleResize, getColumnWidth} = useColumns(initialColumns, 10)
  return (
    <section className="export-table__container">
      <table>
        <thead>
          <tr>
            {columns.map(({name, displayName}, i) => {
              const negative = exportFormat?.columns.includes(i);
              console.log(name)
              return (
                <>{i === 0 ? <th></th> : null}
                <Resizable height={100} handle={<span className="export-table__handle"/>} draggableOpts={{enableUserSelectHook: false}} width={getColumnWidth(name)} key={name} onResize={(_, {size: {width}}) => handleResize(name, width)}>

                <th
                  key={name}
                  style={{
                    backgroundColor: negative
                      ? "var(--negative-color-selected)"
                      : "",
                    // transition: "all 0.15s ease-in-out",
                    color: negative ? "var(--secondary-text-color)" : "",
                    position: "relative",
                    width: `${getColumnWidth(name)}px !important`,
                    maxWidth: `${getColumnWidth(name)}px`,
                    minWidth: `${getColumnWidth(name)}px`
                  }}
                >
                  <div className="export-table__head-cont">
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
                  <h2 className="export-table__header">{displayName}</h2>
                  </div>
                </th>
                </Resizable>
              </>
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
    </section>
  );
}
