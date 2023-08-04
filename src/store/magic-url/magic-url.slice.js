import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  magicUrlEmail: "",
  magicUrlResultError: "",
};

export const magicUrlSlice = createSlice({
  name: "magicUrl",
  initialState: INITIAL_STATE,
  reducers: {
    setMagicUrlEmail(state, action) {
      state.magicUrlEmail = action.payload;
    },
    clearMagicUrlEmail(state) {
      state.magicUrlEmail = "";
    },
    setMagicUrlResultError(state, action) {
      state.magicUrlResultError = action.payload;
    },
    clearMagicUrlResultError(state) {
      state.magicUrlResultError = "";
    },
    resetMagicUrlState: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  setMagicUrlEmail,
  clearMagicUrlEmail,
  setMagicUrlResultError,
  clearMagicUrlResultError,
  resetMagicUrlState,
} = magicUrlSlice.actions;

export const magicUrlReducer = magicUrlSlice.reducer;
