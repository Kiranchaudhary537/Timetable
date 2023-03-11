import axios from "axios";
import React, { useState, useEffect } from "react";
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


export default function Faculty() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/v1/manageresource/faculty").then((res) => {
      setData(res.data.res);
    });
  }, []);
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
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>Short Form</HeaderCell>
                <Cell dataKey="short_form" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>Subject</HeaderCell>
                <Cell dataKey="Subject" />
              </Column>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
