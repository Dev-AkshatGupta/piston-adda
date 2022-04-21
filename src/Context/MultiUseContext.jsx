import { createContext, useContext, useReducer } from "react";
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
  return (
    <MultiUseContext.Provider
      value={{
        multiState,
        multiDispatch,
        notifyError,
        notifySuccess,
        notifyInfo,
        notifyWarn,
      }}
    >
      {children}
    </MultiUseContext.Provider>
  );
};
export { useMulti, MultiUseContextProvider };
