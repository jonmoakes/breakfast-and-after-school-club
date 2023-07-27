import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isOnline: window.navigator.onLine,
};

export const isOnlineSlice = createSlice({
  name: "isOnline",
  initialState: INITIAL_STATE,
  reducers: {
    setOnlineStatus(state, action) {
      state.isOnline = action.payload;
    },
  },
});

export const { setOnlineStatus } = isOnlineSlice.actions;

export const isOnlineReducer = isOnlineSlice.reducer;
