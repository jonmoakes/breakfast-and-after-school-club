import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";

export const getBookedSessionsAsync = createAsyncThunk(
  "getBookings",
  async (_, thunkAPI) => {
    try {
      const getBookingDocuments = await databases.listDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_BOOKED_SESSIONS_COLLECTION_ID
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
    resetBookedSessions(state) {
      state.bookedSessions = [];
    },
    setShowAllDates(state, action) {
      state.showAllDates = action.payload;
    },
    toggleShowAllDates(state) {
      state.showAllDates = !state.showAllDates;
    },
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
  resetBookedSessions,
  setShowAllDates,
  resetError,
  toggleShowAllDates,
} = getBookedSessionsSlice.actions;

export const getBookedSessionsReducer = getBookedSessionsSlice.reducer;
