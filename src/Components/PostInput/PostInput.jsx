import React from "react";
import "./PostInput.css";
import { TextArea } from "./TextArea";
import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
function PostInput() {
  return (
    <>
      <div className="postInput">
        <img
          className="post__author-logo"
          src="https://pps.whatsapp.net/v/t61.24694-24/263791054_1403105616787621_2864310468495639335_n.jpg?ccb=11-4&oh=ce63379d09f2ee919b60f808bf09fd9c&oe=626AD054"
        />
        <div className="post__main">
          <div className="post__content">
            <TextArea />
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
          <button className="btn btn-outline-pri p-3 rounded-xl py-1.5">
            Vroom
          </button>
        </div>
      </div>
    </>
  );
}

export { PostInput };
