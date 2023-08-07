import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

export const submitForgotPasswordResultAsync = createAsyncThunk(
  "forgotPasswordResult",
  async ({ newPasswordDetails }, thunkAPI) => {
    try {
      const { newPassword, confirmNewPassword } = newPasswordDetails;

      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      const secret = urlParams.get("secret");

      await account.updateRecovery(
        userId,
        secret,
        newPassword,
        confirmNewPassword
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const defaultNewPasswordDetails = {
  newPassword: "",
  confirmNewPassword: "",
};
const INITIAL_STATE = {
  newPasswordDetails: defaultNewPasswordDetails,
  isLoading: false,
  result: "",
  error: null,
};

export const forgotPasswordResultSlice = createSlice({
  name: "forgotPasswordResult",
  initialState: INITIAL_STATE,
  reducers: {
    setNewPasswordDetails(state, action) {
      state.newPasswordDetails = action.payload;
    },
    clearNewPasswordDetails(state) {
      state.newPasswordDetails = defaultNewPasswordDetails;
    },
    resetPasswordResultError(state) {
      state.error = null;
    },
    resetPasswordResult(state) {
      state.result = "";
    },
    resetForgotPasswordResultState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForgotPasswordResultAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitForgotPasswordResultAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.result = "success";
      })
      .addCase(submitForgotPasswordResultAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.result = "";
      });
  },
});

export const {
  setNewPasswordDetails,
  clearNewPasswordDetails,
  resetPasswordResultError,
  resetPasswordResult,
  resetForgotPasswordResultState,
} = forgotPasswordResultSlice.actions;

export const forgotPasswordResultReducer = forgotPasswordResultSlice.reducer;
