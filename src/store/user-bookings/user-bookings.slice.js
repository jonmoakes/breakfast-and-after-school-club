import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const getUserBookingsAsync = createAsyncThunk(
  "getUserBookings",
  async ({ email }, thunkAPI) => {
    try {
      const getBookingDocuments = await databases.listDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_BOOKED_SESSIONS_COLLECTION_ID,
        [Query.equal("parentEmail", email)]
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
  userBookings: [],
  error: null,
};

export const userBookingsSlice = createSlice({
  name: "userBookings",
  initialState: INITIAL_STATE,
  reducers: {
    setUserBookings(state, action) {
      state.userBookings = action.payload;
    },
    resetError(state) {
      state.error = null;
    },
    resetUserBookings(state) {
      state.userBookings = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserBookingsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserBookingsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBookings = action.payload;
        state.error = null;
      })
      .addCase(getUserBookingsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.userBookings = [];
        state.error = action.payload;
      });
  },
});

export const { setUserBookings, resetUserBookings, resetError } =
  userBookingsSlice.actions;

export const userBookingsReducer = userBookingsSlice.reducer;
