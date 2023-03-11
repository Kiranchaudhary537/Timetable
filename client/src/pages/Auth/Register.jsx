import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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
      axios.post("http://localhost:3000/signup", user).then((res) => {
        alert(res.data.message);
        navigate("/login", { replace: true });
      });
    }
  }, [formErrors]);
  return (
    <>
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold text-gray-900 leading-tight tracking-tight  md:text-2xl ">
                Singup to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="fname" class="block mb-2 text-sm font-medium  ">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                    onChange={changeHandler}
                    value={user.fname}
                    class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.fname}</p>
                </div>
                <div>
                  <label for="lname" class="block mb-2 text-sm font-medium  ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                    onChange={changeHandler}
                    value={user.lname}
                    class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.lname}</p>
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium  ">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="xxx@abc.com"
                    onChange={changeHandler}
                    value={user.email}
                    class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.email}</p>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium  "
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
                    class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.password}</p>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium  "
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
                    class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                  <p className="text-red-600">{formErrors.cpassword}</p>
                </div>

                <button
                  class="w-full text-black  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-700  text-white dark:focus:ring-primary-800"
                  onClick={signupHandler}
                >
                  Register
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-900">
                  Already registered?{" "}
                  <Link
                    to="/login"
                    class="font-medium text-primary-900 hover:underline dark:text-primary-500"
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
