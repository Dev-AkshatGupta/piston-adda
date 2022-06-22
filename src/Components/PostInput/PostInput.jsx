import React, { useState } from "react";
import "./PostInput.css";
import { TextArea } from "./TextArea";
import { GrGallery } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";
import Picker from "emoji-picker-react";
import { useNavigate } from "react-router-dom";
function PostInput({ children, userObj, setPost, post, setImage }) {
  const { profilePhoto, username } = userObj;
  const [showPicker, setShowPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setPost((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const navigate=useNavigate();
  return (
    <>
      <div className="postInput">
       
        <span
          className="cursor-pointer"
          onClick={navigate.bind(this, `/profilePage/${userObj?.id}`)}
        >
          <img className="post__author-logo" src={profilePhoto.chosen} />
        </span>

        <div className="post__main">
          <div className="post__content">
            <TextArea setPost={setPost} post={post} />
          </div>
        </div>
      </div>

      <div className="postInput__bottom">
        <div className="postInput__bottom-firstBlock">
          <label htmlFor="post image">
            <input
              type="file"
              accept="image/*"
              name="post image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              placeholder="shit"
              style={{
                position: "absolute",
                opacity: "none",
                width: "28px",
                background: "transparent",
                border: "none",
              }}
              className="custom-file-input"
            />
            <GrGallery />
          </label>

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
