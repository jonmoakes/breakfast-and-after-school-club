import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { account, databases } from "../../utils/appwrite/appwrite-config";

export const updateEmailAsync = createAsyncThunk(
  "user/updateEmail",
  async ({ newEmail, password, id }, thunkAPI) => {
    try {
      await account.updateEmail(newEmail, password);
      await databases.updateDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        id,
        { email: newEmail }
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
