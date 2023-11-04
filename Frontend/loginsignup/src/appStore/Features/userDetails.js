import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDetails = createAsyncThunk(
  "FetchUserDetails",
  async (tokenF) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/getuserdetails",

        {
          headers: { token: tokenF, "Content-Type": "application/json" },
        }
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

//Define Initial State

const initialState = {
  isLoading: true,
  isError: false,
  userDetailsFetched: {},
};

export const userDetailsSlice = createSlice({
  name: "userDetailsSlice",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetailsFetched = {};
    },
  },
  extraReducers: (builder) => {
    // FetchuserDetails
    builder.addCase(fetchUserDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetailsFetched = action.payload;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default userDetailsSlice.reducer;

export const { setUserDetails } = userDetailsSlice.actions;
