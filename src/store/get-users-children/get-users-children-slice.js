import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const getUsersChildrenAsync = createAsyncThunk(
  "getChildren",
  async ({ email }, thunkAPI) => {
    try {
      const getChildrenDocuments = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_CHILDREN_COLLECTION_ID,
        [Query.equal("parentEmail", email)]
      );

      const { documents, total } = getChildrenDocuments;
      if (!total) return;

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllChildrenAsync = createAsyncThunk(
  "getAllChildren",
  async ({ childrensName }, thunkAPI) => {
    try {
      const getAllChildrenDocuments = await databases.listDocuments(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_CHILDREN_COLLECTION_ID,
        // [Query.equal("parentEmail", email)]
        [Query.search("childName", childrensName)]
      );

      const { documents, total } = getAllChildrenDocuments;
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
  allChildren: [],
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
      })
      .addCase(getAllChildrenAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllChildrenAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allChildren = action.payload;
        state.error = null;
      })
      .addCase(getAllChildrenAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.allChildren = [];
        state.error = action.payload;
      });
  },
});

export const { setUsersChildren, resetUsersChildren, resetError } =
  getUsersChildrenSlice.actions;

export const getUsersChildrenReducer = getUsersChildrenSlice.reducer;
