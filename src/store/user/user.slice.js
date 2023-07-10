import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

export const signInAsync = createAsyncThunk(
  "user",
  async ({ email, password }, thunkAPI) => {
    try {
      await account.createEmailSession(email, password);
      const user = await account.get();
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetErrorMessage(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetErrorMessage } = userSlice.actions;

export const userReducer = userSlice.reducer;
