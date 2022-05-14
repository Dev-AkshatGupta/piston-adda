import {LandingPage} from "Pages/LandingPage/LandingPage";
import Mockman from "mockman-js";
import { ToastContainer, } from 'react-toastify';
import {HomePage} from "Pages/HomePage/HomePage";
import {ProfilePage} from "Pages/ProfilePage/ProfilePage";
function App() {
  return (
    <div className="App">
   <ProfilePage/>
   {/* <HomePage/> */}
   <ToastContainer/>
    </div>
  );
}

export default App;
