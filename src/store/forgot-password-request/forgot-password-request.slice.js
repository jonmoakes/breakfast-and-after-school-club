import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

import {
  localhostForgotPasswordResultRoute,
  forgotPasswordResultRoute,
} from "../../strings/strings";

export const generateForgotPasswordLinkAsync = createAsyncThunk(
  "forgotPasswordRequest",
  async ({ forgotPasswordRequestEmail }, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        await account.createRecovery(
          forgotPasswordRequestEmail,
          localhostForgotPasswordResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createRecovery(
          forgotPasswordRequestEmail,
          `https://breakfast-and-after-school-club.netlify.app${forgotPasswordResultRoute}`
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  forgotPasswordRequestEmail: "",
  isLoading: false,
  requestResult: "",
  error: null,
};

export const forgotPasswordRequestSlice = createSlice({
  name: "forgotPasswordRequest",
  initialState: INITIAL_STATE,
  reducers: {
    setForgotPasswordRequestEmail(state, action) {
      state.forgotPasswordRequestEmail = action.payload;
    },
    resetPasswordRequestError(state) {
      state.error = null;
    },
    resetPasswordRequestResult(state) {
      state.requestResult = "";
    },
    resetForgotPasswordRequestState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateForgotPasswordLinkAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(generateForgotPasswordLinkAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.forgotPasswordRequestEmail = "";
        state.requestResult = "success";
      })
      .addCase(generateForgotPasswordLinkAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.requestResult = "";
      });
  },
});

export const {
  setForgotPasswordRequestEmail,
  resetPasswordRequestResult,
  resetPasswordRequestError,
  resetForgotPasswordRequestState,
} = forgotPasswordRequestSlice.actions;

export const forgotPasswordRequestReducer = forgotPasswordRequestSlice.reducer;
