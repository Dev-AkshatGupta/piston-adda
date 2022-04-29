import axios from "axios";
import { notifySuccess, notifyWarn } from "Utilities/Notifications";
import { useNavigate } from "react-router-dom";
import {passwordRemover} from "./Multiples";
const useSignUser=()=>{
const navigate=useNavigate();
  const signUpHandler = async (
  firstName,
  lastName,
  email,
  password,
  dispatch,
  userDispatch
) => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      
      firstName,
      lastName,
      email,
      password,
    });

    // saving the encodedToken and userObj without password in the localStorage
    localStorage.setItem("token", response.data.encodedToken);
    localStorage.setItem("userObj", passwordRemover(response.data.createdUser));
    dispatch({
      type: "SIGN_IN",
      payload: response.data,
    });
    userDispatch({ type: "SIGN_UP", payload: response.data });
    notifySuccess("Signed in successfully");
    navigate("/");
  } catch (error) {
    notifyWarn(error);
    console.log(error.response);
  }
};

// to help user in login in the application
const logInHandler = async (username, password, dispatch) => {
  try {
    const response = await axios.post(`/api/auth/login`, {
      username,
      password,
    });
    localStorage.setItem("token", response.data.encodedToken);
   console.log(response);
    localStorage.setItem("userObj", passwordRemover(response.data.foundUser));
    

    dispatch({ type: "LOG_IN", payload: response.data });
    notifySuccess("Logged-in successfully");
      navigate("/");
  } catch (error) {
    notifyWarn("Error in Log in ");
  }
};
return { signUpHandler, logInHandler };}
export {useSignUser};
