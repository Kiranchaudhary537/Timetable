import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";

const Data = [
  {
    id: 1,
    semester: "6",
    division: "h",
    department: "IT",
  },
  {
    id: 2,
    semester: "6",
    division: "h",
    department: "IT",
  },
  {
    id: 3,
    semester: "6",
    division: "h",
    department: "IT",
  },
];
const Data2 = [
  {
    id: 1,
    day: "Monday",
    slots: [
      {
        id: 1,
        sub: "L.T",
      },
      {
        id: 2,
        sub: "S.E",
      },
      {
        id: 3,
        sub: "AOS",
      },
      {
        id: 4,
        sub: "AOS",
      },
    ],
  },
  {
    id: 2,
    day: "Tuesday",
    slots: [
      {
        id: 1,
        sub: "AOS",
      },
      {
        id: 2,
        sub: "AOS",
      },
      {
        id: 3,
        sub: "AOS",
      },
      {
        id: 4,
        sub: "AOS",
      },
    ],
  },
];

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

export default function ClassTimetable() {
  return (
    <>
      <div className="flex justify-center h-screen w-full">
        <div className="w-full mt-16">
          <Table data={Data2}>
            <Column>
              <HeaderCell>Day</HeaderCell>
              <Cell dataKey="day" />
            </Column>
            <Column flexGrow={1} fullText>
              <HeaderCell>8:30 A.M To 10:30 A.M</HeaderCell>
              <Cell dataKey="slots[0].sub" />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell>10:30 A.M To 10:45 A.M</HeaderCell>
              <Cell dataKey="slots[1].sub" />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell>10:45 A.M To 11:45 A.M</HeaderCell>
              <Cell dataKey="" />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell>11:45 A.M To 12:45 A.M</HeaderCell>
              <Cell dataKey="" />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell>01:30 A.M To 02:30 A.M</HeaderCell>
              <Cell dataKey="" />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell>02:30 A.M To 03:30 A.M</HeaderCell>
              <Cell dataKey="" />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell>03:30 A.M To 04:30 A.M</HeaderCell>
              <Cell dataKey="" />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell>04:30 A.M To 05:30 A.M</HeaderCell>
              <Cell dataKey="" />
            </Column>
          </Table>
        </div>
      </div>
    </>
  );
}
