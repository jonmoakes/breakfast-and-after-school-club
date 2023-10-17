import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const deleteUserBookingAsync = createAsyncThunk(
  "deleteUserbooking",
  async ({ userBookingToDelete }, thunkAPI) => {
    try {
      const { $id } = userBookingToDelete;

      const getBookingDocuments = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_BOOKED_SESSIONS_COLLECTION_ID,
        [Query.equal("$id", $id)]
      );

      const { total } = getBookingDocuments;

      if (!total) return;

      await databases.deleteDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_BOOKED_SESSIONS_COLLECTION_ID,
        $id,
        userBookingToDelete
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refundUserAsync = createAsyncThunk(
  "refundUser",
  async ({ id, refundPrice }, thunkAPI) => {
    try {
      const getUserDocument = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", id)]
      );

      const { total, documents } = getUserDocument;

      if (total && documents.length) {
        const { walletBalance } = documents[0];
        await databases.updateDocument(
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
          import.meta.env.VITE_USER_COLLECTION_ID,
          id,
          { walletBalance: walletBalance + refundPrice }
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  userBookingToDelete: {},
  updateBookingsDoc: {
    result: "",
    error: null,
  },
  updateUserDocBalance: {
    result: "",
    error: null,
  },
};

export const userBookingToDeleteSlice = createSlice({
  name: "userBookingToDelete",
  initialState: INITIAL_STATE,
  reducers: {
    addUserBookingToDelete(state, action) {
      state.userBookingToDelete = action.payload;
    },
    resetUserBookingToDelete(state) {
      state.userBookingToDelete = {};
    },
    resetError(state) {
      state.error = null;
    },
    resetResult(state) {
      state.result = "";
    },
    resetBookingToDeleteState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserBookingAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserBookingAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.updateBookingsDoc.result = "fulfilled";
        state.updateBookingsDoc.error = null;
      })
      .addCase(deleteUserBookingAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.updateBookingsDoc.result = "rejected";
        state.updateBookingsDoc.error = action.payload;
      })
      .addCase(refundUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refundUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.updateUserDocBalance.result = "fulfilled";
        state.updateUserDocBalance.error = null;
      })
      .addCase(refundUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.updateUserDocBalance.result = "rejected";
        state.updateUserDocBalance.error = action.payload;
      });
  },
});

export const {
  addUserBookingToDelete,
  resetUserBookingToDelete,
  resetError,
  resetResult,
  resetChildToEditInfo,
  resetBookingToDeleteState,
} = userBookingToDeleteSlice.actions;

export const userBookingToDeleteReducer = userBookingToDeleteSlice.reducer;
