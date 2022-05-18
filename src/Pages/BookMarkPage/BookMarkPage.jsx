import React, { useEffect } from "react";
import "./bookMarkPage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const BookMarkPage = () => {

  const bookMarkPostArr = useSelector((state) => state.posts.bookmark);
  const currentUser = useSelector((state) => state.auth.currentUser);
  
  return (
    <div className="layout">
      <div className="layout__left-sidebar ">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header">
          <span className="text">BookMarks</span>
        </header>

        <div className="empty"></div>

        {bookMarkPostArr?.map((post) => (
          <Post postObj={post} key={post._id} currentUserObj={currentUser} />
        ))}
      </div>
      <RightAside />
      <Outlet />
    </div>
  );
};

export default BookMarkPage;
