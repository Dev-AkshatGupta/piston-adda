import React from "react";
import "./HomePage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { PostInput } from "Components/PostInput/PostInput";
import { Outlet } from "react-router-dom";
function HomePage() {
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
        <PostInput />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <RightAside />
      <Outlet />
    </div>
  );
}

export { HomePage };
