import React  from "react";
import "./ExplorePage.css";
import { LeftAside } from "Components/LeftAside/LeftAside";
import { RightAside } from "Components/RightAside/RightAside";
import { Post } from "Components/Post/Post";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {debounce} from "Utilities/debounce";
import {searchPost} from "Redux/Reducers-Redux/postsSlice";
function ExplorePage() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const explorePosts = useSelector((state) => state.posts.explorePosts);
  const dispatch=useDispatch();
  const search=debounce((input)=>{dispatch(searchPost(input))},1500);
  return (
    <div className="layout">
      <div className="layout__left-sidebar ">
        <LeftAside />
      </div>
      <div className="layout__main">
        <header className=" layout__main-header">
          <input
            type="text"
            className="nav-bottom-search"
            placeholder="search username or post"
            onKeyUp={(e) => {
              search(e.target.value);
            }}
          />
        </header>

        <div className="empty"></div>

        {explorePosts.length>0?explorePosts?.map((post) => (
          <Post postObj={post} key={post._id} currentUserObj={currentUser} />
        )):<p className="text-center mt-4">No results found...</p>}
      </div>
      <RightAside />
      <Outlet />
    </div>
  );
}

export { ExplorePage };
