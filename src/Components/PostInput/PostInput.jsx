import React from "react";
import "./PostInput.css";
import { TextArea } from "./TextArea";
import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
function PostInput({ children, userObj, setPost }) {
  const { profilePhoto, username } = userObj;
  return (
    <>
      <div className="postInput">
        <img className="post__author-logo" src={profilePhoto.chosen} />
        <div className="post__main">
          <div className="post__content">
            <TextArea setPost ={setPost}/>
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
          {/* <button className="btn btn-outline-pri p-3 rounded-xl py-1.5">
            Vroom
          </button> */}
          {children}
        </div>
      </div>
    </>
  );
}

export { PostInput };
