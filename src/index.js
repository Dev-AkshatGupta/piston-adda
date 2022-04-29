import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthProvider} from "Context/AuthProvider";
import { MultiUseContextProvider} from "Context/MultiUseContext";
import {UserContextProvider} from "Context/UserContext";
import {Provider} from "react-redux";
import store from "Redux/store";
// Call make Server
makeServer();

const root=ReactDOM.createRoot(  document.getElementById("root"))
root.render(
  <React.StrictMode>
         <Router>
        
           <UserContextProvider>     
              < MultiUseContextProvider> 
            <AuthProvider>
              <Provider store={store}>
              <App/>
              </Provider>
            </AuthProvider>
             </MultiUseContextProvider> 
            </UserContextProvider>
        
         </Router>
   </React.StrictMode>
)