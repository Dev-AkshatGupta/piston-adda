import React, { useState } from "react";
import "./HomePage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { PostInput } from "Components/PostInput/PostInput";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "Redux/Reducers-Redux/postsSlice";
import {notifyError} from "Utilities/Notifications";
function HomePage() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const loadingStatus = useSelector((state) => state.auth.loading);
  const postsArr = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const imageHandler = async (image, content) => {
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("cloud_name", "piston");
      data.append("upload_preset", "fridayaaa");

      fetch("https://api.cloudinary.com/v1_1/piston/image/upload" ?? "", {
        method: "post",
        body: data,
      })
        .then((res) => {
     
          return res.json()})
        .then((data) => {
          dispatch(createPost({post,imageUrl:data.secure_url}));
          setPost("");
          setImage("");
        });
    } catch (error) {
      notifyError("Can't upload image");
      setImage("");
      console.log(error);
    }
  };
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main relative">
        <header className=" layout__main-header ">
          <span className="text">Home</span>
        </header>

        <div className="empty"></div>
        <PostInput
          userObj={currentUser}
          setPost={setPost}
          post={post}
          setImage={setImage}

        >
          <button
            className="btn btn-outline-pri p-3 rounded-xl py-1.5"
            onClick={() => {
              !image?dispatch(createPost({ post, imageUrl: "" }))
              :imageHandler(image, post);
              
            }}
          >
            Vroom
          </button>
        </PostInput>
        {postsArr?.map((post) => (
          <Post
            postObj={post}
            key={post._id}
            currentUserObj={currentUser}
            loggedInUser={currentUser}
          />
        ))}
      </div>
      <RightAside />
      <Outlet />
    </div>
  );
}

export { HomePage };
