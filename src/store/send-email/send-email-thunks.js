import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { format } from "date-fns";

import { getSessionTypeString } from "../../functions/get-session-type-string";

import {
  SEND_EMAIL_CANCELLATION_ENDPOINT,
  SEND_EMAIL_WITH_ERROR_ENDPOINT,
  SEND_EMAIL_BOOKING_CONFIRMATION_ENDPOINT,
  SEND_EMAIL_BOOKING_NOT_ADDED_TO_DATABASE_ENDPOINT,
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

      const { status } = response;
      return status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailBookingNotAddedToDatabseAsync = createAsyncThunk(
  "sendEmailBookingNotAddedToDatabse",
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

      const { status } = response;
      return status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendBookingCancellationConfirmationEmailAsync = createAsyncThunk(
  "sendBookingCancellationConfirmationEmail",
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

      const response = await axios.post(SEND_EMAIL_CANCELLATION_ENDPOINT, {
        email,
        name,
        formattedDate,
        sessionBooked,
        childrensName,
        fundsAddedToWallet,
        newBalance,
      });

      const { status } = response;
      return status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailWithErrorAsync = createAsyncThunk(
  "sendEmailWithError",
  async ({ appOwnerEmail, subject, message }, thunkAPI) => {
    try {
      const appAdminEmail = import.meta.env.VITE_APP_ADMIN_EMAIL;

      const response = await axios.post(SEND_EMAIL_WITH_ERROR_ENDPOINT, {
        appOwnerEmail,
        appAdminEmail,
        subject,
        message,
      });

      const { status } = response;
      return status;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
