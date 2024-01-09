import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// import { setSendGridApiKey } from "../../functions/set-sendgrid-api-key";
import { closeAccountSuccess } from "../../strings/strings";

import { SEND_ACCOUNT_CLOSURE_MESSAGE_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const closeAccountAsync = createAsyncThunk(
  "user/closeAccount",
  async (
    { schoolCode, email, appOwnerEmail, accountClosureEmail },
    thunkAPI
  ) => {
    try {
      // setSendGridApiKey(schoolCode);
      // console.log("hi ", setSendGridApiKey(schoolCode));
      const dataToSend = {
        schoolCode,
        email,
        appOwnerEmail,
        accountClosureEmail,
      };
      await axios.post(SEND_ACCOUNT_CLOSURE_MESSAGE_ENDPOINT, {
        message: dataToSend,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  successMessage: "",
  error: "",
};

const closeAccountSlice = createSlice({
  name: "closeAccount",
  initialState,
  reducers: {
    resetSuccessMessage(state) {
      state.successMessage = "";
    },
    resetErrorMessage(state) {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(closeAccountAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(closeAccountAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = closeAccountSuccess;
        state.error = "";
      })
      .addCase(closeAccountAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.successMessage = "";
        state.error = action.payload;
      });
  },
});

export const { resetSuccessMessage, resetErrorMessage } =
  closeAccountSlice.actions;

export const closeAccountReducer = closeAccountSlice.reducer;
