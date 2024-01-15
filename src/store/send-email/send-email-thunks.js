import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { format } from "date-fns";

import { getSessionTypeString } from "../../functions/get-session-type-string";
import { capitalizeString } from "../../functions/capitalize-string";

import { cancellationEmailToSend } from "./email-to-send";

import {
  SEND_EMAIL_ENDPOINT,
  SEND_EMAIL_WITH_ERROR_ENDPOINT,
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
      const usersName = capitalizeString(name);
      const formattedDate = date ? format(new Date(date), "dd MMMM yyyy") : "";
      const sessionBooked = capitalizeString(getSessionTypeString(sessionType));
      const kidsInBooking = capitalizeString(childrenInBooking);
      const fundsToDeduct = sessionPrice / 100;
      const balanceRemaining = walletBalance / 100;

      const response = await axios.post(SEND_EMAIL_ENDPOINT, {
        email,
        usersName,
        formattedDate,
        sessionBooked,
        kidsInBooking,
        fundsToDeduct,
        balanceRemaining,
      });

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
      subject,
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
      const response = await axios.post(SEND_EMAIL_ENDPOINT, {
        email,
        subject,
        message: cancellationEmailToSend(
          name,
          date,
          sessionType,
          childrensName,
          refundPrice,
          walletBalance
        ),
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
