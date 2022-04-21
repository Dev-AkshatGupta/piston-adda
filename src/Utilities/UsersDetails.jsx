import { useMulti } from "Context/MultiUseContext";
const useAllUsersData = () => {
  const { notifyError, notifySuccess, notifyInfo, multiDispatch } = useMulti();
    const getAllUser = async () => {
    // axios call to get all the users from the backend
    try {
      const { data } = await axios.get(`/api/users`);
    console.log(data);
     multiDispatch({ type: "USERS_DATA", payload:data}); 
    } catch {
      console.log(error.response);
    }
  };

  return { getAllUser };
};
const 
export {useAllUsersData}