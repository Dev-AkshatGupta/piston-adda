import React, { useEffect } from "react";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { useParams } from "react-router-dom";
import "./ProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAUser } from "Redux/Reducers-Redux/usersSlice";
import { getProfilePosts } from "Redux/Reducers-Redux/postsSlice";
import {followUser,unFollowUser} from "Redux/Reducers-Redux/usersSlice";
function ProfilePage() {
  const { profileId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAUser(profileId));
  }, [profileId]);
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
  useEffect(() => {
    dispatch(getProfilePosts(username));
  }, [id]);
  const postsArr = useSelector((state) => state.posts.profilePosts);
  const currentUser = useSelector((state) => state?.users?.currentUser);
  const isProfileFollowedByUser = currentUser?.following?.some(
    (profile) => profile?.id === id
  );
  const loggedInUser = useSelector((state) => state.auth.currentUser);

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
          {coverPhoto?.chosen ? (
            <img src={coverPhoto?.chosen} alt="banner-img" />
          ) : (
            <img src={coverPhoto?.default} alt="banner-img" />
          )}
        </div>
        <div className="profile p-2 flex-center-space-betw">
          <div className="profile__dp-img rounded-full w-32 h-32 rounded-full border-solid">
            {profilePhoto?.chosen ? (
              <img
                src={profilePhoto?.chosen}
                alt="profile dp"
                className="rounded-full"
              />
            ) : (
              <img
                src={profilePhoto?.default}
                alt="profile dp"
                className="rounded-full"
              />
            )}
          </div>
        </div>

        <div className="text-left font-extrabold pl-5 text-xl">{firstName}</div>
        <p className="text-left text-base  text-slate-500 font-thin pl-5">
          {username}
        </p>
        <p className="text-left text-base font-thin pl-5 text-slate-800 ">
          {profile?.bio}
        </p>
        {/* Followers count */}
        <div className="flex justify-between px-2 mb-3.5 border-slate-300 border-b-2 pb-1">
          <span className={`w-{1/2} flex justify-evenly self-end pl-2`}>
            <span className="pl-1">{followers?.length} Followers</span>
            <span className="pl-3">{following?.length} Following</span>
          </span>
          {isProfileFollowedByUser ?? false ? (
            <button
              className="btn btn-outline-pri p-1 rounded-xl px-2"
              onClick={() => dispatch(unFollowUser(_id))}
            >
              Un-Follow
            </button>
          ) : (
            <button
              className="btn btn-outline-pri p-1 rounded-xl px-2"
              onClick={() => dispatch(followUser(_id))}
            >
              Follow
            </button>
          )}
        </div>
        {postsArr.map((post) => (
          <Post
            postObj={post}
            key={post._id}
            currentUserObj={currentUser}
            loggedInUser={loggedInUser}
          />
        ))}
      </div>
      <RightAside />
    </div>
  );
}

export { ProfilePage };
