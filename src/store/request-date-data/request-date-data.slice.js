import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  requestBookingClosingTimesAsync,
  requestDateDataAsync,
  requestEarlyFinishDatesAsync,
  requestSessionTimesAsync,
} from "./request-date-data.thunks";

const defaultRequestDateData = {
  chosenDate: "",
  requestDateDataIsLoading: false,
  dateData: null,
  requestDateDataError: null,
};

const INITIAL_STATE = {
  requestDateData: defaultRequestDateData,
  earlyFinishDates: null,
  bookingClosingTimes: null,
  sessionTimes: null,
};

const requestDateDataSlice = createSlice({
  name: "requestDateData",
  initialState: INITIAL_STATE,
  reducers: {
    setChosenDate(state, action) {
      state.requestDateData.chosenDate = action.payload;
    },
    setDateData(state, action) {
      state.requestDateData.dateData = action.payload;
    },
    resetRequestDateDataState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectRequestDateDataSelectors: createSelector(
      (state) => state.requestDateData.chosenDate,
      (state) => state.requestDateData.requestDateDataIsLoading,
      (state) => state.requestDateData.dateData,
      (state) => state.requestDateData.requestDateDataError,
      (state) => state.earlyFinishDates,
      (state) => state.bookingClosingTimes,
      (state) => state.sessionTimes,
      (
        chosenDate,
        requestDateDataIsLoading,
        dateData,
        requestDateDataError,
        earlyFinishDates,
        bookingClosingTimes,
        sessionTimes
      ) => {
        const morningSessionTime = sessionTimes?.morningSessionTime ?? null;
        const afternoonShortSessionTime =
          sessionTimes?.afternoonShortSessionTime ?? null;
        const afternoonLongSessionTime =
          sessionTimes?.afternoonLongSessionTime ?? null;

        return {
          chosenDate,
          requestDateDataIsLoading,
          dateData,
          requestDateDataError,
          earlyFinishDates,
          bookingClosingTimes,
          sessionTimes,
          morningSessionTime,
          afternoonShortSessionTime,
          afternoonLongSessionTime,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestDateDataAsync.pending, (state) => {
        state.requestDateData.requestDateDataIsLoading = true;
      })
      .addCase(requestDateDataAsync.fulfilled, (state, action) => {
        state.requestDateData.requestDateDataIsLoading = false;
        //can reset chosenDateToEmpty as will have the same date from the date data.
        state.requestDateData.chosenDate = "";
        state.requestDateData.dateData = action.payload;
        state.requestDateData.requestDateDataError = null;
      })
      .addCase(requestDateDataAsync.rejected, (state, action) => {
        state.requestDateData.requestDateDataIsLoading = false;
        state.requestDateData.dateData = null;
        state.requestDateData.requestDateDataError = action.payload;
      })
      .addCase(requestEarlyFinishDatesAsync.pending, (state) => {
        state.requestDateData.requestDateDataIsLoading = true;
      })
      .addCase(requestEarlyFinishDatesAsync.fulfilled, (state, action) => {
        state.requestDateData.requestDateDataIsLoading = false;
        state.earlyFinishDates = action.payload;
        state.requestDateData.requestDateDataError = null;
      })
      .addCase(requestEarlyFinishDatesAsync.rejected, (state, action) => {
        state.requestDateData.requestDateDataIsLoading = false;
        state.earlyFinishDates = null;
        state.requestDateData.requestDateDataError = action.payload;
      })
      .addCase(requestBookingClosingTimesAsync.pending, (state) => {
        state.requestDateData.requestDateDataIsLoading = true;
      })
      .addCase(requestBookingClosingTimesAsync.fulfilled, (state, action) => {
        state.requestDateData.requestDateDataIsLoading = false;
        state.bookingClosingTimes = action.payload;
        state.requestDateData.requestDateDataError = null;
      })
      .addCase(requestBookingClosingTimesAsync.rejected, (state, action) => {
        state.requestDateData.requestDateDataIsLoading = false;
        state.bookingClosingTimes = null;
        state.requestDateData.requestDateDataError = action.payload;
      })
      .addCase(requestSessionTimesAsync.pending, (state) => {
        state.requestDateData.requestDateDataIsLoading = true;
      })
      .addCase(requestSessionTimesAsync.fulfilled, (state, action) => {
        state.requestDateData.requestDateDataIsLoading = false;
        state.sessionTimes = action.payload;
        state.requestDateData.requestDateDataError = null;
      })
      .addCase(requestSessionTimesAsync.rejected, (state, action) => {
        state.requestDateData.requestDateDataIsLoading = false;
        state.sessionTimes = null;
        state.requestDateData.requestDateDataError = action.payload;
      });
  },
});

export const { setChosenDate, setDateData, resetRequestDateDataState } =
  requestDateDataSlice.actions;
export const { selectRequestDateDataSelectors } =
  requestDateDataSlice.selectors;

export const requestDateDataReducer = requestDateDataSlice.reducer;
