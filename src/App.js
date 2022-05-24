import AllRoutes from "AllRoutes";
import { ToastContainer } from "react-toastify";
import {useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "Redux/Reducers-Redux/authSlice";

import { getAllUsers } from "Redux/Reducers-Redux/usersSlice";
import {
  editPostContent,
  getAllPosts,
  getBookMarks,
} from "Redux/Reducers-Redux/postsSlice";
import PostEditModal from "Components/PostEditModal/PostEditModal";
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
      <AllRoutes />
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
