import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
import {notifySuccess,notifyError} from "Utilities/Notifications";





const initialState={
    users:[],
}



export const getAllUsers= createAsyncThunk("users/getAllUsers",async()=>{
     try {
      const { data } = await axios.get(`/api/users`);
      return data ;
    } catch (error) {
      console.log(error.response.data.errors);
    }
} )






const usersSlice=createSlice({
    name:"users",
    initialState,
    extraReducers(builder){
        builder.addCase(getAllUsers.fulfilled,(state,action)=>{
            state.users=action.payload.users;
        })
    }
}) 
export default usersSlice.reducer;