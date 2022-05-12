import React, { useState } from "react";
import { BsGear } from "react-icons/bs";
const DropDown = ({ children }) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50"
          id="options-menu"
          onClick={() => setDisplay((display) => !display)}
        >
          <BsGear />
        </button>
      </div>
      {display && children}
    </div> 
  );
};

export default DropDown;
