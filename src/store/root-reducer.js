import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { loaderReducer } from "./loader/loader.slice";
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
import { updatePasswordReducer } from "./update-password/update-password.slice";
import { closeAccountReducer } from "./close-account/close-account.slice";
import { uploadDatesToDatabaseReducer } from "./upload-dates-to-database/upload-dates-to-database.slice";
import { requestDateDataReducer } from "./request-date-data/request-date-data.slice";
import { handlePaymentReducer } from "./handle-payment/handle-payment.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  loader: loaderReducer,
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
  updatePassword: updatePasswordReducer,
  closeAccount: closeAccountReducer,
  uploadDatesToDatabase: uploadDatesToDatabaseReducer,
  requestDateData: requestDateDataReducer,
  handlePayment: handlePaymentReducer,
});
