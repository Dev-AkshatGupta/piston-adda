import React from "react";
import "./FollowCard.css";
function FollowCard() {
  return (
    <div className="who-to-follow__block">
      <img
        className="who-to-follow__author-logo"
        src="./images/profile-image-2.png"
      />
      <div className="who-to-follow__content">
        <div>
          <div className="who-to-follow__author-name">Elixir Digest</div>
          <div className="who-to-follow__author-slug">@elixirdigest</div>
        </div>

        <button className="btn btn-outline-pri p-1 rounded-xl px-2">
          Follow
        </button>
      </div>
    </div>
  );
}

export { FollowCard };
