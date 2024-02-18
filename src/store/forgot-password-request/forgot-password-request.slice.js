import { createSelector, createSlice } from "@reduxjs/toolkit";
import { generateForgotPasswordLinkAsync } from "./forgot-password-request-thunks";

const INITIAL_STATE = {
  forgotPasswordRequestEmail: "",
  forgotPasswordRequestIsLoading: false,
  forgotPasswordRequestResult: "",
  forgotPasswordRequestError: null,
};

export const forgotPasswordRequestSlice = createSlice({
  name: "forgotPasswordRequest",
  initialState: INITIAL_STATE,
  reducers: {
    setForgotPasswordRequestEmail(state, action) {
      state.forgotPasswordRequestEmail = action.payload;
    },
    resetForgotPasswordRequestState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectForgotPasswordRequestSelectors: createSelector(
      (state) => state.forgotPasswordRequestEmail,
      (state) => state.forgotPasswordRequestIsLoading,
      (state) => state.forgotPasswordRequestResult,
      (state) => state.forgotPasswordRequestError,
      (
        forgotPasswordRequestEmail,
        forgotPasswordRequestIsLoading,
        forgotPasswordRequestResult,
        forgotPasswordRequestError
      ) => {
        return {
          forgotPasswordRequestEmail,
          forgotPasswordRequestIsLoading,
          forgotPasswordRequestResult,
          forgotPasswordRequestError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateForgotPasswordLinkAsync.pending, (state) => {
        state.forgotPasswordRequestIsLoading = true;
      })
      .addCase(generateForgotPasswordLinkAsync.fulfilled, (state) => {
        state.forgotPasswordRequestIsLoading = false;
        state.forgotPasswordRequestError = null;
        state.forgotPasswordRequestEmail = "";
        state.forgotPasswordRequestResult = "success";
      })
      .addCase(generateForgotPasswordLinkAsync.rejected, (state, action) => {
        state.forgotPasswordRequestIsLoading = false;
        state.forgotPasswordRequestError = action.payload;
        state.forgotPasswordRequestResult = "";
      });
  },
});

export const {
  setForgotPasswordRequestEmail,
  resetForgotPasswordRequestState,
} = forgotPasswordRequestSlice.actions;
export const { selectForgotPasswordRequestSelectors } =
  forgotPasswordRequestSlice.selectors;

export const forgotPasswordRequestReducer = forgotPasswordRequestSlice.reducer;
