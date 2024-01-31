import { createSlice } from "@reduxjs/toolkit";

import {
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
  resetSessionDocAsync,
  addSessionBookingInfoAsync,
} from "./book-session-thunks";

const INITIAL_STATE = {
  sessionType: "",
  sessionPrice: null,
  isLoading: false,
  childrenSelectedForBooking: [],
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
  addSessionBookingInfo: {
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
    setSessionPrice(state, action) {
      state.sessionPrice = action.payload;
    },
    setChildrenSelectedForBooking: (state, action) => {
      const checkboxName = Object.keys(action.payload)[0];
      const isChecked = action.payload[checkboxName];

      if (isChecked) {
        if (!state.childrenSelectedForBooking.includes(checkboxName)) {
          state.childrenSelectedForBooking.push(checkboxName);
        }
      } else {
        // Remove the checkboxName from the array if it's present
        state.childrenSelectedForBooking =
          state.childrenSelectedForBooking.filter(
            (name) => name !== checkboxName
          );
      }
    },
    resetBookSessionState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectSessionType: (state) => state.sessionType,
    selectSessionPrice: (state) => state.sessionPrice,
    selectBookSessionIsLoading: (state) => state.isLoading,
    selectUpdateSessionDoc: (state) => state.updateSessionDoc,
    selectUpdateUserDocBalance: (state) => state.updateUserDocBalance,
    selectResetSessionDoc: (state) => state.resetSessionDoc,
    selectAddSessionBookingInfo: (state) => state.addSessionBookingInfo,
    selectChildrenSelectedForBooking: (state) =>
      state.childrenSelectedForBooking,
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
      .addCase(resetSessionDocAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.resetSessionDoc.result = "rejected";
        state.resetSessionDoc.error = action.payload;
      })
      .addCase(addSessionBookingInfoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSessionBookingInfoAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.addSessionBookingInfo.result = "fulfilled";
        state.addSessionBookingInfo.error = null;
      })
      .addCase(addSessionBookingInfoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.addSessionBookingInfo.result = "rejected";
        state.addSessionBookingInfo.error = action.payload;
      });
  },
});

export const {
  setSessionType,
  setSessionPrice,
  resetUserDocBalanceError,
  resetBookSessionState,
  setChildrenSelectedForBooking,
  resetChildrenSelectedForBooking,
} = bookSessionSlice.actions;

export const {
  selectSessionType,
  selectSessionPrice,
  selectBookSessionIsLoading,
  selectUpdateSessionDoc,
  selectUpdateUserDocBalance,
  selectResetSessionDoc,
  selectAddSessionBookingInfo,
  selectChildrenSelectedForBooking,
} = bookSessionSlice.selectors;

export const bookSessionReducer = bookSessionSlice.reducer;
