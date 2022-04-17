import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "Reducers/UserReducer";

const UserContext = createContext();
const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export { useUser, UserContextProvider };
