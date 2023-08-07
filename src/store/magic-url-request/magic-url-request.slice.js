import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

import {
  localhostMagicUrlResultRoute,
  magicUrlResultRoute,
} from "../../strings/strings";

export const generateMagicUrlRequestAsync = createAsyncThunk(
  "magicUrlRequest",
  async ({ magicUrlRequestEmail }, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        await account.createMagicURLSession(
          ID.unique(),
          magicUrlRequestEmail,
          localhostMagicUrlResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createMagicURLSession(
          ID.unique(),
          magicUrlRequestEmail,
          `https://breakfast-and-after-school-club.netlify.app${magicUrlResultRoute}`
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  magicUrlRequestEmail: "",
  requestResult: "",
  error: "",
};

export const magicUrlRequestSlice = createSlice({
  name: "magicUrlRequest",
  initialState: INITIAL_STATE,
  reducers: {
    setMagicUrlEmail(state, action) {
      state.magicUrlRequestEmail = action.payload;
    },
    clearMagicUrlEmail(state) {
      state.magicUrlRequestEmail = "";
    },
    clearMagicUrlRequestResult(state) {
      state.requestResult = "";
    },
    clearMagicUrlResultError(state) {
      state.error = "";
    },
    resetMagicUrlRequestState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateMagicUrlRequestAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(generateMagicUrlRequestAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.magicUrlRequestEmail = "";
        state.requestResult = "success";
      })
      .addCase(generateMagicUrlRequestAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.requestResult = "";
      });
  },
});

export const {
  setMagicUrlEmail,
  clearMagicUrlEmail,
  clearMagicUrlRequestResult,
  clearMagicUrlResultError,
  resetMagicUrlRequestState,
} = magicUrlRequestSlice.actions;

export const magicUrlRequestReducer = magicUrlRequestSlice.reducer;
