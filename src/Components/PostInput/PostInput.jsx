import React from "react";
import "./PostInput.css";
import { TextArea } from "./TextArea";
import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
function PostInput({ children, userObj, setPost, post }) {
  const { profilePhoto, username } = userObj;
  return (
    <>
      <div className="postInput">
        <img className="post__author-logo" src={profilePhoto.chosen} />
        <div className="post__main">
          <div className="post__content">
            <TextArea setPost={setPost} post={post}/>
          </div>
        </div>
      </div>

      <div className="postInput__bottom">
        <div className="postInput__bottom-firstBlock">
          <GrGallery />
          <AiOutlineFileGif />
          <BsEmojiSmile />
        </div>
        <div className="postInput__bottom-secondBlock">
          {children}
        </div>
      </div>
    </>
  );
}

export { PostInput };
