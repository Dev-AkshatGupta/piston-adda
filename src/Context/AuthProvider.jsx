import React, {
  createContext,
  useContext,
  useReducer,
} from "react";

import { signUpHandler, logInHandler } from "Utilities/UserDetails";
import { reducer, authInitialState } from "Reducers/AuthReducer";
const AuthContext = createContext();
const useAuthorization = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, authInitialState);
  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        signUpHandler,
        logInHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthorization, AuthProvider };
