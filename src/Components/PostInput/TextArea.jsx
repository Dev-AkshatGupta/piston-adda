import React from "react";
import "./PostInput.css";
function TextArea() {
 

  return (
   
      <textarea
        role="textbox"
        type="text"
        name="post"
        className="postInput__content-input"
        placeholder="Write something in this"
        rows="3"
        // value={(e) => e.target.value}
      ></textarea>
   
  );
}

export { TextArea };
