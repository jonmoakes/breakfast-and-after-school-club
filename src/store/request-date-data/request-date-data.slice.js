import { createSlice } from "@reduxjs/toolkit";
import {
  requestBookingClosingTimesAsync,
  requestDateDataAsync,
  requestEarlyFinishDatesAsync,
  requestSessionTimesAsync,
} from "./request-date-data.thunks";

const defaultRequestDateData = {
  chosenDate: "",
  isLoading: false,
  dateData: null,
  error: "",
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
    resetErrorMessage(state) {
      state.requestDateData.error = "";
    },
    resetRequestDateDataState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestDateDataAsync.pending, (state) => {
        state.requestDateData.isLoading = true;
      })
      .addCase(requestDateDataAsync.fulfilled, (state, action) => {
        state.requestDateData.isLoading = false;
        //can reset chosenDateToEmpty as will have the same date from the date data.
        state.requestDateData.chosenDate = "";
        state.requestDateData.dateData = action.payload;
        state.requestDateData.error = "";
      })
      .addCase(requestDateDataAsync.rejected, (state, action) => {
        state.requestDateData.isLoading = false;
        state.requestDateData.dateData = null;
        state.requestDateData.error = action.payload;
      })
      .addCase(requestEarlyFinishDatesAsync.pending, (state) => {
        state.requestDateData.isLoading = true;
      })
      .addCase(requestEarlyFinishDatesAsync.fulfilled, (state, action) => {
        state.requestDateData.isLoading = false;
        state.earlyFinishDates = action.payload;
        state.requestDateData.error = null;
      })
      .addCase(requestEarlyFinishDatesAsync.rejected, (state, action) => {
        state.requestDateData.isLoading = false;
        state.earlyFinishDates = null;
        state.requestDateData.error = action.payload;
      })
      .addCase(requestBookingClosingTimesAsync.pending, (state) => {
        state.requestDateData.isLoading = true;
      })
      .addCase(requestBookingClosingTimesAsync.fulfilled, (state, action) => {
        state.requestDateData.isLoading = false;
        state.bookingClosingTimes = action.payload;
        state.requestDateData.error = null;
      })
      .addCase(requestBookingClosingTimesAsync.rejected, (state, action) => {
        state.requestDateData.isLoading = false;
        state.bookingClosingTimes = null;
        state.requestDateData.error = action.payload;
      })
      .addCase(requestSessionTimesAsync.pending, (state) => {
        state.requestDateData.isLoading = true;
      })
      .addCase(requestSessionTimesAsync.fulfilled, (state, action) => {
        state.requestDateData.isLoading = false;
        state.sessionTimes = action.payload;
        state.requestDateData.error = null;
      })
      .addCase(requestSessionTimesAsync.rejected, (state, action) => {
        state.requestDateData.isLoading = false;
        state.sessionTimes = null;
        state.requestDateData.error = action.payload;
      });
  },
  selectors: {
    selectChosenDate: (state) => state.requestDateData.chosenDate,
    selectRequestDateDataIsLoading: (state) => state.requestDateData.isLoading,
    selectRequestDateData: (state) => state.requestDateData.dateData,
    selectRequestDateDataErrorMessage: (state) => state.requestDateData.error,
    selectEarlyFinishDates: (state) => state.earlyFinishDates,
    selectBookingClosingTimes: (state) => state.bookingClosingTimes,
    selectSessionTimes: (state) => state.sessionTimes,
    selectMorningSessionTime: (state) =>
      state.sessionTimes?.morningSessionTime ?? null,
    selectAfternoonShortSessionTime: (state) =>
      state.sessionTimes?.afternoonShortSessionTime ?? null,
    selectAfternoonLongSessionTime: (state) =>
      state.sessionTimes?.afternoonLongSessionTime ?? null,
  },
});

export const {
  setChosenDate,
  setDateData,
  resetErrorMessage,
  resetRequestDateDataState,
} = requestDateDataSlice.actions;

export const {
  selectChosenDate,
  selectRequestDateDataIsLoading,
  selectRequestDateData,
  selectRequestDateDataErrorMessage,
  selectEarlyFinishDates,
  selectBookingClosingTimes,
  selectSessionTimes,
  selectMorningSessionTime,
  selectAfternoonShortSessionTime,
  selectAfternoonLongSessionTime,
} = requestDateDataSlice.selectors;

export const requestDateDataReducer = requestDateDataSlice.reducer;
