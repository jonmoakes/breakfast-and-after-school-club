import { createSelector, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./database-management-initial-state";
import {
  updateBookingClosingTimesAsync,
  updateSessionTimesAsync,
  updateSessionPriceAsync,
  updateUsersBalanceAsync,
  addBookingDataAsync,
  updateSessionSpacesDocAsync,
  deleteDocumentAsync,
  createUserDocumentAsync,
  createChildDocumentAsync,
  updateUsersLatestBookingsWithNewEmailAsync,
  updateChildrensListParentEmailWithNewEmailAsync,
  confirmPasswordForDbManagementAccessAsync,
} from "./database-management-thunks";

export const databaseManagementSlice = createSlice({
  name: "databaseManagement",
  initialState: INITIAL_STATE,
  reducers: {
    setNewMorningBookingClosingTime(state, action) {
      state.newMorningBookingClosingTime = action.payload;
    },
    resetNewMorningBookingClosingTime(state) {
      state.newMorningBookingClosingTime = "";
    },
    setNewAfternoonBookingClosingTime(state, action) {
      state.newAfternoonBookingClosingTime = action.payload;
    },
    resetNewAfternoonBookingClosingTime(state) {
      state.newAfternoonBookingClosingTime = "";
    },
    resetBookingClosingTimeResult(state) {
      state.bookingClosingTimeResult = "";
    },
    resetBookingClosingTimeError(state) {
      state.bookingClosingTimeError = null;
    },

    setNewMorningSessionTime(state, action) {
      state.newMorningSessionTime = action.payload;
    },
    setNewAfternoonShortSessionTime(state, action) {
      state.newAfternoonShortSessionTime = action.payload;
    },
    setNewAfternoonLongSessionTime(state, action) {
      state.newAfternoonLongSessionTime = action.payload;
    },
    resetNewSessionTimesDetails(state) {
      state.newMorningSessionTime = "";
      state.newAfternoonShortSessionTime = "";
      state.newAfternoonLongSessionTime = "";
    },
    resetSessionTimeResult(state) {
      state.sessionTimeResult = "";
    },
    resetSessionTimeError(state) {
      state.sessionTimeError = null;
    },
    setNewMorningSessionPrice(state, action) {
      state.newMorningSessionPrice = action.payload;
    },
    setNewAfternoonShortSessionPrice(state, action) {
      state.newAfternoonShortSessionPrice = action.payload;
    },
    setNewAfternoonLongSessionPrice(state, action) {
      state.newAfternoonLongSessionPrice = action.payload;
    },
    setNewMorningAndAfternoonShortSessionPrice(state, action) {
      state.newMorningAndAfternoonShortSessionPrice = action.payload;
    },
    setNewMorningAndAfternoonLongSessionPrice(state, action) {
      state.newMorningAndAfternoonLongSessionPrice = action.payload;
    },
    resetNewSessionPricesDetails(state) {
      state.newMorningSessionPrice = "";
      state.newAfternoonShortSessionPrice = "";
      state.newAfternoonLongSessionPrice = "";
      state.newMorningAndAfternoonShortSessionPrice = "";
      state.newMorningAndAfternoonLongSessionPrice = "";
    },
    resetSessionPricesResult(state) {
      state.sessionPricesResult = "";
    },
    resetSessionPricesError(state) {
      state.sessionPricesError = null;
    },

    setDataToUpdateDocument(state, action) {
      state.dataToUpdateDocument = action.payload;
    },
    resetDataToUpdateDocument(state) {
      state.dataToUpdateDocument = {};
    },
    resetUpdateBalanceResult(state) {
      state.updateBalanceResult = "";
    },
    resetUpdateBalanceError(state) {
      state.updateBalanceError = null;
    },
    resetAddBookingResult(state) {
      state.addBookingResult = "";
    },
    resetAddBookingError(state) {
      state.addBookingError = null;
    },
    resetUpdateSessionSpacesResult(state) {
      state.updateSessionSpacesResult = "";
    },
    resetUpdateSessionSpacesError(state) {
      state.updateSessionSpacesError = null;
    },
    setErrorId(state, action) {
      state.errorId = action.payload;
    },
    setUserHasDeletedAllChildren(state, action) {
      state.userHasDeletedAllChildren = action.payload;
    },
    resetDeleteDocumentResult(state) {
      state.deleteDocumentResult = "";
    },
    resetDeleteDocumentError(state) {
      state.deleteDocumentError = null;
    },
    resetCreateUserDocumentResult(state) {
      state.createUserDocumentResult = "";
    },
    resetCreateUserDocumentError(state) {
      state.createUserDocumentError = null;
    },
    resetCreateChildDocumentResult(state) {
      state.createChildDocumentResult = "";
    },
    resetCreateChildDocumentError(state) {
      state.createChildDocumentError = null;
    },
    setBookingToCancelDetails(state, action) {
      state.bookingToCancelDetails = action.payload;
    },
    resetBookingToCancelDetails(state) {
      state.bookingToCancelDetails = {};
    },
    setUserOfAppChoice(state, action) {
      state.userOfAppChoice = action.payload;
    },
    resetUserOfAppChoice(state) {
      state.userOfAppChoice = null;
    },
    resetUpdateBookingEmailsResult(state) {
      state.updateBookingEmailsResult = "";
    },
    resetUpdateBookingEmailsError(state) {
      state.updateBookingEmailsError = null;
    },
    resetUpdateChildrensListEmailResult(state) {
      state.updateChildrensListEmailResult = "";
    },
    resetUpdateChildrensListEmailError(state) {
      state.updateChildrensListEmailError = null;
    },
    resetPasswordForDbAccessResult(state) {
      state.passwordForDbAccessResult = "";
    },
    resetDatabaseManagementState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDatabaseManagementSelectors: createSelector(
      (state) => state.databaseManagementIsLoading,

      (state) => state.newMorningBookingClosingTime,
      (state) => state.newAfternoonBookingClosingTime,
      (state) => state.bookingClosingTimeResult,
      (state) => state.bookingClosingTimeError,

      (state) => state.newMorningSessionTime,
      (state) => state.newAfternoonShortSessionTime,
      (state) => state.newAfternoonLongSessionTime,
      (state) => state.sessionTimeResult,
      (state) => state.sessionTimeError,

      (state) => state.newMorningSessionPrice,
      (state) => state.newAfternoonShortSessionPrice,
      (state) => state.newAfternoonLongSessionPrice,
      (state) => state.newMorningAndAfternoonShortSessionPrice,
      (state) => state.newMorningAndAfternoonLongSessionPrice,
      (state) => state.sessionPricesResult,
      (state) => state.sessionPricesError,

      (state) => state.dataToUpdateDocument,
      (state) => state.updateBalanceResult,
      (state) => state.updateBalanceError,
      (state) => state.addBookingResult,
      (state) => state.addBookingError,
      (state) => state.updateSessionSpacesResult,
      (state) => state.updateSessionSpacesError,
      (state) => state.errorId,
      (state) => state.userHasDeletedAllChildren,
      (state) => state.deleteDocumentResult,
      (state) => state.deleteDocumentError,
      (state) => state.createUserDocumentResult,
      (state) => state.createUserDocumentError,
      (state) => state.createChildDocumentResult,
      (state) => state.createChildDocumentError,
      (state) => state.bookingToCancelDetails,
      (state) => state.userOfAppChoice,
      (state) => state.updateBookingEmailsResult,
      (state) => state.updateBookingEmailsError,
      (state) => state.updateChildrensListEmailResult,
      (state) => state.updateChildrensListEmailError,
      (state) => state.passwordForDbAccessResult,
      (
        databaseManagementIsLoading,

        newMorningBookingClosingTime,
        newAfternoonBookingClosingTime,
        bookingClosingTimeResult,
        bookingClosingTimeError,

        newMorningSessionTime,
        newAfternoonShortSessionTime,
        newAfternoonLongSessionTime,
        sessionTimeResult,
        sessionTimeError,

        newMorningSessionPrice,
        newAfternoonShortSessionPrice,
        newAfternoonLongSessionPrice,
        newMorningAndAfternoonShortSessionPrice,
        newMorningAndAfternoonLongSessionPrice,
        sessionPricesResult,
        sessionPricesError,

        dataToUpdateDocument,
        updateBalanceResult,
        updateBalanceError,
        addBookingResult,
        addBookingError,
        updateSessionSpacesResult,
        updateSessionSpacesError,
        errorId,
        userHasDeletedAllChildren,
        deleteDocumentResult,
        deleteDocumentError,
        createUserDocumentResult,
        createUserDocumentError,
        createChildDocumentResult,
        createChildDocumentError,
        bookingToCancelDetails,
        userOfAppChoice,
        updateBookingEmailsResult,
        updateBookingEmailsError,
        updateChildrensListEmailResult,
        updateChildrensListEmailError,
        passwordForDbAccessResult
      ) => {
        return {
          databaseManagementIsLoading,

          newMorningBookingClosingTime,
          newAfternoonBookingClosingTime,
          bookingClosingTimeResult,
          bookingClosingTimeError,

          newMorningSessionTime,
          newAfternoonShortSessionTime,
          newAfternoonLongSessionTime,
          sessionTimeResult,
          sessionTimeError,

          newMorningSessionPrice,
          newAfternoonShortSessionPrice,
          newAfternoonLongSessionPrice,
          newMorningAndAfternoonShortSessionPrice,
          newMorningAndAfternoonLongSessionPrice,
          sessionPricesResult,
          sessionPricesError,

          dataToUpdateDocument,
          updateBalanceResult,
          updateBalanceError,
          addBookingResult,
          addBookingError,
          updateSessionSpacesResult,
          updateSessionSpacesError,
          errorId,
          userHasDeletedAllChildren,
          deleteDocumentResult,
          deleteDocumentError,
          createUserDocumentResult,
          createUserDocumentError,
          createChildDocumentResult,
          createChildDocumentError,
          bookingToCancelDetails,
          userOfAppChoice,
          updateBookingEmailsResult,
          updateBookingEmailsError,
          updateChildrensListEmailResult,
          updateChildrensListEmailError,
          passwordForDbAccessResult,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateBookingClosingTimesAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(updateBookingClosingTimesAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.bookingClosingTimeResult = "fulfilled";
        state.bookingClosingTimeError = null;
      })
      .addCase(updateBookingClosingTimesAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.bookingClosingTimeResult = "rejected";
        state.bookingClosingTimeError = action.payload;
      })
      .addCase(updateSessionTimesAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(updateSessionTimesAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.sessionTimeResult = "fulfilled";
        state.sessionTimeError = null;
      })
      .addCase(updateSessionTimesAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.sessionTimeResult = "rejected";
        state.sessionTimeError = action.payload;
      })
      .addCase(updateSessionPriceAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(updateSessionPriceAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.sessionPricesResult = "fulfilled";
        state.sessionPricesError = null;
      })
      .addCase(updateSessionPriceAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.sessionPricesResult = "rejected";
        state.sessionPricesError = action.payload;
      })
      .addCase(updateUsersBalanceAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(updateUsersBalanceAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.updateBalanceResult = "fulfilled";
        state.updateBalanceError = null;
      })
      .addCase(updateUsersBalanceAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.updateBalanceResult = "rejected";
        state.updateBalanceError = action.payload;
      })
      .addCase(addBookingDataAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(addBookingDataAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.addBookingResult = "fulfilled";
        state.addBookingError = null;
      })
      .addCase(addBookingDataAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.addBookingResult = "rejected";
        state.addBookingError = action.payload;
      })
      .addCase(updateSessionSpacesDocAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(updateSessionSpacesDocAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.updateSessionSpacesResult = "fulfilled";
        state.updateSessionSpacesError = null;
      })
      .addCase(updateSessionSpacesDocAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.updateSessionSpacesResult = "rejected";
        state.updateSessionSpacesError = action.payload;
      })
      .addCase(deleteDocumentAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(deleteDocumentAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.deleteDocumentResult = "fulfilled";
        state.deleteDocumentError = null;
      })
      .addCase(deleteDocumentAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.deleteDocumentResult = "rejected";
        state.deleteDocumentError = action.payload;
      })
      .addCase(createUserDocumentAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(createUserDocumentAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.createUserDocumentResult = "fulfilled";
        state.createUserDocumentError = null;
      })
      .addCase(createUserDocumentAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.createUserDocumentResult = "rejected";
        state.createUserDocumentError = action.payload;
      })
      .addCase(createChildDocumentAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(createChildDocumentAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.createChildDocumentResult = "fulfilled";
        state.createChildDocumentError = null;
      })
      .addCase(createChildDocumentAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.createChildDocumentResult = "rejected";
        state.createChildDocumentError = action.payload;
      })
      .addCase(updateUsersLatestBookingsWithNewEmailAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(
        updateUsersLatestBookingsWithNewEmailAsync.fulfilled,
        (state) => {
          state.databaseManagementIsLoading = false;
          state.updateBookingEmailsResult = "fulfilled";
          state.updateBookingEmailsError = null;
        }
      )
      .addCase(
        updateUsersLatestBookingsWithNewEmailAsync.rejected,
        (state, action) => {
          state.databaseManagementIsLoading = false;
          state.updateBookingEmailsResult = "rejected";
          state.updateBookingEmailsError = action.payload;
        }
      )
      .addCase(
        updateChildrensListParentEmailWithNewEmailAsync.pending,
        (state) => {
          state.databaseManagementIsLoading = true;
        }
      )
      .addCase(
        updateChildrensListParentEmailWithNewEmailAsync.fulfilled,
        (state) => {
          state.databaseManagementIsLoading = false;
          state.updateChildrensListEmailResult = "fulfilled";
          state.updateChildrensListEmailError = null;
        }
      )
      .addCase(
        updateChildrensListParentEmailWithNewEmailAsync.rejected,
        (state, action) => {
          state.databaseManagementIsLoading = false;
          state.updateChildrensListEmailResult = "rejected";
          state.updateChildrensListEmailError = action.payload;
        }
      )
      .addCase(confirmPasswordForDbManagementAccessAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(
        confirmPasswordForDbManagementAccessAsync.rejected,
        (state, action) => {
          state.databaseManagementIsLoading = false;
          state.passwordForDbAccessResult = action.payload;
        }
      );
  },
});

export const {
  setNewMorningBookingClosingTime,
  resetNewMorningBookingClosingTime,
  setNewAfternoonBookingClosingTime,
  resetNewAfternoonBookingClosingTime,
  resetBookingClosingTimeResult,
  resetBookingClosingTimeError,

  setNewMorningSessionTime,
  setNewAfternoonShortSessionTime,
  setNewAfternoonLongSessionTime,
  resetNewSessionTimesDetails,
  resetSessionTimeResult,
  resetSessionTimeError,

  setNewMorningSessionPrice,
  setNewAfternoonShortSessionPrice,
  setNewAfternoonLongSessionPrice,
  setNewMorningAndAfternoonShortSessionPrice,
  setNewMorningAndAfternoonLongSessionPrice,
  resetNewSessionPricesDetails,
  resetSessionPricesResult,
  resetSessionPricesError,

  setDataToUpdateDocument,
  resetDataToUpdateDocument,
  resetUpdateBalanceResult,
  resetUpdateBalanceError,
  resetAddBookingResult,
  resetAddBookingError,
  resetUpdateSessionSpacesResult,
  resetUpdateSessionSpacesError,
  setErrorId,
  setUserHasDeletedAllChildren,
  resetDeleteDocumentResult,
  resetDeleteDocumentError,
  resetCreateUserDocumentResult,
  resetCreateUserDocumentError,
  resetCreateChildDocumentResult,
  resetCreateChildDocumentError,
  setBookingToCancelDetails,
  resetBookingToCancelDetails,
  setUserOfAppChoice,
  resetUserOfAppChoice,
  resetDatabaseManagementState,
  resetUpdateBookingEmailsResult,
  resetUpdateBookingEmailsError,
  resetUpdateChildrensListEmailResult,
  resetUpdateChildrensListEmailError,
  resetPasswordForDbAccessResult,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
