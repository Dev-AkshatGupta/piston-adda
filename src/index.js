import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthProvider} from "Context/AuthProvider";
import { MultiUseContextProvider} from "Context/MultiUseContext";
import {UserContextProvider} from "Context/UserContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
        <Router>
          < MultiUseContextProvider>   
          <UserContextProvider>     
           <AuthProvider>
             <App />
           </AuthProvider>
           </UserContextProvider>
          </ MultiUseContextProvider>
        </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
