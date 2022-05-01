import React from "react";
import "./HomePage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { PostInput } from "Components/PostInput/PostInput";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function HomePage() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const loadingStatus = useSelector((state) => state.auth.loading);
  const postsArr=useSelector(state=>state.posts.posts);

  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header">
          <span className="text">Home</span>
        </header>
        <div className="empty"></div>
        <PostInput userObj={currentUser}/>
        {postsArr.map((post) => (
          <Post postObj={post} key={post._id} />
        ))}
      </div>
      <RightAside />
      <Outlet />
    </div>
  );
}

export { HomePage };
