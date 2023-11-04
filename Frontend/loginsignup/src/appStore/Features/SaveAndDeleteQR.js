import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSavedQRList = createAsyncThunk(
  "FetchUserDetails",
  async (tokenF) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/getmyqrcodes",

        {
          headers: { token: tokenF, "Content-Type": "application/json" },
        }
      );
      console.log(data);
      return data.List;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const deleteQRFromList = createAsyncThunk(
  "DeleteQR",
  async ({ tokenF, QRId }) => {
    console.log(QRId);

    try {
      const { data } = await axios.delete(
        `http://localhost:3000/deleteqrcode/${QRId}`,

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
  QRSavedList: [],
  deletingQR: false,
  deleteStatus: false,
  deleteErr: false,
  deleteMsg: "",
};

export const savedQRListSlice = createSlice({
  name: "SavedQRList",
  initialState,
  extraReducers: (builder) => {
    // FetchuserDetails
    builder.addCase(fetchSavedQRList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSavedQRList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.QRSavedList = action.payload;
    });
    builder.addCase(fetchSavedQRList.rejected, (state, action) => {
      state.isError = true;
    });
    // Delete User Data
    builder.addCase(deleteQRFromList.pending, (state, action) => {
      state.deletingQR = true;
    });
    builder.addCase(deleteQRFromList.fulfilled, (state, action) => {
      state.deletingQR = false;
      state.deleteMsg = action.payload;
      state.QRSavedList = state.QRSavedList;
    });
    builder.addCase(deleteQRFromList.rejected, (state, action) => {
      state.deleteErr = true;
    });
  },
});

export default savedQRListSlice.reducer;
