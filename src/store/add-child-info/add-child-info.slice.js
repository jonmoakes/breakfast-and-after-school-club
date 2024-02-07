import { createSlice } from "@reduxjs/toolkit";
import { addChildInfoAsync } from "./add-child-info-thunks";

const defaultChildInfo = {
  childName: "",
  age: "",
  medicalInfo: "",
  dietryRequirements: "",
  additionalInfo: "",
};

const INITIAL_STATE = {
  isLoading: false,
  childInfo: defaultChildInfo,
  result: "",
  error: null,
};

export const addChildInfoSlice = createSlice({
  name: "addChildInfo",
  initialState: INITIAL_STATE,
  reducers: {
    setChildInfo(state, action) {
      state.childInfo = action.payload;
    },
    resetAddChildInfoResult(state) {
      state.result = "";
    },
    resetAddChildInfoError(state) {
      state.error = null;
    },
    resetAllChildInfoState() {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectAddChildInfoIsLoading: (state) => state.isLoading,
    selectAddChildInfo: (state) => state.childInfo,
    selectAddChildInfoResult: (state) => state.result,
    selectAddChildInfoError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addChildInfoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addChildInfoAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.result = "fulfilled";
        state.error = null;
      })
      .addCase(addChildInfoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.result = "rejected";
        state.error = action.payload;
      });
  },
});

export const {
  setChildInfo,
  resetAllChildInfoState,
  resetAddChildInfoResult,
  resetAddChildInfoError,
} = addChildInfoSlice.actions;

export const {
  selectAddChildInfoIsLoading,
  selectAddChildInfo,
  selectAddChildInfoResult,
  selectAddChildInfoError,
} = addChildInfoSlice.selectors;

export const addChildInfoReducer = addChildInfoSlice.reducer;
