import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { signUpFormReducer } from "./sign-up-form/sign-up-form.slice";
import { signInFormReducer } from "./sign-in-form/sign-in-form.slice";
import { contactFormReducer } from "./contact-form/contact-form.slice";
import { userReducer } from "./user/user.slice";
import { walletFundsToAddReducer } from "./wallet-funds-to-add/wallet-funds-to-add.slice";
import { cardInputResultReducer } from "./card-input-result/card-input-result.slice";
import { progressiveImageReducer } from "./progressive-image/progressive-image.slice";
import { isOnlineReducer } from "./is-online/is-online.slice";
import { shouldShowElementReducer } from "./should-show-element/should-show-element.slice";
import { passwordIsVisibleReducer } from "./password-is-visible/password-is-visible.slice";
import { updateEmailReducer } from "./update-email/update-email.slice";
import { uploadDatesToDatabaseReducer } from "./upload-dates-to-database/upload-dates-to-database.slice";
import { requestDateDataReducer } from "./request-date-data/request-date-data.slice";
import { handlePaymentReducer } from "./handle-payment/handle-payment.slice";
import { bookSessionReducer } from "./book-session/book-session.slice";
import { sessionTypesAndPricesReducer } from "./session-types-and-prices/session-types-and-prices.slice";
import { dateAndTimeReducer } from "./date-and-time/date-and-time.slice";
import { addChildInfoReducer } from "./add-child-info/add-child-info.slice";
import { getUsersChildrenReducer } from "./get-users-children/get-users-children.slice";
import { editChildInfoReducer } from "./edit-child-info/edit-child-info.slice";
import { deleteChildInfoReducer } from "./delete-child-info/delete-child-info.slice";
import { bookedSessionsOwnerReducer } from "./booked-sessions-owner/booked-sessions-owner.slice";
import { chosenEntryChildDetailsReducer } from "./chosen-entry-child-details/chosen-entry-child-details.slice";
import { bookedSessionsUserReducer } from "./booked-sessions-user/booked-sessions-user.slice";
import { userBookingToDeleteReducer } from "./user-booking-to-delete/user-booking-to-delete.slice";
import { sendEmailReducer } from "./send-email/send-email.slice";
import { generateNewPasswordRequestReducer } from "./generate-new-password-request/generate-new-password-request.slice";
import { chooseNewPasswordReducer } from "./choose-new-password/choose-new-password.slice";
import { getAllChildrenReducer } from "./get-all-children/get-all-children.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  signUpForm: signUpFormReducer,
  signInForm: signInFormReducer,
  contactForm: contactFormReducer,
  user: userReducer,
  walletFundsToAdd: walletFundsToAddReducer,
  cardInputResult: cardInputResultReducer,
  progressiveImage: progressiveImageReducer,
  isOnline: isOnlineReducer,
  shouldShowElement: shouldShowElementReducer,
  passwordIsVisible: passwordIsVisibleReducer,
  updateEmail: updateEmailReducer,
  uploadDatesToDatabase: uploadDatesToDatabaseReducer,
  requestDateData: requestDateDataReducer,
  handlePayment: handlePaymentReducer,
  bookSession: bookSessionReducer,
  sessionTypesAndPrices: sessionTypesAndPricesReducer,
  dateAndTime: dateAndTimeReducer,
  addChildInfo: addChildInfoReducer,
  getUsersChildren: getUsersChildrenReducer,
  editChildInfo: editChildInfoReducer,
  deleteChildInfo: deleteChildInfoReducer,
  bookedSessionsOwner: bookedSessionsOwnerReducer,
  chosenEntryChildDetails: chosenEntryChildDetailsReducer,
  bookedSessionsUser: bookedSessionsUserReducer,
  userBookingToDelete: userBookingToDeleteReducer,
  sendEmail: sendEmailReducer,
  generateNewPasswordRequest: generateNewPasswordRequestReducer,
  chooseNewPassword: chooseNewPasswordReducer,
  getAllChildren: getAllChildrenReducer,
});
