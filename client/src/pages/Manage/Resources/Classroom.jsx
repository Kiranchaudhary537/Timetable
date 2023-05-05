import AXIOS from './../../../api/AXIOS';
import React, { useState, useEffect, useCallback } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import { MdDeleteForever, MdOutlineSearch } from "react-icons/md";
import "rsuite-table/dist/css/rsuite-table.css";

const ClassroomModel = ({ title, showModal, setShowModal, setData }) => {
  const handleCloseModal = () => setShowModal(false);
  const [no, setNo] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    setNo("");
    setType("");
  }, []);

  const handleDone = () => {
    if (no.trim() == "" || type.trim() == "") {
      alert("Enter data before submit");
      setType("");
      setNo("");
      setShowModal(false);
    } else {
      AXIOS
        .post("http://localhost:3000/v1/manageresource/classroom", {
          no,
          type,
        })
        .then((e) => {
          console.log("success");
          setType("");
          setNo("");
          setShowModal(false);
          setData([]);
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
            <div className="flex flex-col space-y-4">
              <label for="no" className="text-lg font-medium">
                No
              </label>
              <input
                id="no"
                name="no"
                type="text"
                className="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  setNo(e.target.value.trim().trimStart().toUpperCase());
                }}
                placeholder="26 or 6"
              />

              <label for="type" className="text-lg font-medium">
                Type Name
              </label>

              <input
                id="type"
                name="type"
                type="text"
                className="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  setType(e.target.value.trim().trimStart().toUpperCase());
                  console.log(e.target.value);
                }}
                placeholder="Classroom or Lab"
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
          checked={checkedKeys.some((item) => item === rowData[dataKey])}
        />
      </div>
    </BaseCell>
  );
};
export default function Classroom() {
  const [data, setData] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [isSearching, setSearching] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  useEffect(() => {
    AXIOS
      .get("/v1/manageresource/classroom")
      .then((res) => {
        setData(res.data.res);
      });
  }, [data.length]);

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
    await AXIOS
      .patch("/v1/manageresource/classroom", checkedKeys)
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
        item.no.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.type.toLowerCase().includes(searchInput.toLowerCase())
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
              <div className=" m-1 flex justify-center">
                <div className=" p-2 xl:w-96 flex flex-row">
                  <input
                    type="search"
                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
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
                  className=" p-2 mx-auto my-2 text-white bg-blue-600 rounded hover:bg-blue-700 md:mx-0 rounded-lg font-semibold"
                >
                  Add New Classroom or Lab
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
                  <HeaderCell>No</HeaderCell>
                  <Cell dataKey="no" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>Type</HeaderCell>
                  <Cell dataKey="type" />
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
                  <HeaderCell>No</HeaderCell>
                  <Cell dataKey="no" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>Type</HeaderCell>
                  <Cell dataKey="type" />
                </Column>
              </Table>
            )}
          </div>
        </div>
      </div>
      <ClassroomModel
        showModal={showModal}
        setDate={setData}
        title={"Add New Class"}
        setShowModal={setShowModal}
      />
    </>
  );
}
