import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const deleteUserBookingAsync = createAsyncThunk(
  "deleteUserbooking",
  async (
    { userBookingToDelete, bookedSessionsCollectionId, databaseId },
    thunkAPI
  ) => {
    try {
      const { $id } = userBookingToDelete;
      const collectionId = bookedSessionsCollectionId;
      const queryIndex = "$id";
      const queryValue = $id;
      const documentId = $id;
      const data = userBookingToDelete;

      const getBookingDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { total } = getBookingDocuments;

      if (!total) return;

      await manageDatabaseDocument(
        "delete",
        databaseId,
        collectionId,
        documentId,
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateSessionSpacesDocAsync = createAsyncThunk(
  "updateSessionSpacesDoc",
  async (
    {
      termDatesCollectionId,
      date,
      databaseId,
      sessionType,
      numberOfChildrenInBooking,
    },
    thunkAPI
  ) => {
    try {
      const collectionId = termDatesCollectionId;
      const queryIndex = "date";
      const queryValue = date;

      const getDateDocumentToUpdate = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const dateDocument = getDateDocumentToUpdate.documents;

      if (!dateDocument.length) {
        return;
      } else {
        const { $id, morningSessionSpaces, afternoonSessionSpaces } =
          dateDocument[0];

        let updatedSessionSpaces = {};

        if (sessionType === "morning") {
          updatedSessionSpaces = {
            morningSessionSpaces:
              morningSessionSpaces + numberOfChildrenInBooking,
          };
        } else if (
          sessionType === "afternoonShort" ||
          sessionType === "afternoonLong"
        ) {
          updatedSessionSpaces = {
            afternoonSessionSpaces:
              afternoonSessionSpaces + numberOfChildrenInBooking,
          };
        } else if (
          sessionType === "morningAndAfternoonShort" ||
          sessionType === "morningAndAfternoonLong"
        ) {
          updatedSessionSpaces = {
            morningSessionSpaces:
              morningSessionSpaces + numberOfChildrenInBooking,
            afternoonSessionSpaces:
              afternoonSessionSpaces + numberOfChildrenInBooking,
          };
        }

        const documentId = $id;
        const data = updatedSessionSpaces;

        await manageDatabaseDocument(
          "update",
          databaseId,
          collectionId,
          documentId,
          data
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refundUserAsync = createAsyncThunk(
  "refundUser",
  async ({ id, databaseId, collectionId, refundPrice }, thunkAPI) => {
    try {
      const queryIndex = "id";
      const queryValue = id;
      const documentId = id;

      const userDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { total, documents } = userDocument;

      if (total && documents.length) {
        const { walletBalance } = documents[0];

        const data = { walletBalance: walletBalance + refundPrice };

        await manageDatabaseDocument(
          "update",
          databaseId,
          collectionId,
          documentId,
          data
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
  updateSessionSpacesDoc: {
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
      })
      .addCase(updateSessionSpacesDocAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSessionSpacesDocAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.updateSessionSpacesDoc.result = "fulfilled";
        state.updateSessionSpacesDoc.error = null;
      })
      .addCase(updateSessionSpacesDocAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.updateSessionSpacesDoc.result = "rejected";
        state.updateSessionSpacesDoc.error = action.payload;
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
