import React, { useEffect } from "react";
import "./RightAside.css";
import { FollowCard } from "Components/FollowCard/FollowCard";
import { useSelector } from "react-redux";

function RightAside() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const usersArr = useSelector((state) => state.users.users).filter((user) => user.id !== currentUser.id
  );
  // This state is being continiously updated on follow and un-follow and used for that only
  const currentUserObj=useSelector(state=>state.users.currentUser);
  return (
    <div className="layout__right-sidebar-container">
      <div className="layout__right-sidebar">
        <header className="layout__right-sidebar-container-head">
          <div className="nav-bottom-search-box">
            <input
              type="text"
              className="nav-bottom-search"
              placeholder=" search"
            />
          </div>
        </header>
        <div className="trends-for-you">
          <div className="trends-for-you__block">
            <div className="trends-for-you__heading">Trends for you</div>
          </div>

          <div className="trends-for-you__block">
            <div className="trends-for-you__meta-information">
              Trending in Germany
            </div>
            <div className="trends-for-you__trend-name">#AmazonPrimeDay</div>
          </div>
          <div className="trends-for-you__block">
            <div className="trends-for-you__meta-information">
              Trending - Trending
            </div>
            <div className="trends-for-you__trend-name">#autos</div>
            <div className="trends-for-you__meta-information">2,800 Tweets</div>
          </div>
        </div>
        <div className="who-to-follow">
          <div className="who-to-follow__block">
            <div className="who-to-follow__heading">Who to follow</div>
          </div>

          {usersArr.map((user) => (
            <FollowCard
              userObj={user}
              key={user._id}
              currentUserObj={currentUserObj}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { RightAside };
