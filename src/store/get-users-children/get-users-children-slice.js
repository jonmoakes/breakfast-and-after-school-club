import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listChildrenDocumentsWhereQueryIsParentEmail } from "../../utils/appwrite/appwrite-functions";

export const getUsersChildrenAsync = createAsyncThunk(
  "getChildren",
  async ({ databaseId, childrenCollectionId, email }, thunkAPI) => {
    try {
      const getChildrenDocuments =
        await listChildrenDocumentsWhereQueryIsParentEmail(
          databaseId,
          childrenCollectionId,
          email
        );
      const { documents, total } = getChildrenDocuments;
      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  usersChildren: [],
  error: null,
};

export const getUsersChildrenSlice = createSlice({
  name: "getUsersChildren",
  initialState: INITIAL_STATE,
  reducers: {
    setUsersChildren(state, action) {
      state.usersChildren = action.payload;
    },
    resetError(state) {
      state.error = null;
    },
    resetUsersChildren(state) {
      state.usersChildren = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersChildrenAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersChildrenAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersChildren = action.payload;
        state.error = null;
      })
      .addCase(getUsersChildrenAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.usersChildren = [];
        state.error = action.payload;
      });
  },
});

export const { setUsersChildren, resetUsersChildren, resetError } =
  getUsersChildrenSlice.actions;

export const getUsersChildrenReducer = getUsersChildrenSlice.reducer;
