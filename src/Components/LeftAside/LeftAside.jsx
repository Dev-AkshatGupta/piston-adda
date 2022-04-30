import React from "react";
import styles from "./LeftAside.module.css";
import { Link, NavLink } from "react-router-dom";
import { GiHomeGarage } from "react-icons/gi";
import { HiHashtag } from "react-icons/hi";
import { BsBell, BsEnvelope } from "react-icons/bs";

import { FaEllipsisH } from "react-icons/fa";

import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
function LeftAside() {
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
                  <NavLink to="">
                    <span className={`${styles.navigation_svg} `}>
                      <GiHomeGarage />
                    </span>
                    <span className={` ${styles.navigation_text}`}> Home</span>
                  </NavLink>
                  <NavLink to="">
                    <span className={`${styles.navigation_svg} `}>
                      <HiHashtag />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Hashtag
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
                  <NavLink to="">
                    <span className={`${styles.navigation_svg} `}>
                      <BsEnvelope />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Message
                    </span>
                  </NavLink>
                  <NavLink to="">
                    <span className={`${styles.navigation_svg} `}>
                      <CgProfile />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Profile
                    </span>
                  </NavLink>
                  <NavLink
                    to=""
                    // className={({isActive})=>}
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <HiOutlineDotsCircleHorizontal />
                    </span>
                    <span className={` ${styles.navigation_text}`}> More</span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className={`${styles.banner_bottom} my-3`}>
              <div className={`${styles.bottom_profile}`}>
                <div className={`${styles.profile}`}>
                  <span className="avatar avatar-sm">
                    <img
                      src="https://pbs.twimg.com/profile_images/1515328412885610503/8LHDJf1a_200x200.jpg"
                      alt="Profile photo"
                    />
                  </span>
                  <p>Akshat</p>
                  <span>
                    <FaEllipsisH />
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
