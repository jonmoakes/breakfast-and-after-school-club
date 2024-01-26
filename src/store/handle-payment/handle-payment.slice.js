import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
          amount: Math.round(walletFundsToAdd * 100),
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

const initialState = {
  isLoading: false,
  client_secret: "",
  error: null,
  showConfirmButton: false,
  paymentResult: {},
  walletFundsAddedResult: "",
};

const handlePaymentSlice = createSlice({
  name: "handlePayment",
  initialState,
  reducers: {
    resetErrorMessage(state) {
      state.error = "";
    },
    resetClientSecret(state) {
      state.client_secret = "";
    },
    resetPreResultHandlePaymentState(state) {
      state.isLoading = false;
      state.client_secret = "";
      state.error = null;
      state.showConfirmButton = false;
    },
    resetAllHandlePaymentState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClientSecretAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getClientSecretAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.client_secret = action.payload;
        state.showConfirmButton = true;
        state.error = null;
      })
      .addCase(getClientSecretAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.client_secret = "";
        state.error = action.payload;
        state.showConfirmButton = false;
      })
      .addCase(getPaymentResultAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPaymentResultAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.client_secret = "";
        state.paymentResult = action.payload;
        state.showConfirmButton = false;
      })
      .addCase(getPaymentResultAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.client_secret = "";
        state.error = action.payload;
        state.showConfirmButton = false;
      })
      .addCase(addWalletFundsToDatabaseAsync.pending, (state) => {
        state.isLoading = true;
        state.paymentResult = "completed";
      })
      .addCase(addWalletFundsToDatabaseAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.walletFundsAddedResult = "succeeded";
      })
      .addCase(addWalletFundsToDatabaseAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.walletFundsAddedResult = "rejected";
        state.error = action.payload;
      });
  },
});

export const {
  resetErrorMessage,
  resetClientSecret,
  resetPreResultHandlePaymentState,
  resetAllHandlePaymentState,
} = handlePaymentSlice.actions;

export const handlePaymentReducer = handlePaymentSlice.reducer;
