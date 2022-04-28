import {LandingPage} from "Pages/LandingPage/LandingPage";
import Mockman from "mockman-js";
import { ToastContainer, } from 'react-toastify';
import {HomePage} from "Pages/HomePage/HomePage";
import {ProfilePage} from "Pages/ProfilePage/ProfilePage";
import {Page404} from "Pages/Page-404/Page404";
import {Route,Routes,Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/landingPage" element={<LandingPage/>}/>
        <Route path={`/profilePage/:profileId`} element={<ProfilePage/>}/>
        <Route path="*" element={<Page404/>}/>
        <Route path="/mock" element={<Mockman/>}/>
      </Routes>
   <ToastContainer/>
   <Outlet/>
    </div>
  );
}

export default App;
