import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";

export const getClientSecretAsync = createAsyncThunk(
  "getClientSecret",
  async ({ walletFundsToAdd }, thunkAPI) => {
    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: Math.round(walletFundsToAdd * 100) }),
        }
      ).then((res) => res.json());

      const client_secret = response.paymentIntent.client_secret;
      console.log("payment intent ", response.paymentIntent);

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

export const uploadWalletFundsToDatabaseAsync = createAsyncThunk(
  "uploadWalletFundsToDatabase",
  async ({ uploadResult, id, walletFundsToAdd }, thunkAPI) => {
    if (uploadResult) return;
    try {
      const walletBalanceFromDatabase = await databases.getDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        id
      );

      const { walletBalance } = walletBalanceFromDatabase;

      await databases.updateDocument(
        import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        id,
        {
          walletBalance: walletBalance + Math.round(walletFundsToAdd * 100),
        }
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
  uploadResult: "",
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
        state.error = null;
        state.showConfirmButton = false;
      })
      .addCase(getPaymentResultAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.client_secret = "";
        state.paymentResult = {};
        state.error = action.payload;
        state.showConfirmButton = false;
      })
      .addCase(uploadWalletFundsToDatabaseAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadWalletFundsToDatabaseAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.uploadResult = "success";
        state.paymentResult = {};
        state.error = null;
      })
      .addCase(uploadWalletFundsToDatabaseAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.uploadResult = "failed";
        state.paymentResult = {};
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
