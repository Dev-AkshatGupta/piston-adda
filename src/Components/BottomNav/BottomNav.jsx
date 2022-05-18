import React from "react";
import "./BottomNav.css";
import { Link, NavLink } from "react-router-dom";
import { GiHomeGarage } from "react-icons/gi";
import { HiHashtag, HiLogout } from "react-icons/hi";
import { BsGear } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { logOut } from "Redux/Reducers-Redux/authSlice";
const BottomNav = () => {
  const currentUser = useSelector((state) => state?.auth?.currentUser);
  const dispatch = useDispatch();
  return (
    <nav className="flex  items-center justify-evenly fixed bottom-0 bg-slate-50 w-full p-3 bottom__nav">
      <NavLink
        to="/homePage"
        className={({ isActive }) =>
          isActive ? `bottom__nav-active-link` : null
        }
      >
        <span className="text-3xl">
          <GiHomeGarage />
        </span>
      </NavLink>
      <NavLink
        to="/bookMarkPage"
        className={({ isActive }) =>
          isActive ? `bottom__nav-active-link` : null
        }
      >
        <span className="text-3xl">
          <i className="fal fa-bookmark mr-2"></i>
        </span>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive ? `bottom__nav-active-link` : null
        }
      >
        <span className="text-3xl">
          <HiHashtag />
        </span>
      </NavLink>
      <NavLink
        to={`/profilePage/${currentUser?.id}`}
        className={({ isActive }) =>
          isActive ? `bottom__nav-active-link` : null
        }
      >
        <span className="text-3xl">
          <CgProfile />
        </span>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? `bottom__nav-active-link` : null
        }
      >
        <span className="text-3xl">
          <BsGear />
        </span>
      </NavLink>
      <a>
        <span
          className="text-3xl"
          onClick={() => {
            console.log("Clicked");
            window.location.reload(false);
            dispatch(logOut());
          }}
        >
          <HiLogout />
        </span>
      </a>
    </nav>
  );
};

export default BottomNav;
