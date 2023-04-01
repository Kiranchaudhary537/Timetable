import { useState, useEffect } from "react";
import axios from "axios";
export const TimeSlotModal = ({ title, showModal, setShowModal, setData }) => {
  const handleCloseModal = () => setShowModal(false);
  const [day, setDay] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  useEffect(() => {
    if (showModal) {
      setDay("");
      setStarttime("");
      setEndtime("");
    }
  }, [showModal]);
  const handleDone = () => {
    if (starttime.trim() == "" || endtime.trim() == "" || day.trim() == "") {
      alert("Enter data before submit");
      setDay("");
      setStarttime("");
      setEndtime("");
      setShowModal(false);
    } else {
      axios
        .post("http://localhost:3000/v1/manageresource/timeslot", {
          day,
          starttime,
          endtime,
        })
        .then((e) => {
          console.log("success");
          setDay("");
          setStarttime("");
          setEndtime("");
          setData([]);
          setShowModal(false);
        })
        .catch((e) => {
          setShowModal(false);
        });
    }
  };
  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto ${
        showModal ? "block" : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-gray-50 px-4 py-3">
            <h3
              className="text-lg leading-6 text-center font-medium text-gray-900"
              id="modal-title"
            >
              {title}
            </h3>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="flex flex-col space-y-4">
              <label for="day" class="text-lg font-medium">
                Day
              </label>
              <input
                id="day"
                name="day"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setDay(e.target.value)}
                placeholder="First letter must be capital Ex. Monday"
              />

              <label for="starttime" class="text-lg font-medium">
                Start Time
              </label>
              <input
                id="starttime"
                name="starttime"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setStarttime(e.target.value)}
                placeholder="Start with time then A.M or P.M Ex. 10:00 A.M"
              />

              <label for="endtime" class="text-lg font-medium">
                End Time
              </label>
              <input
                id="endtime"
                name="endtime"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setEndtime(e.target.value)}
                placeholder="Start with time then A.M or P.M Ex. 10:30 A.M"
              />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleDone}
            >
              Done
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const SubjectModal = ({ title, showModal, setShowModal, setData }) => {
  const handleCloseModal = () => setShowModal(false);
  const [day, setDay] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  useEffect(() => {
    if (showModal) {
      setDay("");
      setStarttime("");
      setEndtime("");
    }
  }, [showModal]);
  const handleDone = () => {
    if (starttime.trim() == "" || endtime.trim() == "" || day.trim() == "") {
      alert("Enter data before submit");
      setDay("");
      setStarttime("");
      setEndtime("");
      setShowModal(false);
    } else {
      axios
        .post("http://localhost:3000/v1/manageresource/timeslot", {
          day,
          starttime,
          endtime,
        })
        .then((e) => {
          console.log("success");
          setDay("");
          setStarttime("");
          setEndtime("");
          setData([]);
          setShowModal(false);
        })
        .catch((e) => {
          setShowModal(false);
        });
    }
  };
  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto ${
        showModal ? "block" : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-gray-50 px-4 py-3">
            <h3
              className="text-lg leading-6 text-center font-medium text-gray-900"
              id="modal-title"
            >
              {title}
            </h3>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="flex flex-col space-y-4">
              <label for="day" class="text-lg font-medium">
                Day
              </label>
              <input
                id="day"
                name="day"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setDay(e.target.value)}
                placeholder="First letter must be capital Ex. Monday"
              />

              <label for="starttime" class="text-lg font-medium">
                Start Time
              </label>
              <input
                id="starttime"
                name="starttime"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setStarttime(e.target.value)}
                placeholder="Start with time then A.M or P.M Ex. 10:00 A.M"
              />

              <label for="endtime" class="text-lg font-medium">
                End Time
              </label>
              <input
                id="endtime"
                name="endtime"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setEndtime(e.target.value)}
                placeholder="Start with time then A.M or P.M Ex. 10:30 A.M"
              />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleDone}
            >
              Done
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const dataoftimeslots = [
  { starttime: "8:30 A.M.", endtime: "9:30 A.M.", id: 1 },
  { starttime: "9:30 A.M.", endtime: "10:30 A.M.", id: 2 },
  { starttime: "11:45 P.M.", endtime: "12:45 P.M.", id: 3 },
  { starttime: "1:30 P.M.", endtime: "2:30 P.M.", id: 4 },
  { starttime: "2:30 P.M.", endtime: "3:30 P.M.", id: 5 },
  { starttime: "3:30 P.M.", endtime: "4:30 P.M.", id: 6 },
  { starttime: "4:30 P.M.", endtime: "5:30 P.M.", id: 7 },
];
const dataofroom = [
  { no: "1", type: "Lab", id: 1 },
  { no: "26", type: "Classroom", id: 2 },
  { no: "6", type: "Classroom", id: 3 },
  { starttime: "2", type: "Lab", id: 4 },
];

export function TimeslotsModal({ setData, setShowModal, showModal }) {
  const [modelData, setModalData] = useState([{ id: "", timeslot: "" }]);
  const [changeData, setChangeData] = useState({ id: "", timeslot: "" });
  useEffect(() => {
    setModalData(dataoftimeslots);
  }, [modelData.length]);

  const handleSave = () => {
    setData((prevState) => {
      return prevState.map((item) => {
        console.log(item);
        if (item.id == changeData.id) {
          return {
            ...item,
            timeslot: changeData.timeslot,
          };
        } else {
          return item;
        }
      });
    });

    setShowModal(false);
  };
  return (
    <>
      <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      ></button>
      {showModal.is ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {modelData.map((e) => {
                    if (e.id == 0) {
                    } else {
                      return (
                        <p
                          className={`${
                            changeData.id == e.id
                              ? "hover:border my-2 border "
                              : "hover:border my-2 "
                          }`}
                          onClick={async (ele) => {
                            setChangeData({
                              id: showModal.id,
                              timeslot: `${e.starttime} TO ${e.endtime}`,
                            });
                          }}
                        >
                          {e.starttime} TO {e.endtime}
                        </p>
                      );
                    }
                  })}
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-emerald-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSave()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export function ClassroomModal({ data, setData, setShowModal, showModal }) {
  const [modelData, setModalData] = useState([{ id: "", no: "", type: "" }]);
  const [changeData, setChangeData] = useState({ id: "", no: "", type: "" });
  useEffect(() => {
    setModalData(dataofroom);
  }, [modelData.length]);

  const handleSave = () => {
    setData((prevState) => {
      return prevState.map((item) => {
        if (item.id == changeData.id) {
          console.log(item.id);
          return {
            ...item,
            no: changeData.no,
            type: changeData.type,
          };
        } else {
          return item;
        }
      });
    });
    setShowModal(false);
  };
  return (
    <>
      <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      ></button>
      {showModal.is ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {modelData.map((e) => {
                    if (e.id == 0) {
                    } else {
                      return (
                        <div
                          className={`${
                            changeData.id == e.id
                              ? "hover:border my-2 border "
                              : "hover:border my-2 "
                          }`}
                          onClick={async () => {
                            setChangeData({
                              id: showModal.id,
                              no: e.no,
                              type: e.type,
                            });
                          }}
                        >
                          <p>{e.type}</p>
                          <p>{e.no}</p>
                        </div>
                      );
                    }
                  })}
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-emerald-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSave()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
