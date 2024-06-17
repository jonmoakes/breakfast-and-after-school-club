import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  manageEmergencyContactDetailsAsync,
  getEmergencyContactDetailsAsync,
} from "./emergency-contact-details.thunks";

const INITIAL_STATE = {
  emergencyContactDetailsIsLoading: false,
  emergencyContactDetails: "",
  emergencyContactDetailsResult: "",
  emergencyContactDetailsError: null,
  retrievedEmergencyContactDetails: "",
  retrievedEmergencyContactDetailsResult: "",
  retrievedEmergencyContactDetailsError: null,
};

export const emergencyContactDetailsSlice = createSlice({
  name: "emergencyContactDetails",
  initialState: INITIAL_STATE,
  reducers: {
    setEmergencyContactDetails(state, action) {
      state.emergencyContactDetails = action.payload;
    },
    resetEmergencyContactDetailsResult(state) {
      state.emergencyContactDetailsResult = "";
    },
    resetEmergencyContactDetailsError(state) {
      state.emergencyContactDetailsError = null;
    },
    resetRetrievedEmergencyContactDetailsResult(state) {
      state.retrievedEmergencyContactDetailsResult = "";
    },
    resetRetrievedtEmergencyContactDetailsError(state) {
      state.retrievedEmergencyContactDetailsError = null;
    },
    resetEmergencyContactDetailsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectEmergencyContactDetailsSelectors: createSelector(
      (state) => state.emergencyContactDetailsIsLoading,
      (state) => state.emergencyContactDetails,
      (state) => state.emergencyContactDetailsError,
      (state) => state.emergencyContactDetailsResult,
      (state) => state.retrievedEmergencyContactDetails,
      (state) => state.retrievedEmergencyContactDetailsResult,
      (state) => state.retrievedEmergencyContactDetailsError,
      (
        emergencyContactDetailsIsLoading,
        emergencyContactDetails,
        emergencyContactDetailsError,
        emergencyContactDetailsResult,
        retrievedEmergencyContactDetails,
        retrievedEmergencyContactDetailsResult,
        retrievedEmergencyContactDetailsError
      ) => {
        return {
          emergencyContactDetailsIsLoading,
          emergencyContactDetails,
          emergencyContactDetailsError,
          emergencyContactDetailsResult,
          retrievedEmergencyContactDetails,
          retrievedEmergencyContactDetailsResult,
          retrievedEmergencyContactDetailsError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(manageEmergencyContactDetailsAsync.pending, (state) => {
        state.emergencyContactDetailsIsLoading = true;
      })
      .addCase(
        manageEmergencyContactDetailsAsync.fulfilled,
        (state, action) => {
          state.emergencyContactDetailsIsLoading = false;
          // state.emergencyContactDetails = action.payload;
          state.emergencyContactDetailsResult = "fulfilled";
          state.emergencyContactDetailsError = null;
        }
      )
      .addCase(manageEmergencyContactDetailsAsync.rejected, (state, action) => {
        state.emergencyContactDetailsIsLoading = false;
        state.emergencyContactDetailsResult = "rejected";
        state.emergencyContactDetailsError = action.payload;
      })
      .addCase(getEmergencyContactDetailsAsync.pending, (state) => {
        state.emergencyContactDetailsIsLoading = true;
      })
      .addCase(getEmergencyContactDetailsAsync.fulfilled, (state, action) => {
        state.emergencyContactDetailsIsLoading = false;
        state.retrievedEmergencyContactDetails = action.payload;
        state.retrievedEmergencyContactDetailsResult = "fulfilled";
        state.retrievedEmergencyContactDetailsError = null;
      })
      .addCase(getEmergencyContactDetailsAsync.rejected, (state, action) => {
        state.emergencyContactDetailsIsLoading = false;
        state.retrievedEmergencyContactDetailsResult = "rejected";
        state.retrievedEmergencyContactDetailsError = action.payload;
      });
  },
});

export const {
  setEmergencyContactDetails,
  resetEmergencyContactDetailsResult,
  resetEmergencyContactDetailsError,
  resetEmergencyContactDetailsState,
  resetRetrievedEmergencyContactDetailsResult,
  resetRetrievedEmergencyContactDetailsError,
} = emergencyContactDetailsSlice.actions;
export const { selectEmergencyContactDetailsSelectors } =
  emergencyContactDetailsSlice.selectors;

export const emergencyContactDetailsReducer =
  emergencyContactDetailsSlice.reducer;
