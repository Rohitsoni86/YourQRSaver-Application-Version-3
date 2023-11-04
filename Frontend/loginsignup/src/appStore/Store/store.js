import { configureStore } from "@reduxjs/toolkit";
import userLogReducer from "../Features/userLog";
import userDetailsReducer from "../Features/userDetails";
import userSavedQRs from "../Features/SaveAndDeleteQR";

export const store = configureStore({
  reducer: {
    authentication: userLogReducer,
    userdetails: userDetailsReducer,
    savedQRList: userSavedQRs,
  },
});
