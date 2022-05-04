import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


const initialState={
    posts:[],
    profilePosts:[],
    bookmark:[]
}
export const getAllPosts=createAsyncThunk("posts/getAllPosts",async()=>{
    try{
        const {data:{posts}}=await axios.get("/api/posts");
        return posts;
}    catch(error){
        console.log(error.response.data.errors);
    }
});

export const getProfilePosts=createAsyncThunk("posts/getProfilePosts",async(username)=>{
    try {
        const {data}=await axios.get(`/api/posts/user/${username}`)
        return data.posts; 
    } catch (error) {
        console.log(error.response.data.errors)
    }
});

// These methods still needs to be checked and verified 
export const createPost=createAsyncThunk("posts/createPost",async(post)=>{
    console.log("Outside try")
    try {
        const encodedToken=localStorage.getItem("token");
        const {data}=await axios.post("/api/user/posts/",{content:post},{headers:{authorization:encodedToken}
        });
        console.log("function triggered")
        console.log(data.posts);
        return data.posts;
    } catch (error) {
        console.log(error.response)
    }
});
export const likePost=createAsyncThunk("posts/likePost",async(postId)=>{
    const encodedToken=localStorage.getItem("token");
    const {data}=await axios.post(`/api/posts/like/${postId}`,{},{headers:{authorization:encodedToken}});
    return data.posts;
});
export const disLikePost=createAsyncThunk("posts/disLikePost",async(postId)=>{
    const encodedToken=localStorage.getItem("token");
     const {data}=await axios.post(`/api/posts/dislike/${postId}`,{},{headers:{authorization:encodedToken}});
    return data.posts;
});
export const bookMark=createAsyncThunk("posts/bookMark",async(postId)=>{
  try{  const encodedToken=localStorage.getItem("token");
    const {data}=await axios.post(
        // `/api/posts/bookmark/${postId}`,
         `/api/users/bookmark/${postId}`,
    {},
    {headers:{authorization:encodedToken}});
    console.log(data);
return data.bookmarks;
}
    catch(error){console.log(error.response.data.errors)}
});
export const deleteBookMark=createAsyncThunk("posts/deleteBookMark",async(postId)=>{
  try{  const encodedToken=localStorage.getItem("token");
    const {data}=await axios.post(`/api/users/remove-bookmark/${postId}`,{},{headers:{authorization:encodedToken}})
return data.bookmarks;
}
    catch(error){console.log(error.response.data.errors)}
});

export const getBookMarks=createAsyncThunk("posts/getBookMarks",async ()=>{
    try{
        // const encodedToken=localStorage.getItem("token");
    const {data}=await axios.get(`/api/users/bookmark`);
    console.log(data);
    return data.bookmarks;}
    catch(error){
        console.log(error.response.data.errors);
    }
});

 const postsSlice=createSlice({
    name:"posts",
    initialState,
    extraReducers(builder){
        builder.addCase(getAllPosts.fulfilled,(state,action)=>{
            state.posts=action.payload;
        });
        builder.addCase(getProfilePosts.fulfilled,(state,action)=>{
            console.log();
            state.profilePosts=action.payload;
            
        });
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.posts=action.payload;
            console.log(action.payload);
        });
        builder.addCase(likePost.fulfilled,(state,action)=>{
            state.posts=action.payload;
        });
        builder.addCase(disLikePost.fulfilled,(state,action)=>{
            state.posts=action.payload;
        });
        builder.addCase(getBookMarks.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.bookmark=action.payload;
        });
        builder.addCase(bookMark.fulfilled,(state,action)=>{
            state.bookmark=action.payload;
        });
        builder.addCase(deleteBookMark.fulfilled,(state,action)=>{
            state.bookmark=action.payload;
        });
    }
});


export default postsSlice.reducer;