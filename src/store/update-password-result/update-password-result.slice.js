import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

export const updatePasswordResultAsync = createAsyncThunk(
  "updatePasswordResult",
  async (
    { updatePasswordNewPassword, updatePasswordConfirmNewPassword },
    thunkAPI
  ) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      const secret = urlParams.get("secret");

      await account.updateRecovery(
        userId,
        secret,
        updatePasswordNewPassword,
        updatePasswordConfirmNewPassword
      );
      await account.deleteSessions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const defaultUpdatePasswordFields = {
  updatePasswordNewPassword: "",
  updatePasswordConfirmNewPassword: "",
};
const INITIAL_STATE = {
  isLoading: false,
  updatePasswordDetails: defaultUpdatePasswordFields,
  result: "",
  error: null,
};

export const updatePasswordResultSlice = createSlice({
  name: "updatePasswordResult",
  initialState: INITIAL_STATE,
  reducers: {
    setNewPasswordDetails(state, action) {
      state.updatePasswordDetails = action.payload;
    },
    clearNewPasswordDetails(state) {
      state.updatePasswordDetails = defaultUpdatePasswordFields;
    },
    resetError(state) {
      state.error = null;
    },
    resetUpdatePasswordResultState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePasswordResultAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePasswordResultAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.updatePasswordDetails = defaultUpdatePasswordFields;
        state.result = "succeeded";
        state.error = null;
      })
      .addCase(updatePasswordResultAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.result = "failure";
        state.error = action.payload;
      });
  },
});

export const {
  setNewPasswordDetails,
  clearNewPasswordDetails,
  resetError,
  resetUpdatePasswordResultState,
} = updatePasswordResultSlice.actions;

export const updatePasswordResultReducer = updatePasswordResultSlice.reducer;
