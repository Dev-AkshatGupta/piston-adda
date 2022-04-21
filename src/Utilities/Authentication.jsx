import axios from "axios";
import { notifySuccess, notifyWarn } from "Utilities/Notifications";
import { useNavigate } from "react-router-dom";
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
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", response.data.encodedToken);
    dispatch({
      type: "SIGN_IN",
      payload: response.data,
    });
    userDispatch({ type: "SIGN_UP", payload: response.data });
    notifySuccess("Signed in successfully");
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
    localStorage.setItem("Name", response.data.foundUser.firstName);
    localStorage.setItem("username", response.data.foundUser.username);
    console.log(response.data);

    // dispatch({ type: "LOG_IN", payload: response.data });
    notifySuccess("Logged-in succesfully");
  } catch (error) {
    notifyWarn("Error in Log in ");
  }
};
export { signUpHandler, logInHandler };
