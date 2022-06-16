import React  from "react";
import "./ExplorePage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {debounce} from "Utilities/debounce";
function ExplorePage() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const postsArr = useSelector((state) => state.posts.posts);
  const dispatch=useDispatch();
  const search=debounce(()=>{},1500);
  return (
    <div className="layout">
      <div className="layout__left-sidebar ">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header">
          <input
            type="text"
            className="nav-bottom-search"
            placeholder=" search"
            onKeyUp={()=>{search()}}
          />
        </header>

        <div className="empty"></div>

        {postsArr?.map((post) => (
          <Post postObj={post} key={post._id} currentUserObj={currentUser} />
        ))}
      </div>
      <RightAside />
      <Outlet />
    </div>
  );
}

export { ExplorePage };
