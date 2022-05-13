import React, { useState } from "react";
import DropDown from "Components/DropDown/DropDown";
import { deleteComment, upVoteComment } from "Redux/Reducers-Redux/commentsSlice";
import { useDispatch } from "react-redux";
const CommentBox = ({ commentObj, postObj, setModalDisplay, setCommentId }) => {
  const dispatch = useDispatch();
  console.log(commentObj);
  return (
    <>
      <div className="post">
        <img
          className="post__author-logo"
          src={commentObj?.userPhoto}
          al="user image"
        />
        <div className="post__main">
          <div className="post__header flex justify-between">
            <div>
              <span className="post__author-name">{commentObj?.username}</span>
              <span className="post__author-slug">{commentObj?.username}</span>
            </div>
            <DropDown>
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex-center"
                    onClick={() =>
                      dispatch(
                        deleteComment({
                          postId: postObj?._id,
                          commentId: commentObj?._id,
                        })
                      )
                    }
                  >
                    <span className="flex flex-col flex-center">
                      <span>DeleteComment</span>
                    </span>
                  </a>
                  <a
                    className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 flex-center"
                    onClick={() => {
                      setModalDisplay((display) => !display);
                    setCommentId(commentObj._id);
                    }}
                  >
                    <span className="flex flex-col flex-center">
                      <span>Edit comment</span>
                    </span>
                  </a>
                </div>
              </div>
            </DropDown>
          </div>
          <div className="post__content">{commentObj?.content}</div>
        </div>
      </div>
      <div className="post__bottom">
        <button className="" onClick={()=>{dispatch(upVoteComment({ postId:postObj._id, commentId:commentObj._id }));}}>Up Vote</button>
        <button className="">Down Vote</button>
      </div>
    </>
  );
};

export default CommentBox;
