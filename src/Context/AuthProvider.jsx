import React, { createContext, useContext, useReducer, useEffect } from "react";

import { useSignUser } from "Utilities/Authentication";
import { reducer, authInitialState } from "Reducers/AuthReducer";


const AuthContext = createContext();
const useAuthorization = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, authInitialState);
const { signUpHandler, logInHandler } = useSignUser();

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
