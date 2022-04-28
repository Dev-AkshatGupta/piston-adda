import { useUser } from "Context/UserContext";
import { authHeader } from "Utilities/Multiples";
import axios from "axios";
const useAllUsersData = () => {
  const { userState, userDispatch } = useUser();

  const getAllUser = async () => {
    // axios call to get all the users from the backend
    try {
      const { data } = await axios.get(`/api/users`);

      userDispatch({ type: "ALL_USERS_DATA", payload: data.users });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getAUser = async (userId) => {
    // axios call to get all the users from the backend
    try {
      const { data } = await axios.get(`/api/users/:${userId}`);
      console.log(data);
      // userDispatch({ type: "SINGLE_USER", payload: data.user });
    } catch (error) {
      console.log(error.response);
    }
  };
  const postUsersData = async (user) => {
    const { data } = await axios.post("", user, authHeader);
    console.log(data);
    //  userDispatch({type:"",payload:data});
  };
  return { getAllUser, getAUser, postUsersData };
};

export { useAllUsersData };
