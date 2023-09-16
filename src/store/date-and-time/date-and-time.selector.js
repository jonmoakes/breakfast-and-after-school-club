import { createSelector } from "reselect";

const selectDateAndTimeReducer = (state) => state.dateAndTime;

export const selectCurrentDateAndTime = createSelector(
  [selectDateAndTimeReducer],
  (dateAndTimeSlice) => dateAndTimeSlice.currentDateAndTime
);
