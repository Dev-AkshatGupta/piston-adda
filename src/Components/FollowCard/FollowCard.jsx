import React from "react";
import "./FollowCard.css";
import { Link } from "react-router-dom";
function FollowCard({ userObj }) {
  const {
    firstName,
    username,
    _id,
    profilePhoto: { chosen },
  } = userObj;

  return (
    <div className="who-to-follow__block" key={_id}>
      <Link to={`/profilePage/${userObj._id}`}>
        <img className="who-to-follow__author-logo" src={chosen} />
      </Link>

      <div className="who-to-follow__content">
        <div>
          <Link to={`/profilePage/${userObj._id}`}>
            <div className="who-to-follow__author-name">{firstName}</div>
            <div className="who-to-follow__author-slug">{username}</div>
          </Link>
        </div>

        <button className="btn btn-outline-pri p-1 rounded-xl px-2">
          Follow
        </button>
      </div>
    </div>
  );
}

export { FollowCard };
