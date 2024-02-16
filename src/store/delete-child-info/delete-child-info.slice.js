import { createSelector, createSlice } from "@reduxjs/toolkit";
import { deleteChildInfoAsync } from "./delete-child-info-thunks";

const INITIAL_STATE = {
  deleteChildInfoIsLoading: false,
  childToDeleteInfo: {},
  deleteChildInfoResult: "",
  deleteChildInfoError: null,
};

export const deleteChildInfoSlice = createSlice({
  name: "deleteChildInfo",
  initialState: INITIAL_STATE,
  reducers: {
    addChildToDelete(state, action) {
      state.childToDeleteInfo = action.payload;
    },
    resetChildToDeleteInfo(state) {
      state.childToDeleteInfo = {};
    },
    resetDeleteChildInfoError(state) {
      state.deleteChildInfoError = null;
    },
    resetDeleteChildInfoResult(state) {
      state.deleteChildInfoResult = "";
    },
    resetDeleteChildInfoState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDeleteChildInfoSelectors: createSelector(
      (state) => state.deleteChildInfoIsLoading,
      (state) => state.childToDeleteInfo[0],
      (state) => state.deleteChildInfoResult,
      (state) => state.deleteChildInfoError,
      (
        deleteChildInfoIsLoading,
        childToDeleteInfo,
        deleteChildInfoResult,
        deleteChildInfoError
      ) => {
        return {
          deleteChildInfoIsLoading,
          childToDeleteInfo,
          deleteChildInfoResult,
          deleteChildInfoError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteChildInfoAsync.pending, (state) => {
        state.deleteChildInfoIsLoading = true;
      })
      .addCase(deleteChildInfoAsync.fulfilled, (state) => {
        state.deleteChildInfoIsLoading = false;
        state.deleteChildInfoResult = "fulfilled";
        state.deleteChildInfoError = null;
      })
      .addCase(deleteChildInfoAsync.rejected, (state, action) => {
        state.deleteChildInfoIsLoading = false;
        state.deleteChildInfoResult = "rejected";
        state.deleteChildInfoError = action.payload;
      });
  },
});

export const {
  addChildToDelete,
  resetDeleteChildInfoError,
  resetDeleteChildInfoResult,
  resetChildToDeleteInfo,
  resetDeleteChildInfoState,
} = deleteChildInfoSlice.actions;
export const { selectDeleteChildInfoSelectors } =
  deleteChildInfoSlice.selectors;

export const deleteChildInfoReducer = deleteChildInfoSlice.reducer;
