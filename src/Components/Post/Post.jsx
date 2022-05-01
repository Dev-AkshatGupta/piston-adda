import React from "react";
import "./Post.css";
import { BiImages } from "react-icons/bi";
import { BsSuitHeart } from "react-icons/bs";
import { BiDotsHorizontalRounded, BiComment } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";

function Post({postObj}) {
  const { content, username, userPhoto,_id } = postObj;
  return (
    <>
      <div className="post" >
        <img
          className="post__author-logo"
          src={userPhoto}
        />
        <div className="post__main">
          <div
            className="post__header"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{}}>
              <span className="post__author-name">{username}</span>
              <span className="post__author-slug">{username}</span>
              <span className="post__publish-time">10d</span>
            </div>
            <BiDotsHorizontalRounded />
          </div>
          <div className="post__content">
           {content}
            <a href="https://elixirdigest.net/digests/276">
              https://elixirdigest.net/digests/276
            </a>
            @_tamas_soos #myelixirstatus #elixirlang #phoenixframework
          </div>
        </div>
      </div>
      <div className="post__bottom">
        <BiImages />
        <AiOutlineRetweet />
        <BsSuitHeart />
        <BiComment />
      </div>
    </>
  );
}

export { Post };
