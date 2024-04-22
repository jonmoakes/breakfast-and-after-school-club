import { createSelector, createSlice } from "@reduxjs/toolkit";
// import { deleteChildInfoAsync } from "./delete-child-info.thunks";

const INITIAL_STATE = {
  databaseManagementIsLoading: false,
  newMorningBookingClosingTime: "",
  databaseManagementError: null,
};

export const databaseManagementSlice = createSlice({
  name: "databaseManagement",
  initialState: INITIAL_STATE,
  reducers: {
    setNewMorningBookingClosingTime(state, action) {
      state.newMorningBookingClosingTime = action.payload;
    },
    resetDatabaseManagementError(state, action) {
      state.databaseManagementError = null;
    },
    resetDatabaseManagementState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDatabaseManagementSelectors: createSelector(
      (state) => state.databaseManagementIsLoading,
      (state) => state.newMorningBookingClosingTime,
      (state) => state.databaseManagementError,

      (
        databaseManagementIsLoading,
        newMorningBookingClosingTime,
        databaseManagementError
      ) => {
        return {
          databaseManagementIsLoading,
          newMorningBookingClosingTime,
          databaseManagementError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    // builder
    // .addCase(deleteChildInfoAsync.pending, (state) => {
    //   state.deleteChildInfoIsLoading = true;
    // })
    // .addCase(deleteChildInfoAsync.fulfilled, (state) => {
    //   state.deleteChildInfoIsLoading = false;
    //   state.deleteChildInfoResult = "fulfilled";
    //   state.deleteChildInfoError = null;
    // })
    // .addCase(deleteChildInfoAsync.rejected, (state, action) => {
    //   state.deleteChildInfoIsLoading = false;
    //   state.deleteChildInfoResult = "rejected";
    //   state.deleteChildInfoError = action.payload;
    // });
  },
});

export const {
  setNewMorningBookingClosingTime,
  resetDatabaseManagementError,
  resetDatabaseManagementState,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
