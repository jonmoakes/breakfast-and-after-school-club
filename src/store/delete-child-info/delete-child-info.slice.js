import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQuery,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

export const deleteChildInfoAsync = createAsyncThunk(
  "deleteChild",
  async ({ childInfo, databaseId, collectionId }, thunkAPI) => {
    try {
      const { $id } = childInfo;
      const documentId = $id;
      const queryIndex = "$id";
      const queryValue = $id;
      const dataToDelete = childInfo;

      const getChildrenDocuments = await listDocumentsByQuery(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
      );

      const { total } = getChildrenDocuments;

      if (!total) return;

      await manageDatabaseDocument(
        "delete",
        databaseId,
        collectionId,
        documentId,
        dataToDelete
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  childToDeleteInfo: {},
  result: "",
  error: null,
};

export const deleteChildInfoSlice = createSlice({
  name: "deleteChildInfo",
  initialState: INITIAL_STATE,
  reducers: {
    addChildToDelete(state, action) {
      state.childToDeleteInfo = action.payload;
    },
    resetChildToDeleteInfo(state) {
      state.childToDeleteInfo = {};
    },
    resetError(state) {
      state.error = null;
    },
    resetResult(state) {
      state.result = "";
    },
    resetDeleteChildInfoState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteChildInfoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteChildInfoAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.result = "fulfilled";
        state.error = null;
      })
      .addCase(deleteChildInfoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.result = "rejected";
        state.error = action.payload;
      });
  },
});

export const {
  addChildToDelete,
  resetError,
  resetResult,
  resetChildToDeleteInfo,
  resetDeleteChildInfoState,
} = deleteChildInfoSlice.actions;

export const deleteChildInfoReducer = deleteChildInfoSlice.reducer;
