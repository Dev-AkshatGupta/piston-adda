import React, { useState } from "react";
import "./PostInput.css";
import { TextArea } from "./TextArea";
import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import Picker from "emoji-picker-react";
function PostInput({ children, userObj, setPost, post }) {
  const { profilePhoto, username } = userObj;
  const [showPicker, setShowPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setPost((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  return (
    <>
      <div className="postInput">
        <img className="post__author-logo" src={profilePhoto.chosen} />
        <div className="post__main">
          <div className="post__content">
            <TextArea setPost={setPost} post={post} />
          </div>
        </div>
      </div>

      <div className="postInput__bottom">
        <div className="postInput__bottom-firstBlock">
          <GrGallery />
          <AiOutlineFileGif />
          <span onClick={() => setShowPicker((val) => !val)}>
            <BsEmojiSmile />
          </span>
        </div>
        <div className="postInput__bottom-secondBlock">{children}</div>
      </div>
      {showPicker && (
        <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
      )}
    </>
  );
}

export { PostInput };
