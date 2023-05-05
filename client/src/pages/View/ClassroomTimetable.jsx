import React, { useState, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";
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
    class: "h",
    days: [
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
    ],
  },
];

export default function ClassroomTimetable({ state }) {
  const location = useLocation();
  const propsData = location.state;
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [name, setName] = useState({ classroom: "", Type: "" });
  // const { FacultyId } = useParams();
  console.log(propsData);
  useEffect(() => {
    setData(propsData.days);
    setName({ classroom: propsData.no, Type: propsData.type });
    setData1(propsData.timeslots);
  }, []);
  return (
    <>
      {data.length > 0 ? (
        <div className="flex justify-center h-screen w-full">
          <div className="w-full mt-16">
            <div className="flex flex-row justify-center">
              <h1 className="text-3xl text-gray-500 mx-1">
                Classroom: {name.classroom}
              </h1>
              <h1 className="text-3xl text-gray-500 mx-1">Type: {name.Type}</h1>
            </div>
            <table id="timetable" className="border m-2 ">
              <thead>
                <tr>
                  {propsData.timeslots.map((e) => {
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
                {propsData.days.map((e) => {
                  console.log(e);
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
                            {ele.Semester} {ele.Division}
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
            {data1.map((e) => {
              <p>{e.Subject}</p>;
            })}
          </div>
        </div>
      ) : (
        <p>rendering</p>
      )}
    </>
  );
}
