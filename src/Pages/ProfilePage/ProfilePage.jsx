import React from "react";

// import "./HomePage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { useParams } from "react-router-dom";
import "./ProfilePage.css";
function ProfilePage() {
  const {profileId}=useParams();
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header">
          <span className="text">Akshat</span>
        </header>
        <div className="empty"></div>
        <div className="profile___banner-img ">
          <img
            src="https://pbs.twimg.com/profile_banners/1248318243963461632/1637937949/600x200"
            alt="banner-img"
          />
        </div>
        <div className="profile p-2 flex-center-space-betw">
          <div className="profile__dp-img rounded-full w-32 h-32 rounded-full border-solid">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/263791054_1403105616787621_2864310468495639335_n.jpg?ccb=11-4&oh=ce63379d09f2ee919b60f808bf09fd9c&oe=626AD054"
              alt="profile dp"
              className="rounded-full"
            />
          </div>
          <div className="profile__edit-btn">
            <button className="btn btn-sec p-2 rounded-xl">Edit Profile</button>
          </div>
        </div>
        <div className="text-left font-extrabold pl-6 text-xl">
          Akshat Gupta
        </div>
        <p className="text-left text-base  text-slate-500 font-thin pl-5">
          @akshatgupta105
        </p>
        <p className="text-left text-base font-thin pl-5 text-slate-800">
          JavaScript | React is ❤️ | Neog-2022 | Chess
        </p>
        {/* Followers count */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <RightAside />
    </div>
  );
}

export { ProfilePage };
