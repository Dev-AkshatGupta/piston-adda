import AllRoutes from "AllRoutes";
import { ToastContainer } from "react-toastify";
import {useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import { getAllUsers } from "Redux/Reducers-Redux/usersSlice";
import {
  getAllPosts,
  getBookMarks,
} from "Redux/Reducers-Redux/postsSlice";
import GlobalComponents from "GlobalComponents";
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
 

  return (
    <div className="App">
      <AllRoutes />
      <GlobalComponents/>
      {location.pathname !== "/" && <BottomNav />}
      <ToastContainer />
      <div className="empty "></div>
    </div>
  );
}

export default App;
