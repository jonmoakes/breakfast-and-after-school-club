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
  SEND_EMAIL_UPDATE_LATEST_BOOKINGS_AND_CHILDRENS_PARENT_EMAIL_ENDPOINT,
  DB_MANAGE_SEND_EMAIL_BOOKING_CONFIRMATION_ENDPOINT,
  DB_MANAGE_SEND_EMAIL_BOOKING_CANCELLATION_CONFIRMATION_ENDPOINT,
} from "../../../netlify/api-endpoints/api-endpoints";

import { bookSessionRoute } from "../../strings/routes/routes-strings";

export const sendEmailBookingConfirmationAsync = createAsyncThunk(
  "sendEmailBookingConfirmation",
  async (
    { route, date, sessionType, childrenInBooking, sessionPrice, email, name },
    thunkAPI
  ) => {
    try {
      const formattedDate =
        route === bookSessionRoute && date
          ? format(new Date(date), "dd MMMM yyyy")
          : date;

      const sessionBooked = getSessionTypeString(sessionType);
      const kidsInBooking = childrenInBooking;
      const fundsToDeduct = (sessionPrice / 100).toFixed(2);

      const response = await axios.post(
        SEND_EMAIL_BOOKING_CONFIRMATION_ENDPOINT,
        {
          email,
          name,
          formattedDate,
          sessionBooked,
          kidsInBooking,
          fundsToDeduct,
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
      parentName,
      parentPhoneNumber,
      parentsUserId,
      parentEmail,
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
          parentName,
          parentPhoneNumber,
          parentsUserId,
          parentEmail,
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
    { email, name, date, sessionType, childrensName, sessionPrice },
    thunkAPI
  ) => {
    try {
      const formattedDate = date ? format(new Date(date), "dd MMMM yyyy") : "";
      const sessionBooked = getSessionTypeString(sessionType);
      const fundsAddedToWallet = (sessionPrice / 100).toFixed(2);

      const response = await axios.post(
        SEND_EMAIL_BOOKING_CANCELLATION_CONFIRMATION_ENDPOINT,
        {
          email,
          name,
          formattedDate,
          sessionBooked,
          childrensName,
          fundsAddedToWallet,
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
      sessionPrice,
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
          sessionPrice,
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
  async ({ appOwnerEmail, id, sessionPrice }, thunkAPI) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_BALANCE_NOT_UPDATED_ERROR_ENDPOINT,
        {
          appOwnerEmail,
          id,
          sessionPrice,
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
  async ({ appOwnerEmail, childrenIdsToDelete, id, email }, thunkAPI) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_TO_ADMIN_CLOSE_ACCOUNT_REQUEST_ENDPOINT,
        {
          appOwnerEmail,
          childrenIdsToDelete,
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

export const sendEmailUpdateLatestBookingsAndChildrensParentEmailAsync =
  createAsyncThunk(
    "sendEmailUpdateLatestBookingsAndChildrensParentEmail",
    async ({ appOwnerEmail, id, newEmail }, thunkAPI) => {
      try {
        const response = await axios.post(
          SEND_EMAIL_UPDATE_LATEST_BOOKINGS_AND_CHILDRENS_PARENT_EMAIL_ENDPOINT,
          {
            appOwnerEmail,
            id,
            newEmail,
          }
        );

        const statusCode = response.status;
        return statusCode;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const dbManageSendEmailBookingConfirmationAsync = createAsyncThunk(
  "dbManageSendEmailBookingConfirmation",
  async (
    {
      date,
      sessionType,
      parentEmail,
      childrenInBooking,
      formattedSessionPrice,
    },
    thunkAPI
  ) => {
    try {
      const formattedDate = date ? format(new Date(date), "dd MMMM yyyy") : "";
      const sessionBooked = getSessionTypeString(sessionType);

      const response = await axios.post(
        DB_MANAGE_SEND_EMAIL_BOOKING_CONFIRMATION_ENDPOINT,
        {
          parentEmail,
          formattedDate,
          sessionBooked,
          childrenInBooking,
          formattedSessionPrice,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dbManageSendEmailBookingCancellationConfirmationAsync =
  createAsyncThunk(
    "dbManageSendEmailBookingCancellationConfirmation",
    async (
      { sessionDate, typeOfSession, emailOfParent, sessionChildren },
      thunkAPI
    ) => {
      try {
        const formattedDate = sessionDate
          ? format(new Date(sessionDate), "dd MMMM yyyy")
          : "";
        const sessionBooked = getSessionTypeString(typeOfSession);

        const response = await axios.post(
          DB_MANAGE_SEND_EMAIL_BOOKING_CANCELLATION_CONFIRMATION_ENDPOINT,
          {
            emailOfParent,
            formattedDate,
            sessionBooked,
            sessionChildren,
          }
        );

        const statusCode = response.status;
        return statusCode;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
