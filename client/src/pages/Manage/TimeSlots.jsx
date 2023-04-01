import axios from "axios";
import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { TimeSlotModal } from "./Model";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { MdDeleteForever, MdOutlineSearch } from "react-icons/md";

const BaseCell = React.forwardRef((props, ref) => {
  const { children, rowData, ...rest } = props;
  return (
    <Cell
      ref={ref}
      rowData={rowData}
      onDoubleClick={() => {
        console.log(rowData);
      }}
      {...rest}
    >
      {children}
    </Cell>
  );
});

const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => {
  return (
    <BaseCell {...props} style={{ padding: 0 }}>
      <div style={{ lineHeight: "46px" }}>
        <input
          type="checkbox"
          value={rowData[dataKey]}
          onChange={onChange}
          checked={checkedKeys.some((item) => item == rowData[dataKey])}
        />
      </div>
    </BaseCell>
  );
};
const TimeSlotModal = ({ title, showModal, setShowModal, setData }) => {
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
              <select
                id="countries"
                onChange={(e) => setStarttime(e.target.value)}
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
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
export default function Timeslots() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [isSearching, setSearching] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/v1/manageresource/timeslot")
      .then((res) => {
        setData(res.data.res);
      });
  }, [data.length]);
  useEffect(() => {
    if (searchInput.trim() == "") {
      setSearching(false);
      setTempData([]);
    } else {
    }
  }, [searchInput]);

  const handleCheckAll = (event) => {
    const checked = event.target.checked;
    const keys = checked ? data.map((item) => item._id) : [];
    setCheckedKeys(keys);
  };

  const handleCheck = useCallback(
    (event) => {
      const checked = event.target.checked;
      const value = event.target.value;
      const keys = checked
        ? [...checkedKeys, value]
        : checkedKeys.filter((item) => item !== value);
      setCheckedKeys(keys);
    },
    [checkedKeys]
  );
  const handleDelete = async () => {
    await axios
      .patch("http://localhost:3000/v1/manageresource/timeslot", checkedKeys)
      .then((e) => {
        setData(data.filter((elem) => !checkedKeys.includes(elem._id)));
        setCheckedKeys([]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSearch = () => {
    setTempData(data);
    setSearching(true);
    const filteredData = data.filter((item) => {
      return (
        item.day.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.starttime.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.endtime.toLowerCase().includes(searchInput.toLowerCase())
      );
    });

    setTempData(filteredData);
    setCheckedKeys([]);
  };
  return (
    <>
      <div className="w-full">
        <div className="  flex justify-center h-screen w-full">
          <div className="border w-9/12 mt-16" style={{ height: `${28}rem` }}>
            <div className="flex flex-row justify-between">
              <div
                onClick={() => handleDelete()}
                className="m-2 px-3 py-1.5 flex flex-row"
              >
                <MdDeleteForever className="" size={28} color={"red"} />
              </div>
              <div class=" m-1 flex justify-center">
                <div class=" p-2 xl:w-96 flex flex-row">
                  <input
                    type="search"
                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="exampleSearch"
                    placeholder="search"
                    onChange={(e) => setsearchInput(e.target.value)}
                    value={searchInput}
                  />
                  <div
                    onClick={() => handleSearch()}
                    className="m-1 rounded bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 "
                  >
                    <MdOutlineSearch
                      className="m-2 "
                      size={28}
                      color={"white"}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleShowModal}
                  class=" p-2 mx-auto my-2 text-white bg-blue-600 rounded hover:bg-blue-700 md:mx-0 font-semibold"
                >
                  Add New TimeSlots
                </button>
              </div>
            </div>
            {isSearching ? (
              <Table autoHeight={true} height={400} data={tempData}>
                <Column width={50} align="center">
                  <HeaderCell style={{ padding: 0 }}>
                    <div style={{ lineHeight: "40px" }}>
                      <input
                        type="checkbox"
                        onChange={handleCheckAll}
                        checked={checkedKeys.length === data.length}
                      />
                    </div>
                  </HeaderCell>
                  <CheckCell
                    dataKey="_id"
                    checkedKeys={checkedKeys}
                    onChange={handleCheck}
                  />
                </Column>
                <Column width={70} fullText>
                  <HeaderCell>Id</HeaderCell>
                  <Cell dataKey="_id" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>day</HeaderCell>
                  <Cell dataKey="day" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>start time</HeaderCell>
                  <Cell dataKey="starttime" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>end time</HeaderCell>
                  <Cell dataKey="endtime" />
                </Column>
                <Column>
                  <HeaderCell></HeaderCell>
                  <Cell></Cell>
                  <MdDeleteForever />
                </Column>
              </Table>
            ) : (
              <Table autoHeight={true} height={400} data={data}>
                <Column width={50} align="center">
                  <HeaderCell style={{ padding: 0 }}>
                    <div style={{ lineHeight: "40px" }}>
                      <input
                        type="checkbox"
                        onChange={handleCheckAll}
                        checked={checkedKeys.length === data.length}
                      />
                    </div>
                  </HeaderCell>
                  <CheckCell
                    dataKey="_id"
                    checkedKeys={checkedKeys}
                    onChange={handleCheck}
                  />
                </Column>
                <Column width={70} fullText>
                  <HeaderCell>Id</HeaderCell>
                  <Cell dataKey="_id" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>day</HeaderCell>
                  <Cell dataKey="day" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>start time</HeaderCell>
                  <Cell dataKey="starttime" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>end time</HeaderCell>
                  <Cell dataKey="endtime" />
                </Column>
                <Column>
                  <HeaderCell></HeaderCell>
                  <Cell></Cell>
                </Column>
              </Table>
            )}
          </div>
        </div>
      </div>
      <TimeSlotModal
        showModal={showModal}
        setDate={setData}
        title={"Add New TimeSlots"}
        setShowModal={setShowModal}
      />
    </>
  );
}

// code after chat gpt refactor
// import axios from "axios";
// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { Outlet } from "react-router-dom";
// import { Table, Column, HeaderCell, Cell } from "rsuite-table";
// import "rsuite-table/dist/css/rsuite-table.css";
// import { MdDeleteForever } from "react-icons/md";

// const BaseCell = React.memo(React.forwardRef((props, ref) => {
//   const { children, rowData, ...rest } = props;
//   return (
//     <Cell
//       ref={ref}
//       rowData={rowData}
//       onDoubleClick={() => {
//         console.log(rowData);
//       }}
//       {...rest}
//     >
//       {children}
//     </Cell>
//   );
// }));

// const CheckCell = React.memo(({ rowData, onChange, checkedKeys, dataKey, ...props }) => {
//   return (
//     <BaseCell {...props} style={{ padding: 0 }}>
//       <div style={{ lineHeight: "46px" }}>
//         <input
//           type="checkbox"
//           value={rowData[dataKey]}
//           onChange={onChange}
//           checked={checkedKeys.some((item) => item === rowData[dataKey])}
//         />
//       </div>
//     </BaseCell>
//   );
// });

// export default function Timeslots() {
//   const [data, setData] = useState([]);
//   const [checkedKeys, setCheckedKeys] = useState([]);

//   const fetchData = useCallback(async () => {
//     const res = await axios.get("http://localhost:3000/v1/manageresource/timeslot");
//     setData(res.data.res);
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const memoizedData = useMemo(() => data, [data.length]);

//   const handleCheckAll = useCallback((event) => {
//     const checked = event.target.checked;
//     const keys = checked ? memoizedData.map((item) => item._id) : [];

//     setCheckedKeys(keys);
//   }, [memoizedData]);

//   const handleCheck = useCallback(
//     (event) => {
//       const checked = event.target.checked;
//       const value = event.target.value;
//       const keys = checked
//         ? [...checkedKeys, value]
//         : checkedKeys.filter((item) => item !== value);
//       setCheckedKeys(keys);
//     },
//     [checkedKeys]
//   );

//   const handleDelete = async () => {
//     await axios.patch("http://localhost:3000/v1/manageresource/timeslot", checkedKeys)
//     setData((prevState) => prevState.filter((elem) => !checkedKeys.includes(elem._id)));
//     setCheckedKeys([]);
//   };
