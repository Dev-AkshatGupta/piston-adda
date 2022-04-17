// import {LandingPage} from "Pages/LandingPage/LandingPage";
import Mockman from "mockman-js";
import { ToastContainer, } from 'react-toastify';
import {HomePage} from "Pages/HomePage/HomePage"
function App() {
  return (
    <div className="App">
   {/* <LandingPage/> */}
   <HomePage/>
   <ToastContainer/>
    </div>
  );
}

export default App;
