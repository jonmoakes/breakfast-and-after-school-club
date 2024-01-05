import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const updateChildInfoAsync = createAsyncThunk(
  "updateChild",
  async ({ updatedChildInfo }, thunkAPI) => {
    try {
      const { $id } = updatedChildInfo;

      const getChildrenDocuments = await databases.listDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_CHILDREN_COLLECTION_ID,
        [Query.equal("$id", $id)]
      );

      const { total } = getChildrenDocuments;

      if (!total) return;

      await databases.updateDocument(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_CHILDREN_COLLECTION_ID,
        $id,
        updatedChildInfo
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
