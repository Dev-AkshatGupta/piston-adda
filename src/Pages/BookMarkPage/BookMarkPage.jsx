import React, { useEffect } from "react";
import "./bookMarkPage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { Outlet,useNavigate, useNavigationType } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const BookMarkPage = () => {
  const bookMarkPostArr = useSelector((state) => state.posts.bookmark);
  const currentUser = useSelector((state) => state.auth.currentUser);
const navigate=useNavigate();
  return (
    <div className="layout">
      <div className="layout__left-sidebar ">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header">
          <span className="text">Bookmarks</span>
        </header>

        <div className="empty"></div>
        {bookMarkPostArr.length > 0 ? (
          bookMarkPostArr?.map((post) => (
            <Post postObj={post} key={post._id} currentUserObj={currentUser} />
          ))
        ) : (
          <>
            <p className="text-center">There are no bookmarks</p>
            <div className="flex justify-center">
              {" "}
              <button
                className="btn btn-outline p-1 rounded-xl px-2"
                onClick={navigate.bind(this,"/homePage")}
              >
                Home
              </button>
            </div>{" "}
          </>
        )}
      </div>
      <RightAside />
      <Outlet />
    </div>
  );
};

export default BookMarkPage;
