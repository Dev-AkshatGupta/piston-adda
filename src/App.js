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
import {Link} from "react-router-dom";
import RestrictedRoute from "Components/CustomRoute/RestrictedRoute";
import {getAllUsers} from "Redux/Reducers-Redux/usersSlice";
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(checkToken());
      dispatch(getAllUsers());
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
