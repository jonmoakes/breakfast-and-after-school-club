import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";
import { format, parseISO } from "date-fns";

export const getBookedSessionsAsync = createAsyncThunk(
  "getBookings",
  async ({ databaseId, collectionId }, thunkAPI) => {
    try {
      const getBookingDocuments = await listDocumentsInACollection(
        databaseId,
        collectionId
      );

      const { documents, total } = getBookingDocuments;
      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  bookedSessions: [],
  error: null,
  showAllDates: false,
};

export const getBookedSessionsSlice = createSlice({
  name: "getBookedSessions",
  initialState: INITIAL_STATE,
  reducers: {
    setBookedSessions(state, action) {
      state.bookedSessions = action.payload;
    },
    resetError(state) {
      state.error = null;
    },
    setShowAllDates(state, action) {
      state.showAllDates = action.payload;
    },
    toggleShowAllDates(state) {
      state.showAllDates = !state.showAllDates;
    },
    resetBookedSessionsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectBookedSessionsIsLoading: (state) => state.isLoading,
    selectBookedSessions: (state) => state.bookedSessions || [],
    selectShowAllDates: (state) => state.showAllDates,
    selectBookedSessionWithFormattedDate: (state) =>
      state.bookedSessions.map((booking) => ({
        ...booking,
        formattedDate: format(parseISO(booking.date), "EEEE dd MMMM yyyy"),
      })),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookedSessionsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookedSessionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookedSessions = action.payload;
        state.error = null;
      })
      .addCase(getBookedSessionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.bookedSessions = [];
        state.error = action.payload;
      });
  },
});

export const {
  setBookedSessions,
  resetBookedSessionsState,
  setShowAllDates,
  resetError,
  toggleShowAllDates,
} = getBookedSessionsSlice.actions;

export const {
  selectBookedSessionsIsLoading,
  selectBookedSessions,
  selectShowAllDates,
  selectBookedSessionWithFormattedDate,
} = getBookedSessionsSlice.selectors;

export const getBookedSessionsReducer = getBookedSessionsSlice.reducer;
