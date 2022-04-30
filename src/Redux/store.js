import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers-Redux/authSlice";
import usersReducer from "./Reducers-Redux/usersSlice";
const store=configureStore({
    reducer:{
        auth:authReducer,
        users:usersReducer
    }
});

export default store;