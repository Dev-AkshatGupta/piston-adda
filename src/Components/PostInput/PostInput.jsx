import React, { useState } from "react";
import "./PostInput.css";
import { TextArea } from "./TextArea";
import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import Picker from "emoji-picker-react";
function PostInput({ children, userObj, setPost, post }) {
  const { profilePhoto, username } = userObj;
  const [image,setImage]=useState("");
  const [showPicker, setShowPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setPost((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const imageHandler = async (image,content) => {
    try {
      const data = new FormData();
      data.append("file",image);
      data.append("cloud_name", "piston");
      data.append("upload_preset", "fridayaaa");

      fetch("https://api.cloudinary.com/v1_1/piston/image/upload" ?? "", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
         console.log( data.secure_url);        
        });
    } catch (error) {
      console.log(error);
    }
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
          <label htmlFor="post image" >
            <span>
              <GrGallery />
              <input
                type="file"
                accept="image/*"
                name="post image"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
                // style={{display:"none"}}
              />
            </span>
          </label>

      

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
