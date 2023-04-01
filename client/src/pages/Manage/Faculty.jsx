import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";

import "rsuite-table/dist/css/rsuite-table.css";
import { MdDeleteForever, MdOutlineSearch } from "react-icons/md";

const Data = [
  {
    id: 1,
    name: "vipul dabhi",
    short_form: "v.d",
    subjects: ["A.J.T", "A.O.S"],
  },
  {
    id: 2,
    name: "harshad prajapti",
    short_form: "h.d.p",
    subjects: ["c.j.t", "d.a.pf"],
  },
  {
    id: 3,
    name: "vipul dabhi",
    short_form: "S.K.V",
    subjects: ["mapi", "se"],
  },
];

const FacultyModal = ({ title, showModal, setShowModal, setData }) => {
  const handleCloseModal = () => setShowModal(false);
  const [name, setName] = useState("");
  const [short_form, setShortForm] = useState("");
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    if (showModal) {
      setName("");
      setShortForm("");
      setSubject("");
    }
  }, [showModal]);
  const handleDone = () => {
    if (name.trim() == "" || short_form.trim() == "" || subject.trim() == "") {
      alert("Enter data before submit");
      setName("");
      setShortForm("");
      setSubject("");
      setSubjects([]);
      setShowModal(false);
    } else {
      axios
        .post("http://localhost:3000/v1/manageresource/faculty", {
          name,
          short_form,
          subject,
        })
        .then((e) => {
          console.log("success");
          setName("");
          setShortForm("");
          setSubject("");
          setData([]);
          setShowModal(false);
        })
        .catch((e) => {
          setName("");
          setShortForm("");
          setSubject("");
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
              <label for="name" class="text-lg font-medium">
                Name
              </label>
              <input
                id="Name"
                name="Name"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) =>
                  setName(e.target.value.trim().trimStart().toUpperCase())
                }
                placeholder="Start with time then A.M or P.M Ex. 10:00 A.M"
              />
              <label for="short_fomr" class="text-lg font-medium">
                Short Form
              </label>

              <input
                id="short_fomr"
                name="short_fomr"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) =>
                  setShortForm(e.target.value.trim().trimStart().toUpperCase())
                }
                placeholder="Start with time then A.M or P.M Ex. 10:00 A.M"
              />

              <label for="subjects" class="text-lg font-medium">
                Subjects
              </label>
              <input
                id="subjects"
                name="subjects"
                type="text"
                class="border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  setSubject(e.target.value.trim().trimStart().toUpperCase());
                }}
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

const CustomSubjectCell = ({ rowData, dataKey, ...props }) => {
  const subjects = rowData.subjects.join(', ');
  return <Cell {...props}>{subjects}</Cell>;
};
export default function Faculty() {
  const [data, setData] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [isSearching, setSearching] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    axios.get("http://localhost:3000/v1/manageresource/faculty").then((res) => {
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
    await axios
      .patch("http://localhost:3000/v1/manageresource/faculty", checkedKeys)
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
        item.short_form.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.subjects.toLowerCase().includes(searchInput.toLowerCase())
      );
    });

    setTempData(filteredData);
    setCheckedKeys([]);
  };
  return (
    <>
      {/* <div className="w-full">
        <div className="flex justify-center h-screen w-full">
          <div className="border w-9/12 mt-16" style={{ height: `${28}rem` }}>
            <div className="flex flex-row justify-start">
              {data.length > 0 ? (
                <div
                  onClick={() => handleDelete()}
                  className="m-2 flex flex-row"
                >
                  <MdDeleteForever size={28} color={"red"} />
                </div>
              ) : (
                <></>
              )}
            </div>
            <Table data={Data}>
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
                <SubjectCell dataKey="short_form" />
              </Column>
            </Table>
          </div>
        </div>
      </div> */}
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
                  Add New Subject
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
                  <CustomSubjectCell dataKey="short_form" />
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
                  <HeaderCell>Name</HeaderCell>
                  <Cell dataKey="name" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>Short Form</HeaderCell>
                  <Cell dataKey="short_form" />
                </Column>
                <Column flexGrow={1}>
                  <HeaderCell>Subject</HeaderCell>
                  <CustomSubjectCell dataKey="subjects" />
                </Column>
              </Table>
            )}
          </div>
        </div>
      </div>
      <FacultyModal
        showModal={showModal}
        setDate={setData}
        title={"Add New Faculty"}
        setShowModal={setShowModal}
      />
    </>
  );
}
