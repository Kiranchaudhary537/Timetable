import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AXIOS from "../../api/AXIOS";
const Register = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    role: "",
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
    if (!values.fname) {
      error.fname = "First Name is required";
    }
    if (!values.lname) {
      error.lname = "Last Name is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
    }
    if (!values.role) {
      error.role = "Role is required";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
  
      AXIOS.post("/signup", user).then((res) => {
        navigate("/login", { replace: true });
      });
 
    }
  }, [formErrors]);
  return (
    <>
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-gray-900 leading-tight tracking-tight  md:text-2xl ">
                Singup to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="fname" className="block mb-2 text-sm font-medium  ">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                    onChange={changeHandler}
                    value={user.fname}
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.fname}</p>
                </div>
                <div>
                  <label for="lname" className="block mb-2 text-sm font-medium  ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                    onChange={changeHandler}
                    value={user.lname}
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.lname}</p>
                </div>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium  ">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="xxx@abc.com"
                    onChange={changeHandler}
                    value={user.email}
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.email}</p>
                </div>
                <div>
                  <label
                    for="password"
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
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium  "
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm Password"
                    onChange={changeHandler}
                    value={user.cpassword}
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.cpassword}</p>
                </div>
                <div className="">
                  <div className="flex   flex-row  justify-start">
                    <div className="flex mb-2 mx-3 flex-row ">
                      <label
                        for="password"
                        className="block  p-2 text-sm font-medium  "
                      >
                        Student
                      </label>
                      <input
                        type="radio"
                        name="role"
                        value="STUDENT"
                        id="student"
                        onChange={changeHandler}
                        className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                        required
                      />
                    </div>
                    <div className="flex mb-2  mx-3 flex-row ">
                      <label
                        for="password"
                        className="block p-2 text-sm font-medium  "
                      >
                        Faculty
                      </label>
                      <input
                        type="radio"
                        name="role"
                        value="FACULTY"
                        id="faculty"
                        onChange={changeHandler}
                        className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                        required
                      />
                    </div>
                  </div>
                  <p className="text-red-600">{formErrors.role}</p>
                </div>
                <button
                  className="w-full text-black  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-700  text-white dark:focus:ring-primary-800"
                  onClick={signupHandler}
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-900">
                  Already registered?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-900 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
