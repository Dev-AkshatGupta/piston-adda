import { createContext, useContext, useReducer } from "react";
import { reducer, userState } from "Reducers/UserReducer";

const UserContext = createContext();
const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(reducer, userState);
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export { useUser, UserContextProvider };
