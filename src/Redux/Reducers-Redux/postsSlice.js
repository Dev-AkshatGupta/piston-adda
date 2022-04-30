import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
const initialState={
    posts:[]
}
export const getAllPosts=createAsyncThunk("posts/getAllPosts",async(state,action)=>{
    try{const {data:{posts}}=await axios.get("/api/posts");
    return posts;}
    catch(error){
        console.log(error.response.data.errors);
    }
})
 const postsSlice=createSlice({
    name:"posts",
    initialState,
    extraReducers(builder){
        builder.addCase(getAllPosts.fulfilled,(state,action)=>{
            state.posts=action.payload;
        })
    }
})
export default postsSlice.reducer;