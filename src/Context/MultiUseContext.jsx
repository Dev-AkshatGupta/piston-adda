import { createContext, useContext, useReducer } from "react";
 import { useAllUsersData } from "Utilities/UsersDetails";
import { reducer, initialState } from "Reducers/MultiUseReducer";
import {
  notifyError,
  notifySuccess,
  notifyInfo,
  notifyWarn,
} from "Utilities/Notifications";

const MultiUseContext = createContext();
const useMulti = () => useContext(MultiUseContext);

const MultiUseContextProvider = ({ children }) => {
  const [multiState, multiDispatch] = useReducer(reducer, initialState);
   const { getAllUser, getAUser, postUsersData } = useAllUsersData();
  return (
    <MultiUseContext.Provider
      value={{
        multiState,
        multiDispatch,
        notifyError,
        notifySuccess,
        notifyInfo,
        notifyWarn,
        getAllUser,
        getAUser,
        postUsersData,
      }}
    >
      {children}
    </MultiUseContext.Provider>
  );
};
export { useMulti, MultiUseContextProvider };
