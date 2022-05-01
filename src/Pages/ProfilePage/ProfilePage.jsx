import React, { useEffect } from "react";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { useParams } from "react-router-dom";
import "./ProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAUser } from "Redux/Reducers-Redux/usersSlice";
import { getProfilePosts } from "Redux/Reducers-Redux/postsSlice";
function ProfilePage() {
  const { profileId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAUser(profileId));
    //  username?dispatch(getProfilePosts(username)):null;
  }, []);
  const profile = useSelector((state) => state.users.profile);
  const {
    id,
    _id,
    username,
    profilePhoto,
    followers,
    following,
    bookmarks,
    coverPhoto,
    firstName,
  } = profile;

  const postsArr = useSelector((state) => state.posts.getProfilePosts);
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header">
          <span className="text">{firstName}</span>
        </header>
        <div className="empty"></div>
        <div className="profile___banner-img ">
          <img src={coverPhoto.chosen} alt="banner-img" />
        </div>
        <div className="profile p-2 flex-center-space-betw">
          <div className="profile__dp-img rounded-full w-32 h-32 rounded-full border-solid">
            <img
              src={profilePhoto.chosen}
              alt="profile dp"
              className="rounded-full"
            />
          </div>
          <div className="profile__edit-btn">
            <button className="btn btn-sec p-2 rounded-xl">Edit Profile</button>
          </div>
        </div>
        <div className="text-left font-extrabold pl-6 text-xl">{firstName}</div>
        <p className="text-left text-base  text-slate-500 font-thin pl-5">
          {username}
        </p>
        <p className="text-left text-base font-thin pl-5 text-slate-800">
          JavaScript | React is ❤️ | Neog-2022 | Chess
        </p>
        {/* Followers count */}
        {postsArr.map((post) => (
          <Post postObj={post} key={post._id} />
        ))}
      </div>
      <RightAside />
    </div>
  );
}

export { ProfilePage };
