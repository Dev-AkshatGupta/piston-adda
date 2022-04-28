import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthProvider} from "Context/AuthProvider";
import { MultiUseContextProvider} from "Context/MultiUseContext";
import {UserContextProvider} from "Context/UserContext";
// Call make Server
makeServer();

const root=ReactDOM.createRoot(  document.getElementById("root"))
root.render(
  <React.StrictMode>
         <Router>
        
           <UserContextProvider>     
              < MultiUseContextProvider> 
            <AuthProvider>
              <App/>
            </AuthProvider>
             </MultiUseContextProvider> 
            </UserContextProvider>
        
         </Router>
   </React.StrictMode>
)