import React, { useEffect, useCallback } from "react";
import "./RightAside.css";
import { FollowCard } from "Components/FollowCard/FollowCard";
import { useSelector, useDispatch } from "react-redux";
import { searchUser } from "Redux/Reducers-Redux/usersSlice";
import { debounce } from "Utilities/debounce";
function RightAside() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const usersArr = useSelector((state) => state.users.users).filter(
    (user) => user.id !== currentUser.id
  );
  const dispatch = useDispatch();
  const currentUserObj = useSelector((state) => state.users.currentUser);

  const search = debounce((input) => {
    dispatch(searchUser(input));
  }, 1500);
 


  return (
    <div className="layout__right-sidebar-container">
      <div className="layout__right-sidebar">
        <header className="layout__right-sidebar-container-head">
          <div className="nav-bottom-search-box">
            <input
              type="text"
              className="nav-bottom-search"
              placeholder=" search username or name"
              onKeyUp={(e) => search(e.target.value)}
            />
          </div>
        </header>

        <div className="who-to-follow">
          <div className="who-to-follow__block">
            <div className="who-to-follow__heading">Who to follow</div>
          </div>

          {usersArr.length > 0 ? (
            usersArr.map((user) => (
              <FollowCard
                userObj={user}
                key={user._id}
                currentUserObj={currentUserObj}
              />
            ))
          ) : (
            <p className=" text-center">no such user...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export { RightAside };
