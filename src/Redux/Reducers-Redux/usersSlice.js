import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
import {notifySuccess,notifyError} from "Utilities/Notifications";





const initialState={
    users:[],
    profile:{}
}



export const getAllUsers= createAsyncThunk("users/getAllUsers",async()=>{
     try {
      const { data } = await axios.get(`/api/users`);
      return data ;
    } catch (error) {
      console.log(error.response.data.errors);
    }
} )
 export const getAUser=createAsyncThunk("users/getAUser",async(userId)=>{
     const {data}=await axios.get(`/api/users/${userId}`)
     return data.user;
 })





const usersSlice=createSlice({
    name:"users",
    initialState,
    extraReducers(builder){
        builder.addCase(getAllUsers.fulfilled,(state,action)=>{
            state.users=action.payload.users;
        })
        builder.addCase(getAUser.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.profile=action.payload;
        })
    }
}) 
export default usersSlice.reducer;