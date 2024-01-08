import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQuery,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const updateChildInfoAsync = createAsyncThunk(
  "updateChild",
  async ({ $id, databaseId, collectionId, updatedChildInfo }, thunkAPI) => {
    try {
      const queryIndex = "$id";
      const queryValue = $id;
      const documentId = $id;
      const dataToUpdate = updatedChildInfo;

      const getChildrenDocuments = await listDocumentsByQuery(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { total } = getChildrenDocuments;

      if (!total) return;

      await manageDatabaseDocument(
        "update",
        databaseId,
        collectionId,
        documentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  childToEditInfo: {},
  result: "",
  error: null,
};

export const editChildInfoSlice = createSlice({
  name: "updateChildInfo",
  initialState: INITIAL_STATE,
  reducers: {
    addChildToEdit(state, action) {
      state.childToEditInfo = action.payload;
    },
    resetChildToEditInfo(state) {
      state.childToEditInfo = {};
    },
    resetError(state) {
      state.error = null;
    },
    resetResult(state) {
      state.result = "";
    },
    resetEditChildInfoState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateChildInfoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateChildInfoAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.result = "fulfilled";
        state.error = null;
      })
      .addCase(updateChildInfoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.result = "rejected";
        state.error = action.payload;
      });
  },
});

export const {
  addChildToEdit,
  resetError,
  resetResult,
  resetChildToEditInfo,
  resetEditChildInfoState,
} = editChildInfoSlice.actions;

export const editChildInfoReducer = editChildInfoSlice.reducer;
