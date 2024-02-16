import { createSelector, createSlice } from "@reduxjs/toolkit";
import { editChildInfoAsync } from "./edit-child-info-thunks";

const INITIAL_STATE = {
  editChildInfoIsLoading: false,
  childToEditInfo: {},
  editChildInfoResult: "",
  editChildInfoError: null,
};

export const editChildInfoSlice = createSlice({
  name: "editChildInfo",
  initialState: INITIAL_STATE,
  reducers: {
    addChildToEdit(state, action) {
      state.childToEditInfo = action.payload;
    },
    resetChildToEditInfo(state) {
      state.childToEditInfo = {};
    },
    resetEditChildInfoError(state) {
      state.editChildInfoError = null;
    },
    resetEditChildInfoResult(state) {
      state.editChildInfoResult = "";
    },
    resetEditChildInfoState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectEditChildInfoSelectors: createSelector(
      (state) => state.editChildInfoIsLoading,
      (state) => state.childToEditInfo[0],
      (state) => state.editChildInfoResult,
      (state) => state.editChildInfoError,
      (
        editChildInfoIsLoading,
        childToEditInfo,
        editChildInfoResult,
        editChildInfoError
      ) => {
        return {
          editChildInfoIsLoading,
          childToEditInfo,
          editChildInfoResult,
          editChildInfoError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(editChildInfoAsync.pending, (state) => {
        state.editChildInfoIsLoading = true;
      })
      .addCase(editChildInfoAsync.fulfilled, (state) => {
        state.editChildInfoIsLoading = false;
        state.editChildInfoResult = "fulfilled";
        state.editChildInfoError = null;
      })
      .addCase(editChildInfoAsync.rejected, (state, action) => {
        state.editChildInfoIsLoading = false;
        state.editChildInfoResult = "rejected";
        state.editChildInfoError = action.payload;
      });
  },
});

export const {
  addChildToEdit,
  resetEditChildInfoError,
  resetEditChildInfoResult,
  resetChildToEditInfo,
  resetEditChildInfoState,
} = editChildInfoSlice.actions;
export const { selectEditChildInfoSelectors } = editChildInfoSlice.selectors;

export const editChildInfoReducer = editChildInfoSlice.reducer;
