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
        .then((res) => res.json())
        .then((data) => {
          console.log(data.secure_url);
          dispatch(createPost({post,imageUrl:data.secure_url}));
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header border-none">
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
              imageHandler(image, post);
              // dispatch(createPost(post));
              // setPost("");
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
