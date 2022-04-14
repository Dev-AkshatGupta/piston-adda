import React, { useState } from "react";
import "./authentication.css";
import { Link } from "react-router-dom";
import { useAuthorization } from "Context/AuthProvider";

function LogInForm() {
  const [viewPassword, setViewPassword] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const { logInHandler, authDispatch } = useAuthorization();
  function clickHandler(e) {
    //  to prevent initial refreshing of the page
    e.preventDefault();

    logInHandler(details.email, details.password, authDispatch);
  }

  return (
    <>
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Log-in Form
      </h2>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
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
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
      </div>
      {!viewPassword && (
        <i
          className="fa fa-eye text text-center mb-1"
          aria-hidden="true"
          onClick={(e) => setViewPassword(!viewPassword)}
        ></i>
      )}
      {viewPassword && (
        <i
          className="fas fa-eye-slash text text-center mb-1"
          onClick={(e) => setViewPassword(!viewPassword)}
        ></i>
      )}
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
          logInHandler("akshat", "akshat", authDispatch);
        }}
      >
        Guest Log-In
      </button>
      <Link to="/" className="link-btn text-center text-base">
        Create new account <i className="fas fa-chevron-right text-accent"></i>
      </Link>
      <p className="text-xs text-gray-500 mt-3"></p>
    </>
  );
}
// "adarshbalika",
    // password: "adarshBalika123",
export { LogInForm };
