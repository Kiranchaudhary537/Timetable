import React from "react";
import { Outlet } from "react-router-dom";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";

const Data = [
  {
    id: 1,
    name: "vd",
    division: "h",
    department: "IT",
  },
  {
    id: 2,
    name: "hdp",
    division: "h",
    department: "IT",
  },
  {
    id: 3,
    name: "skv",
    division: "h",
    department: "IT",
  },
];

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

export default function Faculty() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center h-screen w-full">
          <div className="w-9/12 mt-16">
            <Table data={Data}>
              <Column flexGrow={1}>
                <HeaderCell>Select</HeaderCell>
                <Cell dataKey="" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>No</HeaderCell>
                <Cell dataKey="id" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>Semester</HeaderCell>
                <Cell dataKey="name" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>Division</HeaderCell>
                <Cell dataKey="division" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>Department</HeaderCell>
                <Cell dataKey="department" />
              </Column>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
