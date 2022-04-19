import React from "react";
import "./Post.css";
import { BiImages } from "react-icons/bi";
import { BsSuitHeart } from "react-icons/bs";
import { BiDotsHorizontalRounded, BiComment } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";

function Post() {
  return (
    <>
      <div className="post">
        <img
          className="post__author-logo"
          src="https://pps.whatsapp.net/v/t61.24694-24/263791054_1403105616787621_2864310468495639335_n.jpg?ccb=11-4&oh=ce63379d09f2ee919b60f808bf09fd9c&oe=626AD054"
        />
        <div className="post__main">
          <div
            className="post__header"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{}}>
              <span className="post__author-name">Elixir Digest</span>
              <span className="post__author-slug">@elixirdigest</span>
              <span className="post__publish-time">10d</span>
            </div>
            <BiDotsHorizontalRounded />
          </div>
          <div className="post__content">
            Yet Another Guide To Build a JSON API with Phoenix 1.5 shared in the
            latest Elixir Digest
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
