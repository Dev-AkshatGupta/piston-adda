import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "Redux/Reducers-Redux/authSlice";
import { LeftAside } from "Components/LeftAside/LeftAside";
const SettingsPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [details, setDetails] = useState(currentUser);

  useEffect(() => {
    setDetails(currentUser);
  }, [currentUser]);
  return (
    <>
      <LeftAside />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Edit-Profile
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="username"
                    className="leading-7 text-sm text-gray-600"
                  >
                    User-Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) =>
                      setDetails({ ...details, username: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="Password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setDetails({ ...details, password: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="username"
                    className="leading-7 text-sm text-gray-600"
                  >
                    User-Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) =>
                      setDetails({ ...details, username: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="Profile Photo"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Profile Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="profile Photo"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    //   onChange={(e) => setImages({ profile: e.target.value })}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="Bio"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setDetails({ ...details, bio: e.target.value });
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => {
                    editUser(details);
                  }}
                >
                  Update my Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingsPage;
