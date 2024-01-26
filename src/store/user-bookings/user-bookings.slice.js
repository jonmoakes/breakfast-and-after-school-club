import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getUserBookingsAsync = createAsyncThunk(
  "getUserBookings",
  async ({ email, databaseId, bookedSessionsCollectionId }, thunkAPI) => {
    try {
      const queryIndex = "parentEmail";
      const queryValue = email;

      const collectionId = bookedSessionsCollectionId;

      const getBookingDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
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
    resetUserBookingsState: () => {
      return INITIAL_STATE;
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

export const { setUserBookings, resetError, resetUserBookingsState } =
  userBookingsSlice.actions;

export const userBookingsReducer = userBookingsSlice.reducer;
