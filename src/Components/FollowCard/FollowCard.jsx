import React from "react";
import "./FollowCard.css";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "Redux/Reducers-Redux/usersSlice";
function FollowCard({ userObj, currentUserObj }) {
  const {
    firstName,
    username,
    _id,
    profilePhoto: { chosen },
    id,
  } = userObj;
  const dispatch = useDispatch();
  
  const isProfileFollowedByUser = currentUserObj?.following?.some(
    (profile) => profile.id === id
  );
 
 
  return (
    <div className="who-to-follow__block" key={_id}>
      <Link to={`/profilePage/${userObj.id}`}>
        <img className="who-to-follow__author-logo" src={chosen} />
      </Link>

      <div className="who-to-follow__content">
        <div>
          <Link to={`/profilePage/${userObj.id}`}>
            <div className="who-to-follow__author-name">{firstName}</div>
            <div className="who-to-follow__author-slug">{username}</div>
          </Link>
        </div>

        {isProfileFollowedByUser ?? false ? (
          <button
            className="btn btn-outline-pri p-1 rounded-xl px-2"
            onClick={() => dispatch(unFollowUser(_id))}
          >
            Un-Follow
          </button>
        ) : (
          <button
            className="btn btn-outline-pri p-1 rounded-xl px-2"
            onClick={() => dispatch(followUser(_id))}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export { FollowCard };
