import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";



export default function Subject() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/v1/manageresource/subject").then((res) => {
      setData(res.data.res);
    });
  }, []);
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
                <HeaderCell>id</HeaderCell>
                <Cell dataKey="_id" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>Short Name</HeaderCell>
                <Cell dataKey="short_form" />
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
              </Column>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
