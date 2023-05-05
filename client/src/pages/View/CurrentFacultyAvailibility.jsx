import { useState, useEffect } from "react";
import AXIOS from "./../../api/AXIOS";
function isTimeslot1InTimeslot2(timeslot1, timeslot2) {
  // Extract the start and end times from the timeslot strings
  if (!timeslot1.includes(" TO ") || !timeslot2.includes(" TO ")) {
    return false;
  }

  const [startTimeStr1, endTimeStr1] = timeslot1.split(" TO ");
  const [startTimeStr2, endTimeStr2] = timeslot2.split(" TO ");

  const startTimeParts1 = startTimeStr1.match(/(\d+):(\d+)\s+(am|pm)/i);
  const endTimeParts1 = endTimeStr1.match(/(\d+):(\d+)\s+(am|pm)/i);
  const startTimeParts2 = startTimeStr2.match(/(\d+):(\d+)\s+(am|pm)/i);
  const endTimeParts2 = endTimeStr2.match(/(\d+):(\d+)\s+(am|pm)/i);

  // Convert the start and end times to Date objects
  const startHour1 =
    parseInt(startTimeParts1[1], 10) +
    (startTimeParts1[3].toLowerCase() === "pm" ? 12 : 0);
  const startMinute1 = parseInt(startTimeParts1[2], 10);
  const endHour1 =
    parseInt(endTimeParts1[1], 10) +
    (endTimeParts1[3].toLowerCase() === "pm" ? 12 : 0);
  const endMinute1 = parseInt(endTimeParts1[2], 10);
  const startHour2 =
    parseInt(startTimeParts2[1], 10) +
    (startTimeParts2[3].toLowerCase() === "pm" ? 12 : 0);
  const startMinute2 = parseInt(startTimeParts2[2], 10);
  const endHour2 =
    parseInt(endTimeParts2[1], 10) +
    (endTimeParts2[3].toLowerCase() === "pm" ? 12 : 0);
  const endMinute2 = parseInt(endTimeParts2[2], 10);
  const startTime1 = new Date(2000, 0, 1, startHour1, startMinute1);
  const endTime1 = new Date(2000, 0, 1, endHour1, endMinute1);
  const startTime2 = new Date(2000, 0, 1, startHour2, startMinute2);
  const endTime2 = new Date(2000, 0, 1, endHour2, endMinute2);

  // Compare the timeslots
  const isTimeslot1InTimeslot2 =
    startTime1 >= startTime2 && endTime1 <= endTime2;

  return isTimeslot1InTimeslot2;
}

function getDayIndex(dayName) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days.findIndex((day) => day.toLowerCase() === dayName.toLowerCase());
}

export default function CurrentFacultyAvailability() {
  const [facultyNames, setFacultyNames] = useState([]);
  const [timeslots, setTimeslots] = useState([]);
  const [data, setData] = useState(null);
  const [resData, setResData] = useState(null);
  useEffect(() => {
    AXIOS.get("/v1/manageresource/faculty").then((res) => {
      setFacultyNames(res.data.res);
    });
    AXIOS.get("/v1/manageresource/timeslot").then((res) => {
      setTimeslots(res.data.res);
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    timeslot: "",
    day: "",
  });

  useEffect(() => {
    const dayIndex = getDayIndex(formData.day);

    resData?.data?.days[dayIndex].timeslots?.map((ele) => {
      if (ele.Timeslot.length > 2) {
        console.log(ele.Timeslot);
        const result = isTimeslot1InTimeslot2(formData.timeslot, ele.Timeslot);
        console.log(result);
        if (result == true) {
          setData(ele);
          console.log(ele);
        }
      }
    });
  }, [resData]);

  const HandleSubmit = (e) => {
    console.log(formData);
    AXIOS.post("/v1/getcurrentfucultystatus", { name: formData.name })
      .then((e) => {
        setResData(e);
      })
      .catch((e) => {
        console.log("error while working");
      });
  };
  return (
    <>
      <div className="flex h-full">
        <div className="w-3/5  flex items-center justify-center h-full">
          <div className="bg-white shadow-lg rounded-lg">
            {data != null ? (
              <>
                <div className="px-4 py-2 border-b border-gray-200">
                  <h2 className="text-lg text-center font-medium text-gray-800">
                    {formData.name}
                  </h2>
                </div>
                <div className="px-4 py-2 m-5 ">
                  <p className="text-green-500">
                    TimeSlot: {formData.timeslot}
                  </p>
                  <p className="text-green-500">Semester: {data.Semester}</p>
                  <p className="text-green-500">Division: {data.Division}</p>
                  <p className="text-green-500">Subject: {data.Subject}</p>
                  <p className="text-green-500">Classroom: {data.Classroom}</p>
                </div>
              </>
            ) : resData == null ? (
              <>
                <div className="px-4 py-2 border-b border-gray-200">
                  <h2 className="text-gray-800 text-center">Faculty Status</h2>
                </div>
                <div className="px-4 py-2 m-5">
                  <p className="text-red-700">
                    Select faculty from faculty status box
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="px-4 py-2 border-b border-gray-200">
                  <h2 className="text-gray-800 text-center">{formData.name}</h2>
                </div>
                <div className="px-4 py-2 m-5">
                  <p className="text-red-700">
                    Faculty Not Available for Timeslot {formData.timeslot} on{" "}
                    {formData.day}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-2/5 border-l-2 flex items-center justify-center h-full ">
          <div className="bg-white shadow-lg rounded-lg p-16 border">
            <h4 className="text-lg font-bold mb-4">Search Faculty Status</h4>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2" for="names">
                  Faculty Name
                </label>
                <select
                  className="border border-gray-400 rounded-lg px-3 py-2"
                  id="names"
                  onChange={(e) => {
                    setFormData((prev) => {
                      if (e.target.value != "Select Faculty Name") {
                        return { ...prev, name: e.target.value };
                      } else {
                        return { ...prev };
                      }
                    });
                  }}
                >
                  <option>Select Faculty Name</option>
                  {facultyNames?.map((name) => {
                    return (
                      <option value={name.short_form}>
                        {name?.short_form}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 mb-2" for="time">
                  Timeslot
                </label>

                <select
                  className="border border-gray-400 rounded-lg px-3 py-2"
                  id="time"
                  onChange={(e) => {
                    setFormData((prev) => {
                      if (e.target.value != "select Timeslo") {
                        return { ...prev, timeslot: e.target.value };
                      } else {
                        return { ...prev };
                      }
                    });
                  }}
                >
                  <option>select Timeslot</option>
                  {timeslots?.map((e) => {
                    return (
                      <option value={`${e.starttime} TO ${e.endtime}`}>
                        {e.starttime} TO {e.endtime}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 mb-2" for="days">
                  Days of the Week
                </label>
                <select
                  className="border border-gray-400 rounded-lg px-3 py-2"
                  id="days"
                  onChange={(e) => {
                    setFormData((prev) => {
                      if (e.target.value != "day") {
                        return { ...prev, day: e.target.value };
                      } else {
                        return { ...prev };
                      }
                    });
                  }}
                >
                  <option value="day">Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>
              <button
                onClick={() => {
                  HandleSubmit();
                }}
                className="rounded bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 m-1 text-white px-3 py-2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
