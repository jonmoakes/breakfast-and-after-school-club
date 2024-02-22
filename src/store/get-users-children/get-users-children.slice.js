import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getUsersChildrenAsync = createAsyncThunk(
  "getChildren",
  async ({ email, databaseId, collectionId }, thunkAPI) => {
    try {
      const queryIndex = "parentEmail";
      const queryValue = email;

      const getChildrenDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
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
    resetUsersChildrenError(state) {
      state.error = null;
    },
    resetUsersChildren(state) {
      state.usersChildren = [];
    },
    resetAllGetUsersChildrenState: () => {
      return INITIAL_STATE;
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

export const {
  setUsersChildren,
  resetUsersChildren,
  resetUsersChildrenError,
  resetAllGetUsersChildrenState,
} = getUsersChildrenSlice.actions;

export const getUsersChildrenReducer = getUsersChildrenSlice.reducer;
