import React from "react";
import "./Post.css";
import { BiDotsHorizontalRounded, BiComment } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  likePost,
  disLikePost,
  bookMark,
  deleteBookMark,
} from "Redux/Reducers-Redux/postsSlice";
import  DropDown  from "Components/DropDown/DropDown";
import { Link } from "react-router-dom";
function Post({ postObj, currentUserObj }) {
  const dispatch = useDispatch();

  const {
    content,
    username,
    userPhoto,
    _id,
    id: postId,
    // likes: { likedBy, likeCount },
  } = postObj;
  const { id } = currentUserObj;
  const isPostInBookMark = useSelector((state) => state?.posts?.bookmark)?.some(
    (post) => post._id === _id
  );

  return (
    <>
      <div className="post">
        <img className="post__author-logo" src={userPhoto} />
        <div className="post__main">
          <div className="post__header flex justify-between">
            <div>
              <span className="post__author-name">{username}</span>
              <span className="post__author-slug">{username}</span>
              <span className="post__publish-time">10d</span>
            </div>
            <DropDown />
          </div>
          <div className="post__content">{content}</div>
        </div>
      </div>
      <div className="post__bottom">
        {isPostInBookMark ? (
          <BsBookmarkFill onClick={() => dispatch(deleteBookMark(_id))} />
        ) : (
          <i
            className="fal fa-bookmark"
            onClick={() => dispatch(bookMark(_id))}
          ></i>
        )}
        <AiOutlineRetweet />
        {postObj?.likes?.likedBy?.some((post) => post.id === id) ? (
          <i
            className="fas fa-heart"
            onClick={() => dispatch(disLikePost(_id))}
          ></i>
        ) : (
          <i
            className="fal fa-heart"
            onClick={() => dispatch(likePost(_id))}
          ></i>
        )}
        <Link to={`/post/${_id}`}>
          <BiComment />
        </Link>
      </div>
    </>
  );
}

export { Post };
