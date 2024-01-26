import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentDateAndTime: new Date(),
};

export const dateAndTimeSlice = createSlice({
  name: "dateAndTime",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentDateAndTime(state, action) {
      state.currentDateAndTime = action.payload;
    },
    resetDateAndTimeState: () => {
      return INITIAL_STATE;
    },
  },
});

export const { setCurrentDateAndTime, resetDateAndTimeState } =
  dateAndTimeSlice.actions;

export const dateAndTimeReducer = dateAndTimeSlice.reducer;
