import React, { useState } from "react";
import "./HomePage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { PostInput } from "Components/PostInput/PostInput";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "Redux/Reducers-Redux/postsSlice";
function HomePage() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const loadingStatus = useSelector((state) => state.auth.loading);
  const postsArr = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
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
        <PostInput userObj={currentUser} setPost={setPost} post={post}>
          <button
            className="btn btn-outline-pri p-3 rounded-xl py-1.5"
            onClick={() =>{ dispatch(createPost(post));setPost("");}}
          >
            Vroom
          </button>
        </PostInput>
        {postsArr?.map((post) => (
          <Post postObj={post} key={post._id} currentUserObj={currentUser} />
        ))}
      </div>
      <RightAside />
      <Outlet />
    </div>
  );
}

export { HomePage };
