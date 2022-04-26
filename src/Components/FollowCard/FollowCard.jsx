import React from "react";
import "./FollowCard.css";
function FollowCard({ userObj }) {
  const {
    firstName,
    username,
    _id,
    profilePhoto: { chosen },
  } = userObj;
  console.log(userObj);
  return (
    <div className="who-to-follow__block" key={_id}>
      <img className="who-to-follow__author-logo" src={chosen} />
      <div className="who-to-follow__content">
        <div>
          <div className="who-to-follow__author-name">{firstName}</div>
          <div className="who-to-follow__author-slug">{username}</div>
        </div>

        <button className="btn btn-outline-pri p-1 rounded-xl px-2">
          Follow
        </button>
      </div>
    </div>
  );
}

export { FollowCard };
