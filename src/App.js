import { LandingPage } from "Pages/LandingPage/LandingPage";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import { HomePage } from "Pages/HomePage/HomePage";
import { ProfilePage } from "Pages/ProfilePage/ProfilePage";
import { Page404 } from "Pages/Page-404/Page404";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import PrivateRoute from "Components/CustomRoute/PrivateRoute";
import RestrictedRoute from "Components/CustomRoute/RestrictedRoute";
import { getAllUsers } from "Redux/Reducers-Redux/usersSlice";
import {
  editPostContent,
  getAllPosts,
  getBookMarks,
} from "Redux/Reducers-Redux/postsSlice";
import BookMarkPage from "Pages/BookMarkPage/BookMarkPage";
import SettingsPage from "Pages/SettingsPage/SettingsPage";
import PostPage from "Pages/PostsPage/PostPage";
import PostEditModal from "Components/PostEditModal/PostEditModal";
import { ExplorePage } from "Pages/ExplorePage/ExplorePage";
import BottomNav from "Components/BottomNav/BottomNav";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
    dispatch(getAllUsers());
    dispatch(getAllPosts());
     dispatch(getBookMarks());
  }, []);
  const location = useLocation();
  const editModalDisplay = useSelector(
    (state) => state?.posts?.editModalDisplay
  );
  const contentEditPost = useSelector((state) => state?.posts?.editedPost);
return (
  <div className="App">
    <Routes>
      <Route element={<RestrictedRoute />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/homePage" element={<HomePage />} />
        <Route path={`/profilePage/:profileId`} element={<ProfilePage />} />
        <Route path={`/settings`} element={<SettingsPage />} />
        <Route path={`/bookMarkPage`} element={<BookMarkPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Route>

      <Route path="*" element={<Page404 />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>

    {editModalDisplay && (
      <PostEditModal
        textArea={
          <textarea
            role="textbox"
            type="text"
            name="post"
            className="postInput__content-input"
            placeholder="Write something in this"
            rows="3"
            onChange={(e) => {
              dispatch(editPostContent(e.target.value));
            }}
            value={contentEditPost}
          ></textarea>
        }
      ></PostEditModal>
    )}
    {location.pathname !== "/" && <BottomNav />}
    <ToastContainer />
    <div className="empty "></div>
  </div>
);
}

export default App;
