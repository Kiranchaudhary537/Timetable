import axios from "axios";
import React, { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
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


export default function Class() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/v1/manageresource/class").then((res) => {
      setData(res.data.res);
    });
  }, [])
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center h-screen w-full">
          <div className="w-9/12 mt-16">
            <Table data={data}>
              <Column flexGrow={1}>
                <HeaderCell>Select</HeaderCell>
                <Cell dataKey="" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>No</HeaderCell>
                <Cell dataKey="_id" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>Semester</HeaderCell>
                <Cell dataKey="semester" />
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
