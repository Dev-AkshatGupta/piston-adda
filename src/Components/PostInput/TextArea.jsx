import React from "react";
import "./PostInput.css";
function TextArea({ setPost, post, value }) {
  return (
    <textarea
      role="textbox"
      type="text"
      name="post"
      className="postInput__content-input"
      placeholder="Write something in this"
      rows="3"
      onChange={(e) => {
        setPost(e.target.value);
      }}
      value={post}
    ></textarea>
  );
}

export { TextArea };
