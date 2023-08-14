import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

import {
  localhostUpdatePasswordResultRoute,
  updatePasswordRequestRoute,
} from "../../strings/strings";

export const updatePasswordRequestAsync = createAsyncThunk(
  "updatePasswordRequest",
  async ({ email }, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        await account.createRecovery(email, localhostUpdatePasswordResultRoute);
      } else if (import.meta.env.MODE === "production") {
        await account.createRecovery(
          email,
          `https://breakfast-and-after-school-club.netlify.app${updatePasswordRequestRoute}`
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  result: "",
  error: null,
};

export const updatePasswordRequestSlice = createSlice({
  name: "updatePasswordRequest",
  initialState: INITIAL_STATE,
  reducers: {
    resetError(state) {
      state.error = null;
    },
    resetUpdatePasswordRequestState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePasswordRequestAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePasswordRequestAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.result = "succeeded";
        state.error = null;
      })
      .addCase(updatePasswordRequestAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.result = "failure";
        state.error = action.payload;
      });
  },
});

export const { resetError, resetUpdatePasswordRequestState } =
  updatePasswordRequestSlice.actions;

export const updatePasswordRequestReducer = updatePasswordRequestSlice.reducer;
