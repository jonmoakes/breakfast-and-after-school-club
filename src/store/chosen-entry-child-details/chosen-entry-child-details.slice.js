import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getChosenEntryChildDetailsAsync } from "./chosen-entry-child-details-thunks";

const INITIAL_STATE = {
  chosenEntryChildDetailsIsLoading: false,
  chosenEntryChildDetails: [],
  chosenEntryChildDetailsError: null,
};

export const chosenEntryChildDetailsSlice = createSlice({
  name: "chosenEntryChildDetails",
  initialState: INITIAL_STATE,
  reducers: {
    resetChosenEntryChildDetailsError(state) {
      state.chosenEntryChildDetailsError = null;
    },
    resetChosenEntryChildDetailsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectChosenEntryChildDetailsSelectors: createSelector(
      (state) => state.chosenEntryChildDetailsIsLoading,
      (state) => state.chosenEntryChildDetails || [],
      (state) => state.chosenEntryChildDetailsError,
      (
        chosenEntryChildDetailsIsLoading,
        chosenEntryChildDetails,
        chosenEntryChildDetailsError
      ) => {
        return {
          chosenEntryChildDetailsIsLoading,
          chosenEntryChildDetails,
          chosenEntryChildDetailsError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChosenEntryChildDetailsAsync.pending, (state) => {
        state.chosenEntryChildDetailsIsLoading = true;
      })
      .addCase(getChosenEntryChildDetailsAsync.fulfilled, (state, action) => {
        state.chosenEntryChildDetailsIsLoading = false;
        state.chosenEntryChildDetails = action.payload;
        state.chosenEntryChildDetailsError = null;
      })
      .addCase(getChosenEntryChildDetailsAsync.rejected, (state, action) => {
        state.chosenEntryChildDetailsIsLoading = false;
        state.chosenEntryChildDetails = [];
        state.chosenEntryChildDetailsError = action.payload;
      });
  },
});

export const {
  resetChosenEntryChildDetailsError,
  resetChosenEntryChildDetailsState,
} = chosenEntryChildDetailsSlice.actions;
export const { selectChosenEntryChildDetailsSelectors } =
  chosenEntryChildDetailsSlice.selectors;

export const chosenEntryChildDetailsReducer =
  chosenEntryChildDetailsSlice.reducer;
