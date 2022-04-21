import React, { createContext, useContext, useReducer, useEffect } from "react";

import { signUpHandler, logInHandler } from "Utilities/Authentication";
import { reducer, authInitialState } from "Reducers/AuthReducer";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const useAuthorization = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, authInitialState);
  const navigate = useNavigate();

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
