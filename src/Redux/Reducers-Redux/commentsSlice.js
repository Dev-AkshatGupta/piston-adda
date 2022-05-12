import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { notifySuccess, notifyError } from "Utilities/Notifications";

const initialState = {
  comments: [],
  loading: false,
};
export const getComments = createAsyncThunk(
  "comments/getComments",
  async (postId) => {
    console.log(postId);
    try {
      const { data } = await axios.get(`/api/comments/${postId}`);
      console.log(data.comments);
      return data.comments;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (details) => {
    const { postId, commentData } = details;

    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/comments/add/${postId}`,
        { content: commentData },
        { headers: { authorization: encodedToken } }
      );
      return data.comments;
    } catch (error) {
      console.log(error.response);
    }
  }
);
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (details) => {
    const { postId, commentId } = details;

    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data.comments;
    } catch (error) {
      console.log(error.response);
    }
  }
);
export const editCommentData = createAsyncThunk(
  "comments/editComment",
  async (details) => {
    const { postId, commentData, commentId } = details;
    console.log(postId,commentData,commentId);
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { content: commentData },
        { headers: { authorization: encodedToken } }
      );
      return data.comments;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const editComment=createAsyncThunk("comments/editComment",async(details)=>{
  const { postId, commentData, commentId } = details;
  console.log(details);
});

export const upVoteComment = createAsyncThunk(
  "comments/upVoteComment",
  async (details) => {
    const { postId, commentId } = details;
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/comments/upvote/${postId}/${commentId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data.comments;
    } catch (error) {
      console.log(error.response);
    }
  }
);
export const downVoteComment = createAsyncThunk(
  "comments/downVoteComment",
  async (details) => {
    const { postId, commentId } = details;
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        `/api/comments/downvote/${postId}/${commentId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data.comments;
    } catch (error) {
      console.log(error.response);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(deleteComment.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(upVoteComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(downVoteComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});
export default commentsSlice.reducer;
