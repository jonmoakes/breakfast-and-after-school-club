import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  sessionType: "",
  sessionPrice: null,
  childrenSelectedForBooking: [],
};

export const bookSessionSlice = createSlice({
  name: "bookSession",
  initialState: INITIAL_STATE,
  reducers: {
    setSessionType(state, action) {
      state.sessionType = action.payload;
    },
    setSessionPrice(state, action) {
      state.sessionPrice = action.payload;
    },
    resetSessionTypeAndPrice(state) {
      state.sessionType = "";
      state.sessionPrice = null;
    },
    setChildrenSelectedForBooking: (state, action) => {
      const checkboxName = Object.keys(action.payload)[0];
      const isChecked = action.payload[checkboxName];

      if (isChecked) {
        if (!state.childrenSelectedForBooking.includes(checkboxName)) {
          state.childrenSelectedForBooking.push(checkboxName);
        }
      } else {
        // Remove the checkboxName from the array if it's present
        state.childrenSelectedForBooking =
          state.childrenSelectedForBooking.filter(
            (name) => name !== checkboxName
          );
      }
    },
    resetBookSessionState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectBookSessionSelectors: createSelector(
      (state) => state.sessionType,
      (state) => state.sessionPrice,
      (state) => state.childrenSelectedForBooking,
      (sessionType, sessionPrice, childrenSelectedForBooking) => {
        return {
          sessionType,
          sessionPrice,
          childrenSelectedForBooking,
        };
      }
    ),
  },
});

export const {
  setSessionType,
  setSessionPrice,
  resetSessionTypeAndPrice,
  resetUserDocBalanceError,
  resetBookSessionState,
  setChildrenSelectedForBooking,
} = bookSessionSlice.actions;

export const { selectBookSessionSelectors } = bookSessionSlice.selectors;

export const bookSessionReducer = bookSessionSlice.reducer;
