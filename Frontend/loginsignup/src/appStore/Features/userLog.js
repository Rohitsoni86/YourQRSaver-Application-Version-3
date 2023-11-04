import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// MAKING API CALLS

export const makeUserLogin = createAsyncThunk("Userlogin", async (dataObj) => {
  let dataF = JSON.stringify(dataObj);
  try {
    const { data } = await axios.post(
      "http://localhost:3000/login/verifyuser",
      dataF,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    localStorage.setItem("Token", data.Token);
    return data.Token;
  } catch (err) {
    console.log(err);
    return err;
  }
});

//Define Initial State

const initialState = {
  isLoading: true,
  isError: false,
  isUserLogedIn: false,
  userToken: null,
};

export const userLogSlice = createSlice({
  name: "userLogDetails",
  initialState,
  reducers: {
    toggleUserLog: (state, action) => {
      state.isUserLogedIn = false;
    },
    removeToken: (state, action) => {
      state.userToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(makeUserLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(makeUserLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isUserLogedIn = true;
      state.userToken = action.payload;
    });
    builder.addCase(makeUserLogin.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default userLogSlice.reducer;

export const { toggleUserLog, removeToken } = userLogSlice.actions;
