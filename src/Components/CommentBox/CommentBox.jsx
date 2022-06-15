import React from "react";
import DropDown from "Components/DropDown/DropDown";
import {
  deleteComment,
  upVoteComment,
  downVoteComment,
} from "Redux/Reducers-Redux/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import {BsFillArrowDownSquareFill,BsFillArrowUpSquareFill} from "react-icons/bs"
const CommentBox = ({ commentObj, postObj, setModalDisplay, setCommentId }) => {
  const dispatch = useDispatch();
  const currentUser=useSelector((state)=>state.auth?.currentUser);
  return (
    <>
      <div className="post">
        <img
          className="post__author-logo"
          src={commentObj?.userPhoto}
          alt="user image"
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
          <div className="post__content">
            {commentObj?.content}
            {commentObj?.imageUrl && (
              <img src={commentObj?.imageUrl} alt="commentImage" />
            )}
          </div>
        </div>
      </div>
      <div className="post__bottom">
        {commentObj.votes?.upvotedBy?.some(
          ({ _id }) => _id === currentUser._id
        ) ? (
          <>
            <button
              title="downvote"
              className="text-2xl text-accent"
              onClick={() => {
                dispatch(
                  downVoteComment({
                    postId: postObj._id,
                    commentId: commentObj._id,
                  })
                );
              }}
            >
              <BsFillArrowUpSquareFill />
            </button>
            <button
              title="downvote"
              className="text-2xl text-slate-400"
              onClick={() => {
                dispatch(
                  downVoteComment({
                    postId: postObj._id,
                    commentId: commentObj._id,
                  })
                );
              }}
            >
              <BsFillArrowDownSquareFill />
            </button>
          </>
        ) : (
          <>
            <span>
              <button
                className="text-2xl text-slate-400"
                onClick={() => {
                  dispatch(
                    upVoteComment({
                      postId: postObj._id,
                      commentId: commentObj._id,
                    })
                  );
                }}
              >
                <BsFillArrowUpSquareFill />
              </button>
              {` ${"  "} ${commentObj?.votes?.upvotedBy.length}`}
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default CommentBox;
