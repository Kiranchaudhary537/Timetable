import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
    day: "Classroom:26",
  },
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

export default function ClassTimetable() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const { ClassId } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/v1/getclasstimetable/" + ClassId)
      .then((res) => {
        setData(res.data.message);
        setData1(res.data.message.timeslots);
        console.log(res.data.message.timeslots);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center h-screen w-full">
        <div className="w-full mt-16">
          <table id="timetable" className="border m-2 ">
            <thead>
              <tr>
                {data1.map((e) => {
                  return (
                    <th
                      align="center"
                      className="border"
                      style={{ width: "150px", minWidth: "70px" }}
                    >
                      {e.timeslot}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.days?.map((e) => {
                return (
                  <tr>
                    <td align="center" className="border">
                      {e.day}
                    </td>
                    {e.timeslots.map((ele) => {
                      return (
                        <td align="center" className="border">
                          {ele.Subject}
                          <br />
                          {ele.Faculty}
                          <br />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
