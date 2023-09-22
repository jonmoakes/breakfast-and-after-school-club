import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { signUpFormReducer } from "./sign-up-form/sign-up-form.slice";
import { signInFormReducer } from "./sign-in-form/sign-in-form.slice";
import { forgotPasswordRequestReducer } from "./forgot-password-request/forgot-password-request.slice";
import { forgotPasswordResultReducer } from "./forgot-password-result/forgot-password-result.slice";
import { contactFormReducer } from "./contact-form/contact-form.slice";
import { userReducer } from "./user/user.slice";
import { walletFundsToAddReducer } from "./wallet-funds-to-add/wallet-funds-to-add.slice";
import { cardInputResultReducer } from "./card-input-result/card-input-result.slice";
import { progressiveImageReducer } from "./progressive-image/progressive-image.slice";
import { isOnlineReducer } from "./is-online/is-online.slice";
import { shouldShowElementReducer } from "./should-show-element/should-show-element.slice";
import { passwordIsVisibleReducer } from "./password-is-visible/password-is-visible.slice";
import { magicUrlRequestReducer } from "./magic-url-request/magic-url-request.slice";
import { updateEmailReducer } from "./update-email/update-email.slice";
import { updatePasswordRequestReducer } from "./update-password-request/update-password-request.slice";
import { updatePasswordResultReducer } from "./update-password-result/update-password-result.slice";
import { closeAccountReducer } from "./close-account/close-account.slice";
import { uploadDatesToDatabaseReducer } from "./upload-dates-to-database/upload-dates-to-database.slice";
import { requestDateDataReducer } from "./request-date-data/request-date-data.slice";
import { handlePaymentReducer } from "./handle-payment/handle-payment.slice";
import { bookSessionReducer } from "./book-session/book-session.slice";
import { sessionTypesAndPricesReducer } from "./session-types-and-prices/session-types-and-prices.slice";
import { dateAndTimeReducer } from "./date-and-time/date-and-time.slice";
import { addChildInfoReducer } from "./add-child-info/add-child-info.slice";
import { getUsersChildrenReducer } from "./get-users-children/get-users-children-slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  signUpForm: signUpFormReducer,
  signInForm: signInFormReducer,
  forgotPasswordRequest: forgotPasswordRequestReducer,
  forgotPasswordResult: forgotPasswordResultReducer,
  contactForm: contactFormReducer,
  user: userReducer,
  walletFundsToAdd: walletFundsToAddReducer,
  cardInputResult: cardInputResultReducer,
  progressiveImage: progressiveImageReducer,
  isOnline: isOnlineReducer,
  shouldShowElement: shouldShowElementReducer,
  passwordIsVisible: passwordIsVisibleReducer,
  magicUrlRequest: magicUrlRequestReducer,
  updateEmail: updateEmailReducer,
  updatePasswordRequest: updatePasswordRequestReducer,
  updatePasswordResult: updatePasswordResultReducer,
  closeAccount: closeAccountReducer,
  uploadDatesToDatabase: uploadDatesToDatabaseReducer,
  requestDateData: requestDateDataReducer,
  handlePayment: handlePaymentReducer,
  bookSession: bookSessionReducer,
  sessionTypesAndPrices: sessionTypesAndPricesReducer,
  dateAndTime: dateAndTimeReducer,
  addChildInfo: addChildInfoReducer,
  getUsersChildren: getUsersChildrenReducer,
});
