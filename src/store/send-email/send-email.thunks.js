import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { format } from "date-fns";

import { getSessionTypeString } from "../../functions/get-session-type-string";

import {
  SEND_EMAIL_BOOKING_CANCELLATION_CONFIRMATION_ENDPOINT,
  SEND_EMAIL_BOOKING_CONFIRMATION_ENDPOINT,
  SEND_EMAIL_BOOKING_NOT_ADDED_TO_DATABASE_ENDPOINT,
  SEND_EMAIL_RESET_SESSION_SPACES_ERROR_ENDPOINT,
  SEND_EMAIL_RESET_SESSION_SPACES_AND_BALANCE_ERROR_ENDPOINT,
  SEND_EMAIL_BALANCE_NOT_UPDATED_ERROR_ENDPOINT,
  SEND_EMAIL_WALET_FUNDS_NOT_ADDED_ERROR_ENDPOINT,
  SEND_EMAIL_TO_ADMIN_CLOSE_ACCOUNT_REQUEST_ENDPOINT,
} from "../../../netlify/api-endpoints/api-endpoints";

export const sendEmailBookingConfirmationAsync = createAsyncThunk(
  "sendEmailBookingConfirmation",
  async (
    {
      email,
      name,
      date,
      sessionType,
      childrenInBooking,
      sessionPrice,
      walletBalance,
    },
    thunkAPI
  ) => {
    try {
      const formattedDate = date ? format(new Date(date), "dd MMMM yyyy") : "";
      const sessionBooked = getSessionTypeString(sessionType);
      const kidsInBooking = childrenInBooking;
      const fundsToDeduct = sessionPrice / 100;
      const balanceRemaining = walletBalance / 100;

      const response = await axios.post(
        SEND_EMAIL_BOOKING_CONFIRMATION_ENDPOINT,
        {
          email,
          name,
          formattedDate,
          sessionBooked,
          kidsInBooking,
          fundsToDeduct,
          balanceRemaining,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailBookingNotAddedToDatabaseAsync = createAsyncThunk(
  "sendEmailBookingNotAddedToDatabase",
  async (
    {
      appOwnerEmail,
      date,
      sessionType,
      childrenInBooking,
      parentEmail,
      parentName,
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_BOOKING_NOT_ADDED_TO_DATABASE_ENDPOINT,
        {
          appOwnerEmail,
          date,
          sessionType,
          childrenInBooking,
          parentEmail,
          parentName,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailResetSessionSpacesErrorAsync = createAsyncThunk(
  "sendEmailResetSessionSpacesError",
  async (
    { appOwnerEmail, date, sessionType, numberOfSpacesToAdd },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_RESET_SESSION_SPACES_ERROR_ENDPOINT,
        {
          appOwnerEmail,
          date,
          sessionType,
          numberOfSpacesToAdd,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailBookingCancellationConfirmationAsync = createAsyncThunk(
  "sendEmailBookingCancellationConfirmation",
  async (
    {
      email,
      name,
      date,
      sessionType,
      childrensName,
      refundPrice,
      walletBalance,
    },
    thunkAPI
  ) => {
    try {
      const formattedDate = date ? format(new Date(date), "dd MMMM yyyy") : "";
      const sessionBooked = getSessionTypeString(sessionType);
      const fundsAddedToWallet = refundPrice / 100;
      const newBalance = walletBalance / 100;

      const response = await axios.post(
        SEND_EMAIL_BOOKING_CANCELLATION_CONFIRMATION_ENDPOINT,
        {
          email,
          name,
          formattedDate,
          sessionBooked,
          childrensName,
          fundsAddedToWallet,
          newBalance,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailResetSessionSpacesAndBalanceErrorAsync = createAsyncThunk(
  "sendEmailResetSessionSpacesAndBalanceError",
  async (
    {
      appOwnerEmail,
      date,
      sessionType,
      numberOfChildrenInBooking,
      id,
      refundAmount,
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_RESET_SESSION_SPACES_AND_BALANCE_ERROR_ENDPOINT,
        {
          appOwnerEmail,
          date,
          sessionType,
          numberOfChildrenInBooking,
          id,
          refundAmount,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailBalanceNotUpdatedErrorAsync = createAsyncThunk(
  "sendEmailBalanceNotUpdatedError",
  async ({ appOwnerEmail, id, refundAmount }, thunkAPI) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_BALANCE_NOT_UPDATED_ERROR_ENDPOINT,
        {
          appOwnerEmail,
          id,
          refundAmount,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailWalletFundsNotAddedErrorAsync = createAsyncThunk(
  "sendEmailWalletFundsNotAddedError",
  async ({ appOwnerEmail, id, walletFundsToAdd }, thunkAPI) => {
    try {
      walletFundsToAdd = walletFundsToAdd * 100;
      const response = await axios.post(
        SEND_EMAIL_WALET_FUNDS_NOT_ADDED_ERROR_ENDPOINT,
        {
          appOwnerEmail,
          id,
          walletFundsToAdd,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailToAdminCloseAccountRequestAsync = createAsyncThunk(
  "sendEmailToAdminCloseAccountRequest",
  async ({ appOwnerEmail, id, email }, thunkAPI) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_TO_ADMIN_CLOSE_ACCOUNT_REQUEST_ENDPOINT,
        {
          appOwnerEmail,
          id,
          email,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
