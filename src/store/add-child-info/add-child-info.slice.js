import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addChildInfoAsync } from "./add-child-info.thunks";

const defaultChildInfo = {
  childName: "",
  age: "",
  consent: "",
  medicalInfo: "",
  dietryRequirements: "",
  additionalInfo: "",
};

const INITIAL_STATE = {
  addChildInfoIsLoading: false,
  childInfo: defaultChildInfo,
  addChildInfoResult: "",
  addChildInfoError: null,
};

export const addChildInfoSlice = createSlice({
  name: "addChildInfo",
  initialState: INITIAL_STATE,
  reducers: {
    setChildInfo(state, action) {
      state.childInfo = action.payload;
    },
    resetAddChildInfoResult(state) {
      state.addChildInfoResult = "";
    },
    resetAddChildInfoError(state) {
      state.addChildInfoError = null;
    },
    resetAllChildInfoState() {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectAddChildInfoSelectors: createSelector(
      (state) => state.addChildInfoIsLoading,
      (state) => state.childInfo,
      (state) => state.addChildInfoResult,
      (state) => state.addChildInfoError,
      (
        addChildInfoIsLoading,
        childInfo,
        addChildInfoResult,
        addChildInfoError
      ) => {
        return {
          addChildInfoIsLoading,
          childInfo,
          addChildInfoResult,
          addChildInfoError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(addChildInfoAsync.pending, (state) => {
        state.addChildInfoIsLoading = true;
      })
      .addCase(addChildInfoAsync.fulfilled, (state) => {
        state.addChildInfoIsLoading = false;
        state.addChildInfoResult = "fulfilled";
        state.addChildInfoError = null;
      })
      .addCase(addChildInfoAsync.rejected, (state, action) => {
        state.addChildInfoIsLoading = false;
        state.addChildInfoResult = "rejected";
        state.addChildInfoError = action.payload;
      });
  },
});
export const {
  setChildInfo,
  resetAllChildInfoState,
  resetAddChildInfoResult,
  resetAddChildInfoError,
} = addChildInfoSlice.actions;

export const { selectAddChildInfoSelectors } = addChildInfoSlice.selectors;

export const addChildInfoReducer = addChildInfoSlice.reducer;
