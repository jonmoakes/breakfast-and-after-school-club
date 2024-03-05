import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import { CREATE_PAYMENT_INTENT_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const getClientSecretAsync = createAsyncThunk(
  "getClientSecret",
  async ({ stripeSecretKey, walletFundsToAdd }, thunkAPI) => {
    try {
      const response = await fetch(CREATE_PAYMENT_INTENT_ENDPOINT, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stripeSecretKey,
          amount: Math.round(walletFundsToAdd.toFixed(2) * 100),
        }),
      }).then((res) => res.json());

      const client_secret = response.paymentIntent.client_secret;

      return client_secret;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPaymentResultAsync = createAsyncThunk(
  "getPaymentResult",
  async ({ stripe, client_secret, cardElement, name, email }, thunkAPI) => {
    try {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name,
            email,
          },
        },
      });
      return paymentResult;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWalletFundsToDatabaseAsync = createAsyncThunk(
  "addWalletFundsToDatabase",
  async ({ databaseId, collectionId, id, walletFundsToAdd }, thunkAPI) => {
    try {
      const walletBalanceFromDatabase = await manageDatabaseDocument(
        "get",
        databaseId,
        collectionId,
        id
      );

      const { walletBalance } = walletBalanceFromDatabase;
      const dataToUpdate = {
        walletBalance: walletBalance + Math.round(walletFundsToAdd * 100),
      };

      await manageDatabaseDocument(
        "update",
        databaseId,
        collectionId,
        id,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
