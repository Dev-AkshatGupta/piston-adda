import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
const initialState={
    posts:[],
    profilePosts:[]
}
export const getAllPosts=createAsyncThunk("posts/getAllPosts",async(state,action)=>{
    try{const {data:{posts}}=await axios.get("/api/posts");
    return posts;}
    catch(error){
        console.log(error.response.data.errors);
    }
})
export const getProfilePosts=createAsyncThunk("posts/getProfilePosts",async(username)=>{
    try {
        const {data}=await axios.get(`/api/posts/user/${username}`)
        return data.posts; 
    } catch (error) {
        console.log(error.response.data.errors)
    }
})
 const postsSlice=createSlice({
    name:"posts",
    initialState,
    extraReducers(builder){
        builder.addCase(getAllPosts.fulfilled,(state,action)=>{
            state.posts=action.payload;
        });
        builder.addCase(getProfilePosts.fulfilled,(state,action)=>{
            state.profilePosts=action.payload;
            console.log(state.profilePosts);
        })
    }
})
export default postsSlice.reducer;