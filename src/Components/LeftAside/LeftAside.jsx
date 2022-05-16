import React from "react";
import styles from "./LeftAside.module.css";
import { Link, NavLink } from "react-router-dom";
import { GiHomeGarage } from "react-icons/gi";
import { HiHashtag, HiLogout } from "react-icons/hi";
import { BsBell, BsEnvelope, BsGear } from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaEllipsisH } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
function LeftAside() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <aside className={`${styles.banner} `}>
      <div className={styles.bannerSmall}>
        <div className={styles.main}>
          <div className={`${styles.main_banner} px-3`}>
            <div className={styles.banner_upper}>
              <div className={`${styles.logo_container} py-0.5`}>
                <h1>
                  <Link to="/">
                    <img
                      src={require("./../../Assets/Images/FooterImage.png")}
                      alt="logo"
                    />
                  </Link>
                </h1>
              </div>

              <div className={`${styles.navigation} mt-2 mb-1 `}>
                <nav>
                  <NavLink
                    to="/homePage"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <GiHomeGarage />
                    </span>
                    <span className={` ${styles.navigation_text}`}> Home</span>
                  </NavLink>
                  <NavLink
                    to="/bookMarkPage"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <HiHashtag />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      BookMark
                    </span>
                  </NavLink>
                  <NavLink to="">
                    <span className={`${styles.navigation_svg} `}>
                      <BsBell />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Notifications{" "}
                    </span>
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <BsEnvelope />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Message
                    </span>
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <CgProfile />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Profile
                    </span>
                  </NavLink>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      isActive ? "active-link" : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <BsGear />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      {" "}
                      Settings
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className={`${styles.banner_bottom} my-3`}>
              <div className={`${styles.bottom_profile}`}>
                <div className={`${styles.profile}`}>
                  <Link
                    className="avatar avatar-sm"
                    to={`/profilePage/${currentUser?.id}`}
                  >
                    <img
                      src={currentUser?.profilePhoto?.chosen}
                      alt="Profile photo"
                    />
                  </Link>
                  <p>{currentUser?.username}</p>
                  <span>
                    <HiLogout />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export { LeftAside };
