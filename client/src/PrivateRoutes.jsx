import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import AXIOS from "./api/AXIOS";


// API endpoint for checking login status
const CHECK_LOGIN_API = "/v1/checkLogin";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(null); // set initial state to null

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await AXIOS.get(CHECK_LOGIN_API, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        localStorage.setItem("userRole", response.data.role);
        setAuthenticated(true);
      } catch (error) {
        console.error(error);
        setAuthenticated(false);
      }
    };

    checkLogin();
  }, []);

  if (authenticated === null) {
    return <div>Loading...</div>;
  }

  return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
