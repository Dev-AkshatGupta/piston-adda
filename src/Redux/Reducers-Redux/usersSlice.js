import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notifySuccess, notifyError } from "Utilities/Notifications";

const initialState = {
  users: [],
  allUsers: [],
  profile: {},
  currentUser: {},
  followedUser: [],
};
const errorWarnFirst = (error) =>
  error.response.data.error[0]
    ? error.response.data.error[0]
    : "Something went wrong";

// const errorWarnSecond=
export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const { data } = await axios.get(`/api/users`);
    return data;
  } catch (error) {
    notifyError(errorWarnFirst(error));
    console.log(error.response);
  }
});

export const getAUser = createAsyncThunk("users/getAUser", async (userId) => {
  try {
    const { data } = await axios.get(`/api/users/${userId}`);
    return data.user;
  } catch (error) {
    notifyError(errorWarnFirst(error));
    console.log(error);
  }
});

export const unFollowUser = createAsyncThunk(
  "users/unFollowUser",
  async (followUserId) => {
    const encodedToken = localStorage.getItem("piston-adda-token");
    try {
      const { data } = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
     
      return data;
    } catch (error) {
      notifyError(errorWarnFirst(error));
      console.log(error.response);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async (followUserId) => {
    const encodedToken = localStorage.getItem("piston-adda-token");
    try {
      const { data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
    
      return data;
    } catch (error) {
      notifyError(errorWarnFirst(error));
      console.log(error.response);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchUser(state, action) {
      state.users = state.allUsers.filter(
        ({ firstName, username }) =>
          firstName.toLowerCase().includes(action.payload.toLowerCase()) ||
          username.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.allUsers = action.payload.users;
      })
      .addCase(getAUser.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.profile = action.payload.followUser;
      })
      .addCase(unFollowUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.profile = action.payload.followUser;
      });
  },
});
export const { searchUser } = usersSlice.actions;
export default usersSlice.reducer;
