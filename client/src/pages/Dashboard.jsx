import React, { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Dashboard() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  // if (isLoggedIn == false) {
  //   console.log(false);
  //   navigate("/login");
  // }
  // useEffect(() => {
  //   if (isLoggedIn == false) {
  //     console.log(isLoggedIn);
  //     navigate("/login");
  //   }
  // }, [navigate]);
  return (
    <div className="flex justify-center h-screen w-full">
      <p>This page is under working.</p>
    </div>
  );
}
