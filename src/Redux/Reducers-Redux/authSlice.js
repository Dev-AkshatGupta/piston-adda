import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {notifySuccess,notifyError} from "Utilities/Notifications";

const initialState={
    currentUser:{},
    loading:false
}
export const login=createAsyncThunk("auth/login",async(userDetails)=>{
try {
    const response=await axios.post(`/api/auth/login`,{
    username:userDetails.username,
    password:userDetails.password,
    });
    return response.data;
} catch (error) {
  console.log(error.response.data.errors);  
}
})
export const signUp=createAsyncThunk("auth/signUp",async(userDetails)=>{
    try {
        const response= await axios.post(`/api/auth/signup`,{
            username:userDetails.userName,
            password:userDetails.password,
            name:userDetails.name
        });
        return response.data
    } catch (error) {
console.log(error.response.data.errors);        
    }
})
export const logOut=createAsyncThunk("auth/logOut",async()=>{
    localStorage.clear();
})
export const checkToken=createAsyncThunk("auth/checkToken",async()=>{
    const encodedToken=localStorage.getItem("token");
    try{const response=await axios.get("api/auth/verifyUser")}
    catch(error){
console.log(error.response.data.errors);        
 }

})

const authSlice=createSlice({
    name:"auth",
    initialState,
    extraReducers(builder){
        builder.addCase(login.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(login.fulfilled,(state,action)=>{
            state.currentUser=action.payload.foundUser;
            state.loading=false;
            localStorage.setItem("token",action.payload.encodedToken);
            notifySuccess("Hey you loge'd in man")        
        })
        builder.addCase(signUp.fulfilled,(state,action)=>{
            state.currentUser=action.payload.createdUser;
             localStorage.setItem("token",action.payload.encodedToken)
        })
        builder.addCase(logOut.fulfilled,(state,action)=>{
            notifyError("you logged out");
            state.currentUser={};
        })
        builder.addCase(checkToken.fulfilled,(state,action)=>{
            if(action.payload){
            state.currentUser=action.payload.user;
            }
        })
    }
})
export default authSlice.reducer;