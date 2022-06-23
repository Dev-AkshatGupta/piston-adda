import React, { useState } from "react";
import "./authentication.css";
import { login } from "Redux/Reducers-Redux/authSlice";
import { useDispatch } from "react-redux";
import { notifyError } from "Utilities/Notifications";
import {throttling}from 'Utilities/debounce'
function LogInForm({ children }) {
  const [viewPassword, setViewPassword] = useState(false);
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const passwordRegEx =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  function validateDetails(details) {
    if (details.username === "" || details.password === "") {
      notifyError("Fill all the fields");
      return false;
    } else if (passwordRegEx.test(details.password)) {
      return passwordRegEx.test(details.password);
    } else {
      notifyError("Please fill password correctly");
      return false;
    }
  }
  function clickHandler(e) {
    //  to prevent initial refreshing of the page
    e.preventDefault();
   
    if (validateDetails(details)) {
       throttle(details);
    }
  }
const throttle = throttling((input)=>{dispatch(login(input))}, 3000);
  return (
    <>
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center mt-2.5">
        Log-in Form
      </h2>
      <div className="relative mb-4">
        <label htmlFor="userName" className="leading-7 text-sm text-gray-600">
          UserName
        </label>
        <input
          type="userName"
          id="userName"
          name="userName"
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="Password" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          type={!viewPassword ? "password" : "text"}
          id="full-name"
          name="full-name"
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out relative"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
       
        {!viewPassword && (
          <i
            className="fa fa-eye text text-center mb-1 absolute right-2.5 bottom-2.5 z-10"
            aria-hidden="true"
            onClick={(e) => setViewPassword(!viewPassword)}
          ></i>
        )}
        {viewPassword && (
          <i
            className="fas fa-eye-slash text text-center mb-1 bottom-2.5 absolute right-2.5 z-10"
            onClick={(e) => setViewPassword(!viewPassword)}
          ></i>
        )}
      </div>

      <button
        className="btn btn-outline-pri  py-2 px-8  rounded text-lg"
        onClick={(e) => clickHandler(e)}
      >
        Log-In
      </button>
      <button
        className="btn btn-outline-pri  py-2 px-8  rounded text-lg mt-1.5"
        onClick={(e) => {
          e.preventDefault();
          throttle({ username: "akshat", password: "akshat" });
        }}
      >
        Guest Log-In
      </button>
      {children}
    </>
  );
}

export { LogInForm };
