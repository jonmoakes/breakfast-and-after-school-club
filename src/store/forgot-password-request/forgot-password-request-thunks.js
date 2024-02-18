import { createAsyncThunk } from "@reduxjs/toolkit";
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
