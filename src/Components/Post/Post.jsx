import React from "react";
import "./Post.css";
import { BiComment } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  likePost,
  disLikePost,
  bookMark,
  deleteBookMark,
  deletePost,
  changeModalDisplay,
} from "Redux/Reducers-Redux/postsSlice";
import DropDown from "Components/DropDown/DropDown";
import { Link } from "react-router-dom";
function Post({ postObj, currentUserObj, loggedInUser }) {
  const dispatch = useDispatch();
  const { content, username, userPhoto, _id, id } = postObj;
  const isPostInBookMark = useSelector((state) => state.posts?.bookmark)?.some(
    (post) => post._id === _id
  );
  const isPostLikedByCurrentUser = useSelector(
    (state) => state.posts?.liked
  )?.some((post) => post._id === _id);
  return (
    <>
      <div className="post">
        <Link to={`/profilePage/${postObj?.userId}`}>
          <img className="post__author-logo" src={userPhoto} />
        </Link>
        <div className="post__main">
          <div className="post__header flex justify-between">
            <div>
              <Link to={`/profilePage/${postObj?.userId}`}>
                <span className="post__author-name">{username}</span>
                <span className="post__author-slug">{username}</span>
                {/* ToDO */}
                {/* <span className="post__publish-time">10d</span> */}
              </Link>
            </div>
            {username === loggedInUser?.username && (
              <DropDown>
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black       ring-opacity-5"
                >
                  <div
                    className="py-1 "
                  >
                    <a
                      className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex-center"
                      onClick={() => dispatch(deletePost(_id))}
                    >
                      <span className="flex flex-col flex-center">
                        <span>Delete Post</span>
                      </span>
                    </a>
                    <a
                      className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex-center"
                      onClick={() => dispatch(changeModalDisplay(postObj))}
                    >
                      <span className="flex flex-col flex-center">
                        <span>Edit Post</span>
                      </span>
                    </a>
                  </div>
                </div>
              </DropDown>
            )}
          </div>
          <div className="post__content">
            <Link to={`/post/${_id}`}>{content}</Link>
            {postObj?.imageUrl && (
              <img src={postObj?.imageUrl} alt="post-photo" />
            )}
          </div>
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
        <Link to={`/post/${_id}`}>
          <BiComment />
        </Link>

        {isPostLikedByCurrentUser ? (
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
      </div>
    </>
  );
}

export { Post };
