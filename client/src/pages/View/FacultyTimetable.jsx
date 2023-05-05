import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
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
export default function FacultyTimetable({ state }) {
  const location = useLocation();
  const propsData = location.state;
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [name, setName] = useState([]);
  // const { FacultyId } = useParams();
  
  useEffect(() => {
    setData(propsData.days);
    setName(propsData.name);
    setData1(propsData.timeslots);
  }, []);
  return (
    <>
      {data.length > 0 ? (
        <div className="flex justify-center h-screen w-full">
          <div className="w-full mt-16">
            <div className="flex flex-row justify-center">
              <h1 className="text-3xl text-gray-500 mx-1">
                Faculty: {name}
              </h1>
            
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
                            {ele.Classroom.trim() != "" ? (
                              <p>classroom:{ele.Classroom}</p>
                            ) : (
                              <></>
                            )}
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
