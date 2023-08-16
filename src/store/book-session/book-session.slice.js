import { createSlice } from "@reduxjs/toolkit";

import {
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
  resetSessionDocAsync,
} from "./book-session-thunks";
import { resetSessionErrorMessage } from "../../strings/strings";

const INITIAL_STATE = {
  sessionType: "",
  isLoading: false,
  updateSessionDoc: {
    result: "",
    error: null,
  },
  updateUserDocBalance: {
    result: "",
    error: null,
  },
  resetSessionDoc: {
    result: "",
    error: null,
  },
};

export const bookSessionSlice = createSlice({
  name: "bookSession",
  initialState: INITIAL_STATE,
  reducers: {
    setSessionType(state, action) {
      state.sessionType = action.payload;
    },
    resetSessionType(state) {
      state.sessionType = "";
    },
    resetBookSessionState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSessionDocAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSessionDocAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.updateSessionDoc.result = "fulfilled";
        state.updateSessionDoc.error = null;
      })
      .addCase(updateSessionDocAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.updateSessionDoc.result = "rejected";
        state.updateSessionDoc.error = action.payload;
      })

      .addCase(updateUserDocBalanceAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserDocBalanceAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.updateUserDocBalance.result = "fulfilled";
        state.updateUserDocBalance.error = null;
      })
      .addCase(updateUserDocBalanceAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.updateUserDocBalance.result = "rejected";
        state.updateUserDocBalance.error = action.payload;
      })

      .addCase(resetSessionDocAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetSessionDocAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.resetSessionDoc.result = "fulfilled";
        state.resetSessionDoc.error = null;
      })
      .addCase(resetSessionDocAsync.rejected, (state) => {
        state.isLoading = false;
        state.resetSessionDoc.result = "rejected";
        state.resetSessionDoc.error = resetSessionErrorMessage;
      });
  },
});

export const {
  setSessionType,
  setSessionPrice,
  resetUserDocBalanceError,
  resetBookSessionState,
} = bookSessionSlice.actions;

export const bookSessionReducer = bookSessionSlice.reducer;
