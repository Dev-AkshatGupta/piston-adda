import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {notifySuccess} from "Utilities/Notifications";

const initialState={
    currentUser:{},
    loading:false
}
export const login=createAsyncThunk("auth/login",async(userDetails)=>{
try {
    const response=await axios.post(`/api/auth/login`,{
        // userName:userDetails.userName,
        // password:userDetails.password,
    username:"akshat",
    password:"akshat",
    });
console.log(response)
    return response.data;

} catch (error) {
  console.log(error.response.data.errors);  
}
})
export const signUp=createAsyncThunk("auth/signUp",async(userDetails)=>{
    try {
        const response= await axios.post(`/api/auth/signup`,{
            userName:userDetails.userName,
            password:userDetails.password,
            name:userDetails.name
        });
        return response.data
    } catch (error) {
console.log(error.response);        
    }
})
export const logOut=createAsyncThunk("auth/logOut",async()=>{
    localStorage.clear();
})
const authSlice=createSlice({
    name:"auth",
    initialState,
    extraReducers(builder){
        builder.addCase(login.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.currentUser=action.payload.foundUser;
            state.loading=false;
            localStorage.setItem("token",action.payload.encodedToken);
            notifySuccess("Hey you loge'd in man")        
        })
        builder.addCase(signUp.fulfilled,(state,action)=>{
            state.currentUser=action.payload.createdUser;
             localStorage.setItem("token",action.payload.encodedToken)
        })
        builder.addCase(logOut.fulfilled,(actiom,state)=>{

        })
    }
})
export default authSlice.reducer;