import { createSelector, createSlice } from "@reduxjs/toolkit";

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
    resetIsOnlineState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectIsOnlineSelectors: createSelector(
      (state) => state.isOnline,
      (isOnline) => {
        return {
          isOnline,
        };
      }
    ),
  },
});

export const { setOnlineStatus, resetIsOnlineState } = isOnlineSlice.actions;
export const { selectIsOnlineSelectors } = isOnlineSlice.selectors;

export const isOnlineReducer = isOnlineSlice.reducer;
