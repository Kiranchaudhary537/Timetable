import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// import { AuthContext } from "./context/authContext";
// import jwt from "jsonwebtoken";
// import dotenv from 'dotenv'
// dotenv.config()

const Login = ({ setUserState }) => {
  // const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [verifiedError, setVerifiedError] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {

    // }
  };

  const API_URL = "http://localhost:3000";
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post(`${API_URL}/login`, user, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("user"),
          },
        })
        .then((response) => {
          // Handle successful response

          Cookies.remove();
          console.log(response.data.token);
          Cookies.set("token", response.data.token);
          // const role = jwt.sign(
          //   { role: response.data.role },
          //   process.env.JWT_SECRET
          // );
          Cookies.set("role",response.data.role);
          navigate("/dashboard", { replace: true });
        })
        .catch((error) => {
          setVerifiedError(true);
          console.error(error);
        });
      // axios
      //   .post("http://localhost:3000/login", user)
      //   .then((res) => {
      //     console.log(res);
      //     localStorage.setItem("user", JSON.stringify(res.data));
      //     navigate("/dashboard", { replace: true });
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //     setVerifiedError(true);
      //   });
    }
  }, [formErrors, isSubmit]);

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {verifiedError === true ? (
              <h1 className="text-xl font-bold text-red-700 leading-tight tracking-tight  md:text-2xl ">
                Wrong Email or Password
              </h1>
            ) : (
              <></>
            )}
            <h1 className="text-xl font-bold text-gray-900 leading-tight tracking-tight  md:text-2xl ">
              Log in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={changeHandler}
                  value={user.email}
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
                <p className="text-red-600">{formErrors.email}</p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={changeHandler}
                  value={user.password}
                  className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                  required
                />
                <p className="text-red-600">{formErrors.password}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  "
                      s
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-black-900 dark:text-primary-500"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>

              <button
                className="w-full text-black  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-700  text-white dark:focus:ring-primary-800"
                onClick={loginHandler}
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-900">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-900 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
