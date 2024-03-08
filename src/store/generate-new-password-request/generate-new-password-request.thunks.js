import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

import { localhostChooseNewPasswordRoute } from "../../strings/routes/routes-strings";

export const generateNewPasswordRequestAsync = createAsyncThunk(
  "generateNewPasswordRequest",
  async ({ generateNewPasswordRequestEmail }, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        await account.createRecovery(
          generateNewPasswordRequestEmail,
          localhostChooseNewPasswordRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createRecovery(
          generateNewPasswordRequestEmail,
          "http://localhost:8888/choose-new-password",
          "https://www.breakfast-and-after-school-club.co.uk/choose-new-password"
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
