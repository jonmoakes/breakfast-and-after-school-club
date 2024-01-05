import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const deleteChildInfoAsync = createAsyncThunk(
  "deleteChild",
  async ({ childInfo }, thunkAPI) => {
    try {
      const { $id } = childInfo;

      const getChildrenDocuments = await databases.listDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_CHILDREN_COLLECTION_ID,
        [Query.equal("$id", $id)]
      );

      const { total } = getChildrenDocuments;

      if (!total) return;

      await databases.deleteDocument(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_CHILDREN_COLLECTION_ID,
        $id,
        childInfo
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
