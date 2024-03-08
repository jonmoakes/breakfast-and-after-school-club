import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

import {
  localhostChooseNewPasswordRoute,
  chooseNewPasswordRoute,
} from "../../strings/routes/routes-strings";

export const generateNewPasswordRequestAsync = createAsyncThunk(
  "generateNewPasswordRequest",
  async ({ generateNewPasswordRequestEmail }, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        const devTest = async () => {
          await account.createRecovery(
            generateNewPasswordRequestEmail,
            localhostChooseNewPasswordRoute
          );
        };
        const result = await devTest();
        console.log("dev result ", result);
      } else if (import.meta.env.MODE === "production") {
        const prodTest = async () => {
          await account.createRecovery(
            generateNewPasswordRequestEmail,
            `https://www.breakfast-and-after-school-club.co.uk${chooseNewPasswordRoute}`
          );
        };
        const prodResult = await prodTest();
        console.log("prod result ", prodResult);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
