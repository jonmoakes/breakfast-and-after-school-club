import { createSelector, createSlice } from "@reduxjs/toolkit";
import { deleteUserBookingAsync } from "./user-booking-to-delete.thunks";

const INITIAL_STATE = {
  userBookingToDeleteIsLoading: false,
  userBookingToDelete: {},
  updateBookingsDoc: {
    result: "",
    error: null,
  },
};

export const userBookingToDeleteSlice = createSlice({
  name: "userBookingToDelete",
  initialState: INITIAL_STATE,
  reducers: {
    addUserBookingToDelete(state, action) {
      state.userBookingToDelete = action.payload;
    },
    resetUserBookingToDeleteState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectUserBookingToDeleteSelectors: createSelector(
      (state) => state.userBookingToDeleteIsLoading,
      (state) => state.userBookingToDelete[0],
      (state) => state.updateBookingsDoc,
      (
        userBookingToDeleteIsLoading,
        userBookingToDelete,
        updateBookingsDoc
      ) => {
        return {
          userBookingToDeleteIsLoading,
          userBookingToDelete,
          updateBookingsDoc,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserBookingAsync.pending, (state) => {
        state.userBookingToDeleteIsLoading = true;
      })
      .addCase(deleteUserBookingAsync.fulfilled, (state) => {
        state.userBookingToDeleteIsLoading = false;
        state.updateBookingsDoc.result = "fulfilled";
        state.updateBookingsDoc.error = null;
      })
      .addCase(deleteUserBookingAsync.rejected, (state, action) => {
        state.userBookingToDeleteIsLoading = false;
        state.updateBookingsDoc.result = "rejected";
        state.updateBookingsDoc.error = action.payload;
      });
  },
});

export const { addUserBookingToDelete, resetUserBookingToDeleteState } =
  userBookingToDeleteSlice.actions;
export const { selectUserBookingToDeleteSelectors } =
  userBookingToDeleteSlice.selectors;

export const userBookingToDeleteReducer = userBookingToDeleteSlice.reducer;
