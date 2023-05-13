import React, { useEffect, useState } from "react";
import { ClassroomModal, TimeslotsModal } from "./Model";
import CSVManage from "./CSVManage";
import { useDispatch, useSelector } from "react-redux";
import {
  resetTimetable,
  setTimetable,
  updateTimetable,
} from "../../../features/timetable/timetableSlice";
import { updateClassroomTimetable } from "../../../features/timetable/classSlice";
import {
  setFacultyStateToEmpty,
  setFacultyTimetable,
  updateFacultyTimetable,
} from "../../../features/timetable/facultySlice";
import {
  addFacultyNames,
  resetFacultyNames,
  setFacultyNames,
} from "../../../features/timetable/classFacultySlice";
import {
  resetTimeSlot,
  setTimeSlot,
} from "../../../features/timetable/timeslotSlice";
import {
  resetClassroom,
  setClassroom,
} from "../../../features/timetable/classroomsSlice";
import AXIOS from "../../../api/AXIOS";

const getDayIndex = (day) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekDays.findIndex((e) => {
    return e == day;
  });
};

function updateClassroomState(dispatch, timetable) {
  timetable.days?.map((day, i) => {
    day.timeslots?.map((slot, j) => {
      dispatch(
        updateClassroomTimetable({
          dayIndex: i,
          semester: timetable.semester,
          division: timetable.division,
          slotIndex: j,
          slot: slot,
        })
      );
    });
  });
  return true;
}
async function updateFacultyState(dispatch, timetable) {
  await Promise.all(
    timetable.days?.map((day, i) => {
      return Promise.all(
        day.timeslots?.map((slot, j) => {
          if (slot.Faculty.trim() != "") {
            dispatch(addFacultyNames({ Faculty: slot.Faculty }));
            return dispatch(
              updateFacultyTimetable({
                dayIndex: i,
                semester: timetable.semester,
                division: timetable.division,
                slotIndex: j,
                slot: slot,
              })
            );
          }
        })
      );
    })
  );
  return true;
}
async function updateSubjects(timetable, setUpdatedSubject) {
  timetable.days?.map((day, i) => {
    day.timeslots?.map((slot, j) => {
      const Subject = slot.Subject;
      if (Subject != "") {
        setUpdatedSubject((prevState) => {
          const index = prevState.findIndex(
            (subject) => subject.name == Subject
          );
          if (index >= 0) {
            // If it does, update the corresponding object's no property
            return prevState.map((subject, i) => {
              if (i == index) {
                return {
                  ...subject,
                  no: subject.no + 1,
                };
              }
              return subject;
            });
          } else {
            // Otherwise, add a new object to the array
            return [...prevState, { name: Subject, no: 1 }];
          }
        });
      }
    });
  });
  return true;
}
async function updateMaxofSubjects(array, setUpdatedSubject) {
  array?.map((Subject) => {
    if (Subject.short_form != "") {
      setUpdatedSubject((prevState) => {
        const index = prevState.findIndex(
          (subject) => subject.name == Subject.short_form
        );
        if (index >= 0) {
          return prevState.map((subject, i) => {
            if (i == index) {
              return {
                ...subject,
                max: Subject.max,
              };
            }
            return subject;
          });
        } else {
          // Otherwise, add a new object to the array
          return [
            ...prevState,
            { name: Subject.short_form, no: 0, max: Subject.max },
          ];
        }
      });
    }
  });
  return true;
}

export default function ManageTimetable() {
  const timetable = useSelector((state) => state.timetable);
  const timeslots = useSelector((state) => state.timeslot);
  const classrooms = useSelector((state) => state.classrooms);
  const faculty = useSelector((state) => state.faculty);
  const classroomtimetable = useSelector((state) => state.class);
  const classFaculty = useSelector((state) => state.classFaculty);
  const [isCheckcComplete, setIsCheckcComplete] = useState(false);
  const [isCheckfComplete, setIsCheckfComplete] = useState(false);
  const [isChecksComplete, setIsChecksComplete] = useState(false);
  const [allFaculty, setAllFaculty] = useState([]);
  const [availFaculty, setAvailFaculty] = useState([]);
  const [semester, setSemester] = useState([]);
  const [division, setDivision] = useState([]);
  const [updatedSubject, setUpdatedSubject] = useState([
    { name: "", no: 0, max: Infinity },
  ]);
  const [selectedSubject, setSelectedSubject] = useState("");

  const dispatch = useDispatch();

  const [currentValue, setCurrentValue] = useState({
    currentValue: false,
    day: "",
    dayIndex: "",
    id: "",
    timeslot: "",
    classroom: "",
    type: "",
    faculty: "",
    subject: "",
    semester: "",
    division: "",
  });

  const [showTimeslotModal, setShowTimeslotModal] = useState({
    is: false,
    id: "",
  });

  const [showClassroomModal, setShowClassroomModal] = useState({
    is: false,
    id: "",
  });

  const handleSubjectChange = (selected) => {
    const subjects = [...updatedSubject];
    const subjectIndex = subjects.findIndex(
      (subject) => subject.name == selected
    );

    if (subjectIndex != -1) {
      subjects[subjectIndex] = {
        ...subjects[subjectIndex],
        no: subjects[subjectIndex].no + 1,
      };
    } else {
      subjects.push({ name: selected, no: 1 });
    }

    if (selectedSubject) {
      const prevSubjectIndex = subjects.findIndex(
        (subject) => subject.name == selectedSubject
      );
      subjects[prevSubjectIndex] = {
        ...subjects[prevSubjectIndex],
        no: subjects[prevSubjectIndex].no - 1,
      };
    }

    setSelectedSubject(selected);
    setUpdatedSubject(subjects);
  };

  const handleSlotChange = (type, e) => {
    if (type == "Faculty") {
      dispatch(
        updateTimetable({
          ...currentValue,
          faculty: e,
          valueForUpdate: "Faculty",
        })
      );
    } else if (type == "Subject") {
      handleSubjectChange(e);
      dispatch(
        updateTimetable({
          ...currentValue,
          subject: e,
          valueForUpdate: "Subject",
        })
      );
    }
  };

  useEffect(() => {
    console.log(updatedSubject);
  }, [updatedSubject]);

  useEffect(() => {
    const fetchData = async () => {
      if (isCheckcComplete && isCheckfComplete) {
        await Promise.all([
          AXIOS.post("/v1/managetimetable/class", {
            timetable,
            classrooms,
            timeslots,
            classFaculty,
          }),
          AXIOS.post("/v1/managetimetable/faculty", {
            faculty,
            timeslots,
          }),
          AXIOS.post("/v1/managetimetable/classroom", {
            classroomtimetable,
            timeslots,
          }),
          AXIOS.post("v1/manageresource/subject/updated", {
            updatedSubject,
          }),
        ])
          .then(() => {
            alert("Updated");
          })
          .catch(() => {
            alert(
              "Error while updating check your internet connnection and retry"
            );
          });
      }
    };

    fetchData();
  }, [isCheckcComplete, isCheckfComplete]);

  const handleSubmit = async () => {
    setIsCheckcComplete(false);
    setIsCheckcComplete(false);
    setIsChecksComplete(false);
    const checkc = updateClassroomState(dispatch, timetable);
    const checkf = updateFacultyState(dispatch, timetable);
    const checks = updateSubjects(timetable, setUpdatedSubject);
    setIsChecksComplete(checks);
    setIsCheckcComplete(checkc);
    setIsCheckfComplete(checkf);
  };

  const getTimetable = () => {
    dispatch(resetTimetable({}));
    dispatch(resetClassroom({}));
    dispatch(resetTimeSlot({}));
    dispatch(resetFacultyNames({}));

    if (
      currentValue?.division.trim() != "" &&
      currentValue?.semester.trim() != ""
    ) {
      AXIOS.get(
        `/v1/getclasstimetable/getclass/?semester=${currentValue.semester}&division=${currentValue.division}`
      ).then((res) => {
        if (res.data.message !== null) {
          dispatch(setTimetable({ timetable: res.data.message }));
          dispatch(setTimeSlot({ timeslots: res.data.message.timeslots }));
          dispatch(setClassroom({ classrooms: res.data.message.classrooms }));
          updateSubjects(res.data?.message, setUpdatedSubject);
        }
      });

      AXIOS.get("/v1/getfacultytimetable")
        .then((res) => {
          dispatch(setFacultyTimetable({ timetable: res.data.message }));
          dispatch(
            setFacultyStateToEmpty({
              semester: currentValue.semester,
              division: currentValue.division,
            })
          );
        })
        .finally(() => {});
    }

    AXIOS.get("/v1/manageresource/subject").then((res) => {
      const namesArray = res.data.res?.filter(
        (f) => f.min < f.max && parseInt(currentValue.semester) == f.semester
      );
      setSubject(namesArray);
      updateMaxofSubjects(namesArray, setUpdatedSubject);
    });
  };

  useEffect(() => {
    AXIOS.get("/v1/manageresource/faculty").then((res) => {
      const namesArray = res.data.res?.map((f) => f.short_form);
      setAllFaculty(namesArray);
      setAvailFaculty(allFaculty);
    });
    AXIOS.get("/v1/manageresource/class").then((e) => {
      const semesterSet = new Set();
      const divisionSet = new Set();

      e.data.res.forEach((item) => {
        semesterSet.add(item.semester);
        divisionSet.add(item.division);
      });
      setSemester([...semesterSet]);
      setDivision([...divisionSet]);
    });
  }, []);

  useEffect(() => {
    const tempdata = new Set(allFaculty.map((e) => e));
    const existempdata = new Set();
    if (faculty.length > 0) {
      faculty.map((f) => {
        const currentTimeslot = timeslots[currentValue.id];
        const currentDayIndex = currentValue.dayIndex;
        const currentIndex = currentValue.id - 1;
        if (
          f.days[currentDayIndex]?.timeslots[currentIndex]?.Division == "" &&
          f.days[currentDayIndex]?.timeslots[currentIndex]?.Semester == ""
        ) {
          tempdata.add(f.name);
        } else {
          existempdata.add(f.name);
        }
      });
    }
    existempdata.forEach((e) => {
      tempdata.delete(e);
    });
    setAvailFaculty([]);
    setAvailFaculty(Array.from(tempdata));
  }, [currentValue.id, currentValue.dayIndex]);

  return (
    <>
      <div className="inline-flex flex-col p-4 m-4 border rounded-lg bg-white shadow">
        <label className="text-xl text-center font-medium mb-2">
          Select class and division
        </label>
        <div className="flex flex-row space-x-4">
          <select
            id="semester"
            className="w-24 rounded-lg px-4 py-2 bg-gray-100 focus:outline-none"
            onChange={(e) => {
              setCurrentValue((prev) => {
                if (e.target.value == "Select Semster") {
                  return prev;
                }
                return { ...prev, semester: e.target.value };
              });
            }}
          >
            <option>Select Semester</option>
            {semester?.map((e) => {
              return <option>{e}</option>;
            })}
          </select>
          <select
            id="divison"
            className="w-24 rounded-lg px-4 py-2 bg-gray-100 focus:outline-none"
            onChange={(e) => {
              setCurrentValue((prev) => {
                if (e.target.value == "Select Division") {
                  return prev;
                }
                return { ...prev, division: e.target.value };
              });
            }}
          >
            <option>Select Division</option>
            {division?.map((e) => {
              return <option>{e}</option>;
            })}
          </select>
          <button
            onClick={() => {
              getTimetable();
            }}
            className="p-2 rounded-lg border bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Ok
          </button>
        </div>
      </div>
      <div className="flex justify-center h-screen w-full">
        <div className="w-3/4 mt-12 m-2">
          <table id="timetable" className="border m-2 ">
            <thead>
              <tr>
                {timeslots?.map((e) => {
                  return (
                    <th
                      key={e.id}
                      onClick={() =>
                        setShowTimeslotModal({ is: true, id: `${e.id}` })
                      }
                      align="center"
                      className="border"
                      style={{ width: "150px", minWidth: "70px" }}
                    >
                      {e.timeslot}{" "}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {classrooms?.map((e) => {
                  return (
                    <th
                      key={e.id}
                      align="center"
                      id={e.id}
                      onClick={() => {
                        timeslots[e.id].timeslot.trim() !== ""
                          ? setShowClassroomModal({ is: true, id: `${e.id}` })
                          : alert("First Select Timeslot");
                      }}
                      className="border"
                    >
                      {e.no}
                    </th>
                  );
                })}
              </tr>
              {timetable.days.map((e, i) => {
                return (
                  <tr>
                    <td align="center" className="border">
                      {e.day}
                    </td>
                    {e.timeslots.map((ele, j) => {
                      return (
                        <td
                          key={i + j}
                          align="center"
                          className={`${
                            currentValue.id == ele.id &&
                            e.day == currentValue.day
                              ? "border-4"
                              : "border"
                          }`}
                          onClick={() => {
                            setSelectedSubject(ele.Subject);
                            setCurrentValue({
                              semester: currentValue.semester,
                              division: currentValue.division,
                              currentValue: true,
                              day: e.day,
                              dayIndex: i,
                              id: ele.id,
                              subject: ele.Subject,
                              faculty: ele.Faculty,
                              classroom: classrooms[ele.id].no,
                              type: classrooms[ele.id].type,
                              timeslot: timeslots[ele.id].timeslot,
                            });
                          }}
                        >
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
          <div className="flex flex-row justify-between p-2">
            {currentValue.semester == "" || currentValue.division == "" ? (
              <p>please select semester and division first</p>
            ) : (
              <CSVManage handleSubjectChange={handleSubjectChange} />
            )}

            <div>
              <button
                className="rounded bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-2  p-3 focus:ring-blue-500 m-1 text-white"
                onClick={() => {
                  dispatch(resetTimetable());
                }}
              >
                Reset Fields
              </button>
              <button
                className="rounded bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-offset-2  p-3 focus:ring-blue-500 m-1 text-white"
                // onClick={ClearTimetable}
              >
                Delete
              </button>
              <button
                className="rounded bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-offset-2  p-3 focus:ring-blue-500 m-1 text-white"
                onClick={handleSubmit}
              >
                Done
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 border-l">
          <div className="m-2 border justify-center bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-center font-bold mb-4">Faculty</h2>
            <ul className="list-disc pl-4  xl:mx-6">
              {["", ...availFaculty].map((e) => {
                return (
                  <li
                    className={`${
                      true
                        ? "bg-lime-700 text-center hover:bg-lime-800 m-1 border p-2 text-white "
                        : "bg-red-700 text-center hover:bg-red-800 m-1 border p-2"
                    }`}
                    onClick={() => handleSlotChange("Faculty", e)}
                  >
                    {e}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-2 border justify-center bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-center font-bold mb-4">Subject</h2>
            <ul className="list-disc pl-4 xl:mx-6">
              <ol className="flex flex-row justify-between px-1 bg-lime-700 text-center hover:bg-lime-800 m-1 border p-2 text-white ">
                <li>Name</li>
                <li>Current</li>
                <li>Max</li>
              </ol>
              {[...updatedSubject].map((e) => {
                return (
                  <li
                    className={`${
                      e.no <= e.max
                        ? "bg-lime-700 text-center hover:bg-lime-800 m-1 border p-2 text-white "
                        : "bg-red-700 text-center hover:bg-red-800 m-1 border p-2"
                    }`}
                    onClick={() => {
                      handleSlotChange("Subject", e.name);
                    }}
                  >
                    <ol className="flex flex-row justify-between px-1">
                      <li>{e?.name}</li>
                      <li> {e?.no}</li>
                      <li> {e?.max}</li>
                    </ol>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <TimeslotsModal
          showModal={showTimeslotModal}
          timeslots={timeslots}
          setShowModal={setShowTimeslotModal}
        />
        <ClassroomModal
          showModal={showClassroomModal}
          timeslots={timeslots}
          classroomtimetable={classroomtimetable}
          setShowModal={setShowClassroomModal}
          Semester={currentValue.semester}
          Division={currentValue.division}
        />
      </div>
    </>
  );
}
