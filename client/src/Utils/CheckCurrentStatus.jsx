import axios from "axios";
import { useState, useEffect } from "react";

export const CheckCurrentFacultyStatus = ({ id }) => {
  const [current, setCurrent] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/v1/getcurrentfucultystatus" + id)
      .then((res) => {
        setCurrent(res.data.message);
      });
  }, []);
  return current;
};
export const CheckCurrentLabStatus = ({ id }) => {
  const [current, setCurrent] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/v1/getcurrentlabstatus" + id)
      .then((res) => {
        setCurrent(res.data.message);
      });
  }, []);
  return current;
};
