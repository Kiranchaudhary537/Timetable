import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://timetable-api-z53n.onrender.com/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    "Content-Type": "application/json",
  },
});

export default AXIOS;
