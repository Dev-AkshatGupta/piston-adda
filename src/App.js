import {LandingPage} from "Pages/LandingPage/LandingPage";
import Mockman from "mockman-js";
import { ToastContainer, } from 'react-toastify';
import {HomePage} from "Pages/HomePage/HomePage";
import {ProfilePage} from "Pages/ProfilePage/ProfilePage";
import {Page404} from "Pages/Page-404/Page404";
import {Route,Routes,Outlet, useLocation} from "react-router-dom";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { checkToken} from "Redux/Reducers-Redux/authSlice";
import PrivateRoute from "Components/CustomRoute/PrivateRoute";
import RestrictedRoute from "Components/CustomRoute/RestrictedRoute";
import {getAllUsers} from "Redux/Reducers-Redux/usersSlice";
import {getAllPosts,getBookMarks} from "Redux/Reducers-Redux/postsSlice";
import BookMarkPage from "Pages/BookMarkPage/BookMarkPage";
import SettingsPage from "Pages/SettingsPage/SettingsPage";
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(checkToken());
      dispatch(getAllUsers());
      dispatch(getAllPosts());
      
      // This call is not working have to check it once done with it
      dispatch(getBookMarks());
  },[])
  const location =useLocation();

  return (
    <div className="App">
      <Routes>
       
        <Route element={<RestrictedRoute/>}>
          <Route path="/" element={<LandingPage/>}/> 
        </Route>
        <Route element={<PrivateRoute/>}>
          <Route path="/homePage"  element={<HomePage/>}/>
          <Route path={`/profilePage/:profileId`}  element={<ProfilePage/>}/>
          <Route path={`/settings`}  element={<SettingsPage/>}/>
          <Route path={`/bookMarkPage`}  element={<BookMarkPage/>}/>
        </Route>
     
        <Route path="*" element={<Page404/>}/>
        <Route path="/mock" element={<Mockman/>}/>
      </Routes>
  
   <ToastContainer/>
   <Outlet/>
    </div>
  );
}

export default App;
