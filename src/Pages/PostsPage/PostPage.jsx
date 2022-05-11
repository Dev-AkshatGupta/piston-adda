import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "Components/Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { getAPost, } from "Redux/Reducers-Redux/postsSlice";
import { getComments,createComment} from "Redux/Reducers-Redux/commentsSlice";
import "./PostPage.css";
import { PostInput } from "Components/PostInput/PostInput";
import {Loader} from "Components/Loader/Loader";
const PostPage = () => {
  const { postId } = useParams();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPost(postId));
    dispatch(getComments(postId));
  }, []);

  const selectedPost = useSelector((state) => state?.posts?.currentPost);
  const comments = useSelector((state) => state?.comments?.comments);
  console.log(comments);
  const loadingStatus=useSelector(state=>state.posts.loadingStatus);
  const [comment,setComment]=useState("");
  return (
    <div className="layout">
      <LeftAside />
      <div className="layout__main">
        {loadingStatus ? (
          <p className="text-center">...loading</p>
        ) : (
          <Post postObj={selectedPost} currentUserObj={currentUser} />
        )}

        <PostInput userObj={currentUser} setPost={setComment} post={comment}>
          <button
            className="btn btn-outline-pri p-3 rounded-xl py-1.5"
            onClick={() => {
              dispatch(createComment({commentData:comment, postId:selectedPost?._id}));
              setComment("");
            }}
          >
            Vroom
          </button>
        </PostInput>
      </div>
      <RightAside />
    </div>
  );
};

export default PostPage;
