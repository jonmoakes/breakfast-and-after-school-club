import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  manageEmergencyContactDetailsAsync,
  getEmergencyContactDetailsAsync,
} from "./emergency-contact-details.thunks";

const INITIAL_STATE = {
  emergencyContactDetailsIsLoading: false,
  emergencyContactDetails: "",
  emergencyContactDetailsTwo: "",
  manageEmergencyContactDetailsResult: "",
  manageEmergencyContactDetailsError: null,
  retrievedEmergencyContactDetails: "",
  retrievedEmergencyContactDetailsTwo: "",
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
    setEmergencyContactDetailsTwo(state, action) {
      state.emergencyContactDetailsTwo = action.payload;
    },
    resetEmergencyContactDetailsResult(state) {
      state.manageEmergencyContactDetailsResult = "";
    },
    resetEmergencyContactDetailsError(state) {
      state.manageEmergencyContactDetailsError = null;
    },
    resetEmergencyContactDetailsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectEmergencyContactDetailsSelectors: createSelector(
      (state) => state.emergencyContactDetailsIsLoading,
      (state) => state.emergencyContactDetails,
      (state) => state.emergencyContactDetailsTwo,
      (state) => state.manageEmergencyContactDetailsResult,
      (state) => state.manageEmergencyContactDetailsError,
      (state) => state.retrievedEmergencyContactDetails,
      (state) => state.retrievedEmergencyContactDetailsTwo,
      (state) => state.retrievedEmergencyContactDetailsResult,
      (state) => state.retrievedEmergencyContactDetailsError,
      (
        emergencyContactDetailsIsLoading,
        emergencyContactDetails,
        emergencyContactDetailsTwo,
        manageEmergencyContactDetailsResult,
        manageEmergencyContactDetailsError,
        retrievedEmergencyContactDetails,
        retrievedEmergencyContactDetailsTwo,
        retrievedEmergencyContactDetailsResult,
        retrievedEmergencyContactDetailsError
      ) => {
        return {
          emergencyContactDetailsIsLoading,
          emergencyContactDetails,
          emergencyContactDetailsTwo,
          manageEmergencyContactDetailsResult,
          manageEmergencyContactDetailsError,
          retrievedEmergencyContactDetails,
          retrievedEmergencyContactDetailsTwo,
          retrievedEmergencyContactDetailsResult,
          retrievedEmergencyContactDetailsError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmergencyContactDetailsAsync.pending, (state) => {
        state.emergencyContactDetailsIsLoading = true;
      })
      .addCase(getEmergencyContactDetailsAsync.fulfilled, (state, action) => {
        state.emergencyContactDetailsIsLoading = false;
        state.retrievedEmergencyContactDetails =
          action.payload.emergencyContactDetails;
        state.retrievedEmergencyContactDetailsTwo =
          action.payload.emergencyContactDetailsTwo;
        state.retrievedEmergencyContactDetailsResult = "fulfilled";
        state.retrievedEmergencyContactDetailsError = null;
      })
      .addCase(getEmergencyContactDetailsAsync.rejected, (state, action) => {
        state.emergencyContactDetailsIsLoading = false;
        state.retrievedEmergencyContactDetailsResult = "rejected";
        state.retrievedEmergencyContactDetailsError = action.payload;
      })
      .addCase(manageEmergencyContactDetailsAsync.pending, (state) => {
        state.emergencyContactDetailsIsLoading = true;
      })
      .addCase(manageEmergencyContactDetailsAsync.fulfilled, (state) => {
        state.emergencyContactDetailsIsLoading = false;
        state.manageEmergencyContactDetailsResult = "fulfilled";
        state.manageEmergencyContactDetailsError = null;
      })
      .addCase(manageEmergencyContactDetailsAsync.rejected, (state, action) => {
        state.emergencyContactDetailsIsLoading = false;
        state.manageEmergencyContactDetailsResult = "rejected";
        state.manageEmergencyContactDetailsError = action.payload;
      });
  },
});

export const {
  setEmergencyContactDetails,
  setEmergencyContactDetailsTwo,
  resetEmergencyContactDetailsResult,
  resetEmergencyContactDetailsError,
  resetEmergencyContactDetailsState,
} = emergencyContactDetailsSlice.actions;
export const { selectEmergencyContactDetailsSelectors } =
  emergencyContactDetailsSlice.selectors;

export const emergencyContactDetailsReducer =
  emergencyContactDetailsSlice.reducer;
