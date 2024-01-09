import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const updateEmailAsync = createAsyncThunk(
  "updateEmail",
  async ({ id, newEmail, password, databaseId, collectionId }, thunkAPI) => {
    try {
      const documentId = id;
      const dataToUpdate = { email: newEmail };
      await account.updateEmail(newEmail, password);
      await manageDatabaseDocument(
        "update",
        databaseId,
        collectionId,
        documentId,
        dataToUpdate
      );
      await account.deleteSessions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const defaultUpdateEmailDetails = {
  newEmail: "",
  password: "",
};
const INITIAL_STATE = {
  isLoading: false,
  updateEmailDetails: defaultUpdateEmailDetails,
  result: "",
  error: null,
};

export const updateEmailSlice = createSlice({
  name: "updateEmail",
  initialState: INITIAL_STATE,
  reducers: {
    setUpdateEmailDetails(state, action) {
      state.updateEmailDetails = action.payload;
    },
    resetError(state) {
      state.error = null;
    },
    resetUpdateEmailState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateEmailAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmailAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.result = "succeeded";
        state.updateEmailDetails = defaultUpdateEmailDetails;
        state.error = null;
      })
      .addCase(updateEmailAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.result = "failure";
        state.error = action.payload;
      });
  },
});

export const { setUpdateEmailDetails, resetUpdateEmailState, resetError } =
  updateEmailSlice.actions;

export const updateEmailReducer = updateEmailSlice.reducer;
