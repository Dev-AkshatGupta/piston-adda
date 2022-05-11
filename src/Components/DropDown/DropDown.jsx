import React, { useState } from "react";
import { BsGear } from "react-icons/bs";
const DropDown = ({ children }) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500"
          //   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          id="options-menu"
          onClick={() => setDisplay((display) => !display)}
        >
          <BsGear />
          
        </button>
      </div>
      {
        display && children
        //   <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
        //     <div
        //       className="py-1 "
        //       role="menu"
        //       aria-orientation="vertical"
        //       aria-labelledby="options-menu"
        //     >
        //       <button
        //         href="#"
        //         className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
        //         role="menuitem"
        //       >
        //         <span className="flex flex-col">
        //           <span>Stripe</span>
        //         </span>
        //       </button>
        //       <a
        //         href="#"
        //         className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
        //         role="menuitem"
        //       >
        //         <span className="flex flex-col">
        //           <span>Mastercard</span>
        //         </span>
        //       </a>
        //       <a
        //         href="#"
        //         className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
        //         role="menuitem"
        //       >
        //         <span className="flex flex-col">
        //           <span>Paypal</span>
        //         </span>
        //       </a>
        //     </div>
        //   </div>
      }
    </div>
  );
};

export default DropDown;
