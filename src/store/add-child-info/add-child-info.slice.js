import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  childInfo: {
    name: "",
    age: "",
    medicalInfo: "",
    dietryRequirements: "",
    additionalInfo: "",
  },
};

export const addChildInfoSlice = createSlice({
  name: "addChildInfo",
  initialState: INITIAL_STATE,
  reducers: {
    setChildInfo(state, action) {
      state.childInfo = action.payload;
    },
    resetChildInfo(state) {
      state.childInfo = INITIAL_STATE;
    },
  },
});

export const { setChildInfo, resetChildInfo } = addChildInfoSlice.actions;

export const addChildInfoReducer = addChildInfoSlice.reducer;
